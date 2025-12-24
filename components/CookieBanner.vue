<template>
    <Transition name="fade">
        <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-gray-900 to-transparent">
            <div class="max-w-6xl mx-auto bg-eerie-black border border-gray-700 rounded-lg shadow-2xl p-6">
                <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <!-- Icon & Text -->
                    <div class="flex-1">
                        <div class="flex items-start gap-3">
                            <span class="text-3xl">🍪</span>
                            <div>
                                <h3 class="text-lg font-semibold text-white mb-2">
                                    Cookie-Hinweis
                                </h3>
                                <p class="text-sm text-gray-300 leading-relaxed">
                                    Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu betreiben und zu verbessern. 
                                    Dazu gehören auch Cookies von Drittanbietern wie <strong>Google AdSense</strong> für Werbung und 
                                    <strong>Amazon</strong> für Affiliate-Links. Mit "Alle akzeptieren" stimmst du der Verwendung aller Cookies zu.
                                </p>
                                <div class="flex gap-4 mt-3 text-xs">
                                    <NuxtLink to="/datenschutz" class="text-blue-400 hover:text-blue-300 underline">
                                        Datenschutzerklärung
                                    </NuxtLink>
                                    <NuxtLink to="/impressum" class="text-blue-400 hover:text-blue-300 underline">
                                        Impressum
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            @click="handleReject"
                            class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                            Nur notwendige
                        </button>
                        <button
                            @click="handleAcceptAll"
                            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                            Alle akzeptieren
                        </button>
                    </div>
                </div>

                <!-- Advanced Settings (Optional - kann erweitert werden) -->
                <div v-if="showDetails" class="mt-4 pt-4 border-t border-gray-700">
                    <div class="space-y-3 text-sm">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="font-semibold text-white">Notwendige Cookies</p>
                                <p class="text-gray-400 text-xs">Erforderlich für die Funktion der Website</p>
                            </div>
                            <span class="text-green-400 font-semibold">Immer aktiv</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="font-semibold text-white">Marketing & Werbung (AdSense)</p>
                                <p class="text-gray-400 text-xs">Für personalisierte Werbung und Analytics</p>
                            </div>
                            <input
                                v-model="preferences.marketing"
                                type="checkbox"
                                class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="font-semibold text-white">Affiliate Cookies (Amazon)</p>
                                <p class="text-gray-400 text-xs">Für Produktempfehlungen und Affiliate-Links</p>
                            </div>
                            <input
                                v-model="preferences.affiliate"
                                type="checkbox"
                                class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500">
                        </div>
                    </div>
                    <div class="flex gap-3 mt-4">
                        <button
                            @click="showDetails = false"
                            class="text-sm text-gray-400 hover:text-white">
                            Zurück
                        </button>
                        <button
                            @click="handleSavePreferences"
                            class="ml-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
                            Einstellungen speichern
                        </button>
                    </div>
                </div>

                <!-- Toggle Advanced Settings -->
                <button
                    v-if="!showDetails"
                    @click="showDetails = true"
                    class="mt-4 text-sm text-gray-400 hover:text-white underline">
                    Erweiterte Einstellungen
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);
const showDetails = ref(false);
const preferences = ref({
    necessary: true, // Immer aktiv
    marketing: false,
    affiliate: false
});

const COOKIE_CONSENT_KEY = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 365;

// Check if consent was already given
onMounted(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
        // Show banner after short delay for better UX
        setTimeout(() => {
            showBanner.value = true;
        }, 1000);
    } else {
        // Load saved preferences
        try {
            const saved = JSON.parse(consent);
            preferences.value = saved;
            applyConsent(saved);
        } catch (e) {
            console.error('Error loading cookie consent:', e);
        }
    }
});

// Handle Accept All
const handleAcceptAll = () => {
    const consent = {
        necessary: true,
        marketing: true,
        affiliate: true,
        timestamp: Date.now()
    };
    saveConsent(consent);
    applyConsent(consent);
    showBanner.value = false;
};

// Handle Reject (only necessary)
const handleReject = () => {
    const consent = {
        necessary: true,
        marketing: false,
        affiliate: false,
        timestamp: Date.now()
    };
    saveConsent(consent);
    applyConsent(consent);
    showBanner.value = false;
};

// Handle Save Custom Preferences
const handleSavePreferences = () => {
    const consent = {
        ...preferences.value,
        timestamp: Date.now()
    };
    saveConsent(consent);
    applyConsent(consent);
    showBanner.value = false;
};

// Save consent to localStorage
const saveConsent = (consent) => {
    try {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    } catch (e) {
        console.error('Error saving cookie consent:', e);
    }
};

// Apply consent settings
const applyConsent = (consent) => {
    // Here you can implement logic to enable/disable tracking scripts
    if (consent.marketing) {
        // Enable AdSense tracking if needed
        console.log('Marketing cookies enabled');
    }
    if (consent.affiliate) {
        // Enable Amazon affiliate tracking if needed
        console.log('Affiliate cookies enabled');
    }
    
    // Emit event for parent components
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: consent }));
    }
};

// Export function to reopen banner (for "change settings" links)
defineExpose({
    reopenBanner: () => {
        showBanner.value = true;
    }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.bg-eerie-black {
    background-color: #1a1a1a;
}
</style>

