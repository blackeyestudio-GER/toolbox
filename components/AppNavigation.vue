<template>
    <nav class="mb-8 bg-eerie-black rounded-lg p-4">
        <div class="flex justify-center gap-8 text-base flex-wrap">
            <NuxtLink 
                to="/" 
                :class="[
                    'transition font-medium',
                    currentPage === 'home' 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-blue-400'
                ]"
            >
                🏠 Home
            </NuxtLink>
            <NuxtLink 
                to="/obs-guide" 
                :class="[
                    'transition font-medium',
                    currentPage === 'obs-guide' 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-blue-400'
                ]"
            >
                📖 OBS Guide
            </NuxtLink>
            <NuxtLink 
                to="/hardware" 
                :class="[
                    'transition font-medium',
                    currentPage === 'hardware' 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-blue-400'
                ]"
            >
                🔧 Hardware
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Bestimme die aktuelle Seite basierend auf der Route
const currentPage = computed(() => {
    const path = route.path;
    if (path === '/') return 'home';
    if (path.startsWith('/obs-guide')) return 'obs-guide';
    if (path.startsWith('/hardware')) return 'hardware';
    return null;
});
</script>

<style scoped>
/* Optional: Zusätzliche Styles für die Navigation */
</style>

