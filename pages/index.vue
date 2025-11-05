<template>
    <div class="min-h-screen flex bg-night text-white p-4">
        <!-- Main content taking most of the width -->
        <div class="flex-1 flex flex-col items-center">
            <!-- Header and Description Section -->
            <div class="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-6">
                <div class="flex h-full shadow-lg bg-logo bg-cover bg-top" />
                <div class="col-span-2 bg-eerie-black text-white p-4 flex items-center">
                    <p class="text-left whitespace-pre-line">{{ descriptionText }}</p>
                </div>
            </div>

            <!-- Mobile Description Button -->
            <div class="md:hidden w-full flex justify-center mb-4">
                <button class="w-24 h-24 overflow-hidden shadow-lg rounded-full" @click="showModal = true">
                    <img alt="Logo" class="w-full h-full object-cover" src="/logo.png" />
                </button>
            </div>

            <!-- Modal for Mobile Description -->
            <div v-if="showModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
                <div class="bg-eerie-black text-white rounded-lg max-w-md w-full p-6 relative">
                    <button class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-500 text-lg font-bold shadow" @click="showModal = false">✕</button>
                    <h2 class="text-center text-lg font-semibold mb-4">Über diese Seite</h2>
                    <p class="text-sm whitespace-pre-line">{{ descriptionText }}</p>
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

            <!-- Legend as small subtext -->
            <div class="flex flex-wrap gap-4 max-w-5xl mb-6 text-xs text-gray-400">
                <div
                    v-for="(style, category) in categoryStyles"
                    :key="category"
                    :class="[style.text]"
                    class="font-semibold"
                >
                    {{ category }}
                </div>
            </div>

            <!-- Tool Tiles -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                <a
                    v-for="tool in filteredTools"
                    :key="tool.title"
                    :class="[
                        categoryStyles[tool.category]?.bg || 'bg-gray-800',
                        categoryStyles[tool.category]?.border || 'border-gray-600',
                    ]"
                    :href="tool.link"
                    class="p-4 hover:saturate-150 transition duration-200 cursor-pointer text-white border-4"
                    target="_blank"
                >
                    <h2 class="text-xl font-bold mb-1">{{ tool.title }}</h2>
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
                </a>
            </div>

            <!-- Example banner inside the main content -->
            <!-- Bottom Ad Banner -->
            <div class="mt-8 max-w-5xl w-full">
                <AdBannerBottom />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const descriptionText = `Hey! Ich weiß aus eigener Erfahrung, wie frustrierend es sein kann, als Content Creator die richtigen Tools zu finden. Oft sind sie versteckt, unübersichtlich oder einfach viel zu teuer. Deshalb habe ich diese Seite ins Leben gerufen – aus Überzeugung und Leidenschaft für unsere kreative Community.

Hier findest du eine stetig wachsende Sammlung nützlicher Helferlein – egal ob du gerade streamst, YouTube-Videos schneidest, Social-Media-Inhalte vorbereitest oder einfach nur deinen Workflow optimieren willst. Alle Tools sind komplett kostenlos und bleiben es auch. Keine versteckten Kosten, keine Premium-Tricks.

Mein Ziel ist es, dir das Leben ein kleines bisschen leichter zu machen. Damit du weniger Zeit mit Suchen und mehr Zeit mit deinem eigentlichen Content verbringst. Schau dich um, probier die Tools aus – und wenn du Feedback oder Wünsche hast, melde dich gern. Diese Plattform ist für uns alle.`;
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
};

const tools = [
    {
        title: 'Merlin Image Converter',
        description: 'Bilder in andere Fromate Convertieren',
        tags: ['Grafik', 'Utility'],
        link: 'https://example.com/converter',
        category: 'Grafik',
    },
    {
        title: 'Thumbnail Previewer',
        description: 'Dein Thumbnail im vergleich!',
        tags: ['Grafik', 'Utility'],
        link: 'https://thumbnail-preview.tebbe.dev/',
        category: 'Grafik',
    },
    {
        title: 'Todoist',
        description: 'Simple Todo liste',
        tags: ['Organisation'],
        link: 'https://www.todoist.com/de',
        category: 'Organisation',
    },
    {
        title: 'Sound Resource',
        description: 'Freie Audioeffekte und Musik, auch etwas obscurer',
        tags: ['Audio'],
        link: 'https://www.sounds-resource.com/',
        category: 'Audio',
    },
    {
        title: 'Sub Calculator',
        description: 'Twitch Money Calculator',
        tags: ['Finanzen', 'Organisation'],
        link: 'https://subcalculator.blackeyestudio.de/',
        category: 'Finanzen',
    },
    {
        title: 'Suno',
        description: 'Perfekt für Stream hintergrund musik',
        tags: ['Organisation', 'Audio', 'Ki'],
        link: 'https://suno.com/',
        category: 'Audio',
    },
    {
        title: 'Game Finder',
        description: 'Beste Tool zum Suchen von Spielen',
        tags: ['Organisation', 'Games'],
        link: 'https://game-finder.app/',
        category: 'Games',
    },
    {
        title: 'Pixabay',
        description: 'Freie Audioeffekte und Musik',
        tags: ['Organisation', 'Audio'],
        link: 'https://pixabay.com/de/',
        category: 'Audio',
    },
    {
        title: 'Sora',
        description: 'Ki Bild generierung, Perfekt für shorts und für Ideen',
        tags: ['Grafik', 'Ki'],
        link: 'https://sora.chatgpt.com/explore',
        category: 'Grafik',
    },
    {
        title: '101Soundboards',
        description: 'Soundboard + Download',
        tags: ['Audio'],
        link: 'https://www.101soundboards.com/',
        category: 'Audio',
    },
    {
        title: 'DiscoHook',
        description: 'Webbhooks ganz einfach für Discord',
        tags: ['Organisation'],
        link: 'https://discohook.org/',
        category: 'Organisation',
    },
    {
        title: 'Amazon Affiliate Partnerseite',
        description: 'Amazon affiliate partnerseite',
        tags: ['Organisation', 'Finanzen'],
        link: 'https://partnernet.amazon.de/home',
        category: 'Finanzen',
    },
    {
        title: 'Shopify',
        description: 'guter Start bei Merch aber mit der Zeit teuer',
        tags: ['Organisation', 'Finanzen', 'Merch'],
        link: 'https://www.shopify.com/',
        category: 'Merch',
    },
    {
        title: 'MyInstants',
        description: 'Soundboard + Download',
        tags: ['Audio'],
        link: 'https://www.myinstants.com/',
        category: 'Audio',
    },
    {
        title: 'ChatGpt',
        description: 'Hilfstool, plane recherchiere, aber vertraue nicht drauf',
        tags: ['Organisation', 'Ki'],
        link: 'https://chatgpt.com/',
        category: 'Ki',
    },
    {
        title: 'Discords',
        description: 'Emotes für deinen Discord',
        tags: ['Organisation'],
        link: 'https://discords.com/',
        category: 'Organisation',
    },
];

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
