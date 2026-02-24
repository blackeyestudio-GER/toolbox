<template>
    <div class="min-h-screen flex bg-night text-white p-4">
        <!-- Main content taking most of the width -->
        <div class="flex-1 flex flex-col items-center">
            <!-- Header with Logo and Title -->
            <div class="w-full max-w-5xl mb-8">
                <div class="flex items-center justify-center gap-6 mb-6">
                    <img alt="Toolbox Logo" class="w-24 h-24 object-cover rounded-full shadow-lg" src="/logo.png" />
                    <div>
                        <h1 class="text-4xl font-bold text-white">Content Creator Toolbox</h1>
                        <p class="text-gray-400 mt-2">Deine kostenlose Sammlung nützlicher Tools für Streaming, YouTube & Social Media</p>
                    </div>
                </div>
                
                <!-- Main Description - Always Visible -->
                <div class="bg-eerie-black text-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-2xl font-semibold mb-4 text-center">Willkommen bei deiner Tool-Sammlung!</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>Hey! Ich weiß genau, wie frustrierend es sein kann, als Content Creator die richtigen Tools zu finden. Entweder sind sie irgendwo versteckt, total unübersichtlich oder einfach viel zu teuer. Genau deshalb habe ich diese Seite gemacht – damit du nicht mehr stundenlang suchen musst.</p>
                        
                        <p>Hier findest du meine persönliche Sammlung an Tools, die ich selbst nutze – egal ob du gerade streamst, YouTube-Videos schneidest, Social-Media-Inhalte vorbereitest oder einfach nur deinen Workflow optimieren willst. Alle Tools sind komplett kostenlos und bleiben es auch. Keine versteckten Kosten, keine Premium-Tricks, versprochen.</p>
                        
                        <p>Mein Ziel ist es, dir das Leben als Content Creator ein bisschen leichter zu machen. Damit du weniger Zeit mit Suchen verbringst und mehr Zeit mit deinem eigentlichen Content. Schau dich einfach um, probier die Tools aus – und wenn du Feedback oder Wünsche hast, schreib mir einfach. Diese Seite ist für uns alle da.</p>
                        
                        <p class="text-sm text-gray-400 italic mt-6">
                            Alle Tools hier habe ich selbst getestet und nutze sie auch. Ich aktualisiere die Sammlung regelmäßig und füge neue Tools hinzu, wenn ich welche finde, die wirklich helfen. 
                            <NuxtLink to="/impressum" class="text-blue-400 underline">Rechtliches findest du im Impressum</NuxtLink>. 
                            Wenn du mehr über mich und die Seite wissen willst, schau gerne auf <NuxtLink to="/ueber-uns" class="text-blue-400 underline">Über uns</NuxtLink> vorbei.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Search and Filter -->
            <div class="w-full max-w-5xl flex flex-wrap gap-4 mb-2">
                <input
                    v-model="searchQuery"
                    class="flex-1 p-2 rounded border border-gray-600 bg-eerie-black text-white placeholder-gray-400 shadow-sm"
                    placeholder="Suche nach Tools..."
                    type="text"
                />
                <select v-model="selectedTag" class="p-2 rounded border border-gray-600 bg-eerie-black text-white shadow-sm md:w-auto w-full">
                    <option value="">Alle Tags</option>
                    <option v-for="tag in uniqueTags" :key="tag" :value="tag">{{ tag }}</option>
                </select>
            </div>
            

            <!-- Category Guide -->
            <div class="w-full max-w-5xl mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-white mb-4">Tool-Kategorien im Überblick</h3>
                <p class="text-gray-400 mb-4 text-sm">Unsere Tools sind in verschiedene Kategorien eingeteilt, damit du schnell findest was du brauchst:</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div
                        v-for="(info, category) in categoryInfo"
                        :key="category"
                        :class="[categoryStyles[category]?.text]"
                        class="font-semibold flex items-center gap-2"
                    >
                        <span class="w-3 h-3 rounded-full" :class="[categoryStyles[category]?.bg]"></span>
                        <span>{{ category }}</span>
                    </div>
                </div>
            </div>

            <!-- Tool Tiles -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                <component
                    v-for="tool in filteredTools"
                    :key="tool.title"
                    :is="tool.status === 'todo' ? 'div' : 'NuxtLink'"
                    :to="tool.status !== 'todo' ? `/tools/${tool.slug || generateSlug(tool.title)}` : undefined"
                    :class="[
                        categoryStyles[tool.category]?.bg || 'bg-gray-800',
                        categoryStyles[tool.category]?.border || 'border-gray-600',
                        tool.status === 'todo' ? 'opacity-75 cursor-default' : 'hover:saturate-150 cursor-pointer',
                    ]"
                    class="p-4 transition duration-200 text-white border-4 relative"
                >
                    <!-- Coming Soon Badge -->
                    <div v-if="tool.status === 'todo'" class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold z-10">
                        Bald verfügbar
                    </div>
                    
                    <h2 class="text-xl font-bold mb-1" :class="tool.status === 'todo' ? 'pr-24' : ''">{{ tool.title }}</h2>
                    <p class="text-sm mb-2">{{ tool.description }}</p>
                    <div class="flex flex-wrap gap-1">
                        <span
                            v-for="tag in tool.tags"
                            :key="tag"
                            class="bg-white/30 px-2 py-0.5 rounded text-xs"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </component>
            </div>

            <!-- Additional Info Section -->
            <div class="w-full max-w-5xl mt-12 mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">Warum diese Tool-Sammlung?</h3>
                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Ich kenne das Problem nur zu gut: Du verbringst mehr Zeit damit, nach den richtigen Tools zu suchen, als tatsächlich Content zu erstellen. 
                        Diese Sammlung soll dir genau diese Zeit sparen. Alle Tools hier nutze ich selbst oder habe sie zumindest ausgiebig getestet.
                    </p>
                    <p>
                        Egal ob du gerade erst anfängst oder schon länger dabei bist – die richtigen Tools können deinen Workflow richtig verbessern. 
                        Von der Content-Planung über die Produktion bis hin zur Monetarisierung findest du hier kostenlose Lösungen für jeden Schritt deines Workflows.
                    </p>
                    <div class="grid md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-700">
                        <div>
                            <h4 class="font-semibold text-white mb-2">📊 Für Anfänger</h4>
                            <p class="text-xs text-gray-400">
                                Starte mit den Basics: Organisation, Planung und erste Tools für deinen Content-Workflow.
                            </p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-white mb-2">🚀 Für Fortgeschrittene</h4>
                            <p class="text-xs text-gray-400">
                                Optimiere deinen Workflow mit KI-Tools, erweiterten Audio-Lösungen und Monetarisierungs-Optionen.
                            </p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-white mb-2">💼 Für Profis</h4>
                            <p class="text-xs text-gray-400">
                                Skaliere dein Business mit Shop-Lösungen, Affiliate-Programmen und professionellen Analyse-Tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Content Creator Workflow Guide -->
            <div class="w-full max-w-5xl mt-8 mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">📝 Der Content Creator Workflow</h3>
                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Wenn du Content erstellst, durchläufst du verschiedene Phasen. Ich zeige dir hier, welche Tools in welcher Phase besonders hilfreich sind:
                    </p>
                    <div class="grid md:grid-cols-2 gap-4 mt-4">
                        <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                            <h4 class="font-semibold text-white mb-2">1. Planung & Ideenfindung</h4>
                            <p class="text-xs text-gray-400 mb-2">
                                Bevor du loslegst, brauchst du erstmal Ideen und einen Plan. Ich nutze Todoist für meine Content-Planung – 
                                super übersichtlich und hilft mir, den Überblick zu behalten. ChatGPT nutze ich manchmal für Brainstorming, 
                                wenn mir mal nichts einfällt.
                            </p>
                            <p class="text-xs text-gray-500 italic">
                                Meine Favoriten: Todoist, ChatGPT, Game Finder
                            </p>
                        </div>
                        <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                            <h4 class="font-semibold text-white mb-2">2. Content-Produktion</h4>
                            <p class="text-xs text-gray-400 mb-2">
                                Hier geht's ans Eingemachte: Videos schneiden, Bilder bearbeiten, Audio aufnehmen. 
                                Du musst nicht hunderte Euro für Software ausgeben – ich zeige dir kostenlose Alternativen, 
                                die genauso gut sind.
                            </p>
                            <p class="text-xs text-gray-500 italic">
                                Meine Favoriten: DaVinci Resolve, GIMP, OBS Studio, Audacity
                            </p>
                        </div>
                        <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                            <h4 class="font-semibold text-white mb-2">3. Optimierung & Design</h4>
                            <p class="text-xs text-gray-400 mb-2">
                                Thumbnails, Overlays, Social Media Grafiken – das Design macht echt den Unterschied. 
                                Mit den richtigen Tools kannst du auch ohne Design-Studium professionelle Sachen erstellen. 
                                Ich zeige dir wie.
                            </p>
                            <p class="text-xs text-gray-500 italic">
                                Meine Favoriten: Canva, Thumbnail Previewer, Affinity, Photoshop Elements
                            </p>
                        </div>
                        <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                            <h4 class="font-semibold text-white mb-2">4. Veröffentlichung & Wachstum</h4>
                            <p class="text-xs text-gray-400 mb-2">
                                Wenn der Content fertig ist, kommt der nächste Schritt: Veröffentlichung und Community-Aufbau. 
                                Tools für Stream-Interaktion, Community-Management und Monetarisierung helfen dir dabei, 
                                richtig durchzustarten.
                            </p>
                            <p class="text-xs text-gray-500 italic">
                                Meine Favoriten: Crowd Control, DiscoHook, Sub Calculator, Shopify
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tips & Best Practices -->
            <div class="w-full max-w-5xl mt-8 mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">💡 Tipps für Content Creator</h3>
                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                        <h4 class="font-semibold text-white mb-2">Starte mit kostenlosen Tools</h4>
                        <p class="text-xs text-gray-400">
                            Du musst nicht sofort hunderte Euro für Software ausgeben. Ich habe jahrelang nur mit kostenlosen 
                            Tools gearbeitet und es hat super funktioniert. Upgrade erst, wenn du wirklich an die Grenzen stößt.
                        </p>
                    </div>
                    <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                        <h4 class="font-semibold text-white mb-2">Lerne ein Tool richtig</h4>
                        <p class="text-xs text-gray-400">
                            Statt ständig neue Tools zu testen, nimm dir die Zeit, ein Tool richtig zu lernen. 
                            Ich habe die Erfahrung gemacht, dass die meisten Tools viel mehr können, als man denkt – 
                            man muss nur die Features entdecken.
                        </p>
                    </div>
                    <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                        <h4 class="font-semibold text-white mb-2">Automatisiere wo möglich</h4>
                        <p class="text-xs text-gray-400">
                            Wiederkehrende Aufgaben kannst du super automatisieren. Ich nutze zum Beispiel DiscoHook für 
                            Discord-Webhooks und Todoist für wiederkehrende Aufgaben. Das spart mir echt viel Zeit.
                        </p>
                    </div>
                    <div class="bg-gray-800/40 border border-gray-600 p-4 rounded">
                        <h4 class="font-semibold text-white mb-2">Nutze Templates und Vorlagen</h4>
                        <p class="text-xs text-gray-400">
                            Viele Tools bieten Templates an – nutze sie ruhig! Ich mache das auch und es spart mir 
                            jede Menge Zeit. Professionelle Ergebnisse auch ohne Design-Erfahrung.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Getting Started Guide -->
            <div class="w-full max-w-5xl mt-8 mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">🚀 Erste Schritte</h3>
                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Du bist neu im Content Creation? Kein Problem! Hier ist mein kurzer Guide, wie du mit dieser Toolbox startest:
                    </p>
                    <ol class="list-decimal list-inside ml-2 space-y-3">
                        <li>
                            <strong class="text-white">Definiere dein Ziel:</strong> Was willst du eigentlich erstellen? 
                            Videos, Streams, Social Media Content? Je nachdem brauchst du unterschiedliche Tools. 
                            Fang nicht alles auf einmal an.
                        </li>
                        <li>
                            <strong class="text-white">Starte mit den Basics:</strong> Für Video-Editing empfehle ich DaVinci Resolve. 
                            Für Bildbearbeitung: GIMP oder Canva. Für Streaming: OBS Studio. 
                            Diese drei Tools decken eigentlich alle Grundbedürfnisse ab.
                        </li>
                        <li>
                            <strong class="text-white">Nutze meine Guides:</strong> Ich habe ausführliche Guides geschrieben, 
                            z.B. für <NuxtLink to="/obs-guide" class="text-blue-400 underline">OBS Studio</NuxtLink>. 
                            Die helfen dir, schnell loszulegen ohne stundenlang zu googeln.
                        </li>
                        <li>
                            <strong class="text-white">Erweitere schrittweise:</strong> Wenn du mit den Basics klar kommst, 
                            kannst du weitere Tools hinzufügen. Aber bitte: Nicht alles auf einmal! Lerne ein Tool richtig, 
                            bevor du das nächste testest. Sonst verlierst du schnell den Überblick.
                        </li>
                        <li>
                            <strong class="text-white">Hilfe holen:</strong> Wenn du Fragen hast, schau in mein 
                            <NuxtLink to="/glossar" class="text-blue-400 underline">Glossar</NuxtLink> oder 
                            <NuxtLink to="/kontakt" class="text-blue-400 underline">schreib mir einfach</NuxtLink>. 
                            Ich helfe gerne weiter!
                        </li>
                    </ol>
                </div>
            </div>

            <!-- Author & Credibility Section -->
            <div class="w-full max-w-5xl mt-8 mb-8 bg-eerie-black p-6 rounded-lg border border-gray-700">
                <h3 class="text-xl font-semibold text-white mb-4">Über diese Seite</h3>
                <div class="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Diese Toolbox betreibe ich unter <strong class="text-white">Blackeye Studio</strong> – 
                        ich bin selbst Content Creator und kenne die täglichen Herausforderungen aus eigener Erfahrung.
                    </p>
                    <p>
                        Alle Tools hier habe ich persönlich getestet und nutze sie auch selbst. 
                        Ich empfehle nur Tools, die ich wirklich nutze und die mir helfen. 
                        Meine Empfehlungen werden nicht durch Zahlungen beeinflusst – versprochen.
                    </p>
                    <div class="flex flex-wrap gap-3 mt-4">
                        <NuxtLink to="/ueber-uns" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
                            Mehr über uns erfahren
                        </NuxtLink>
                        <NuxtLink to="/kontakt" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
                            Kontakt aufnehmen
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Bottom Ad Banner -->
            <div class="mt-8 max-w-5xl w-full">
                <AdBannerBottom />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getAllTools, generateSlug } from '~/composables/useTools';

const descriptionText = `Als Content Creator kann es frustrierend sein, die richtigen Tools zu finden. Oft sind sie versteckt, unübersichtlich oder einfach viel zu teuer. Diese Seite wurde ins Leben gerufen, um Content Creators eine zentrale Anlaufstelle für nützliche Tools zu bieten.

Hier findest du eine stetig wachsende Sammlung nützlicher Helferlein – egal ob du gerade streamst, YouTube-Videos schneidest, Social-Media-Inhalte vorbereitest oder einfach nur deinen Workflow optimieren willst. Alle Tools sind komplett kostenlos und bleiben es auch. Keine versteckten Kosten, keine Premium-Tricks.

Das Ziel dieser Plattform ist es, Content Creators das Leben ein kleines bisschen leichter zu machen. Damit du weniger Zeit mit Suchen und mehr Zeit mit deinem eigentlichen Content verbringst. Schau dich um, probier die Tools aus – und wenn du Feedback oder Wünsche hast, melde dich gern. Diese Plattform ist für uns alle.`;
const showModal = ref(false);
const searchQuery = ref('');
const selectedTag = ref('');

const categoryStyles = {
    Grafik: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-600',
    },
    Audio: {
        bg: 'bg-green-600',
        text: 'text-green-600',
        border: 'border-green-600',
    },
    Games: {
        bg: 'bg-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-600',
    },
    Utility: {
        bg: 'bg-red-600',
        text: 'text-red-600',
        border: 'border-red-600',
    },
    Organisation: {
        bg: 'bg-yellow-600',
        text: 'text-yellow-600',
        border: 'border-yellow-600',
    },
    Merch: {
        bg: 'bg-pink-600',
        text: 'text-pink-600',
        border: 'border-pink-600',
    },
    Finanzen: {
        bg: 'bg-teal-600',
        text: 'text-teal-600',
        border: 'border-teal-600',
    },
    Ki: {
        bg: 'bg-indigo-600',
        text: 'text-indigo-600',
        border: 'border-indigo-600',
    },
    'Stream-Interaktion': {
        bg: 'bg-orange-600',
        text: 'text-orange-600',
        border: 'border-orange-600',
    },
};

const categoryInfo = {
    Grafik: 'Tools für Bildbearbeitung und Design',
    Audio: 'Musik, Sounds und Audio-Effekte',
    Games: 'Spiele-Ressourcen für Streamer',
    Utility: 'Praktische Hilfsmittel',
    Organisation: 'Planung und Verwaltung',
    Merch: 'Merchandise und Shop-Lösungen',
    Finanzen: 'Monetarisierung und Einnahmen',
    Ki: 'KI-gestützte Tools',
    'Stream-Interaktion': 'Community-Engagement und interaktive Features',
};

// Get all tools from composable
const tools = getAllTools();

const uniqueTags = computed(() => {
    const tagSet = new Set();
    tools.forEach((tool) => {
        tool.tags.forEach((tag) => tagSet.add(tag));
    });
    return [...tagSet].sort((a, b) => a.localeCompare(b));
});

const filteredTools = computed(() => {
    return tools.filter((tool) => {
        const matchesSearch =
                tool.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesTag = !selectedTag.value || tool.tags.includes(selectedTag.value);
        return matchesSearch && matchesTag;
    });
});
</script>

<style scoped>
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.bg-logo {
    background-image: url('/logo.png');
}
</style>
