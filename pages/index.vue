<template>
    <div class="min-h-screen flex flex-col items-center bg-night text-white p-4">
        <!-- Header and Description Section -->
        <div class="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-6">
            <div class="flex items-center justify-center shadow-lg bg-logo bg-cover bg-top"></div>
            <div class="col-span-2 bg-eerie-black text-white p-4 rounded shadow flex items-center">
                <p class="text-left whitespace-pre-line">{{ descriptionText }}</p>
            </div>
        </div>

        <!-- Mobile Description Button -->
        <div class="md:hidden w-full flex justify-center mb-4">
            <button @click="showModal = true" class="w-24 h-24 overflow-hidden shadow-lg rounded-full">
                <img src="/logo.png" alt="Logo" class="w-full h-full object-cover" />
            </button>
        </div>

        <!-- Modal for Mobile Description -->
        <div v-if="showModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
            <div class="bg-eerie-black text-white rounded-lg max-w-md w-full p-6 relative">
                <h2 class="text-center text-xl font-semibold mb-4">Über diese Seite</h2>
                <button @click="showModal = false" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-700 text-white hover:border-gray-500 text-lg font-bold shadow">
                    ✕
                </button>
                <p class="text-sm whitespace-pre-line">{{ descriptionText }}</p>
            </div>
        </div>

        <!-- Search and Filter -->
        <div class="w-full max-w-5xl flex flex-wrap gap-4 mb-6">
            <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Suche nach Tools..."
                    class="flex-1 p-2 rounded border border-gray-600 bg-eerie-black text-white placeholder-gray-400 shadow-sm"
            />
            <select
                    v-model="selectedTag"
                    class="p-2 rounded border border-gray-600 bg-eerie-black text-white shadow-sm w-full md:w-auto"
            >
                <option value="">Alle Tags</option>
                <option v-for="tag in uniqueTags" :key="tag" :value="tag">{{ tag }}</option>
            </select>
        </div>

        <!-- Metro Tiles Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            <a
                    v-for="tool in filteredTools"
                    :key="tool.title"
                    :href="tool.link"
                    target="_blank"
                    class="p-4 rounded-lg shadow hover:shadow-xl transition duration-200 cursor-pointer text-white"
                    :class="tool.color"
            >
                <h2 class="text-xl font-bold mb-1">{{ tool.title }}</h2>
                <p class="text-sm mb-2">{{ tool.description }}</p>
                <div class="flex flex-wrap gap-1">
          <span v-for="tag in tool.tags" :key="tag" class="bg-white/30 px-2 py-0.5 rounded text-xs">
            {{ tag }}
          </span>
                </div>
            </a>
        </div>

        <!-- Banner Ads -->
        <div class="w-full max-w-5xl mt-10">
            <div class="bg-eerie-black text-white rounded shadow p-4 text-center">
                <p class="text-gray-500">Banner Ad Placeholder</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const descriptionText = `Hey! Ich weiß aus eigener Erfahrung, wie frustrierend es sein kann, als Content Creator die richtigen Tools zu finden. Oft sind sie versteckt, unübersichtlich oder einfach viel zu teuer. Deshalb habe ich diese Seite ins Leben gerufen – aus Überzeugung und Leidenschaft für unsere kreative Community.

Hier findest du eine stetig wachsende Sammlung nützlicher Helferlein – egal ob du gerade streamst, YouTube-Videos schneidest, Social-Media-Inhalte vorbereitest oder einfach nur deinen Workflow optimieren willst. Alle Tools sind komplett kostenlos und bleiben es auch. Keine versteckten Kosten, keine Premium-Tricks.

Mein Ziel ist es, dir das Leben ein kleines bisschen leichter zu machen. Damit du weniger Zeit mit Suchen und mehr Zeit mit deinem eigentlichen Content verbringst. Schau dich um, probier die Tools aus – und wenn du Feedback oder Wünsche hast, melde dich gern. Diese Plattform ist für uns alle.`;
const showModal = ref(false);
import { computed, ref } from 'vue';

const searchQuery = ref('');
const selectedTag = ref('');

const tools = [
    {
        title: 'Converter',
        description: 'Formate einfach und schnell konvertieren',
        tags: ['Format', 'Utility'],
        link: 'https://example.com/converter',
        color: 'bg-blue-600',
    },
    {
        title: 'Calculator',
        description: 'Einfache und erweiterte Berechnungen durchführen',
        tags: ['Mathematik', 'Utility'],
        link: 'https://example.com/calculator',
        color: 'bg-green-600',
    },
    {
        title: 'Timer',
        description: 'Countdowns setzen und verwalten',
        tags: ['Zeit', 'Produktivität'],
        link: 'https://example.com/timer',
        color: 'bg-red-600',
    },
    {
        title: 'Notepad',
        description: 'Schnelle Notizen schreiben',
        tags: ['Schreiben', 'Organisation'],
        link: 'https://example.com/notepad',
        color: 'bg-purple-600',
    },
    // Weitere Tools ...
];

const uniqueTags = computed(() => {
    const tagSet = new Set();
    tools.forEach(tool => {
        tool.tags.forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
});

const filteredTools = computed(() => {
    return tools.filter(tool => {
        const matchesSearch =
                tool.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesTag =
                !selectedTag.value || tool.tags.includes(selectedTag.value);
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
