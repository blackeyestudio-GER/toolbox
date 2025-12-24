<template>
    <div class="min-h-screen flex bg-night text-white p-4">
        <!-- Main content taking most of the width -->
        <div class="flex-1 flex flex-col items-center">
            <!-- Navigation -->
            <nav class="w-full max-w-5xl mb-6 flex justify-end gap-6 text-sm flex-wrap">
                <NuxtLink to="/" class="text-gray-400 hover:text-white transition">
                    Home
                </NuxtLink>
                <NuxtLink to="/obs-guide" class="text-gray-400 hover:text-white transition">
                    OBS Guide
                </NuxtLink>
                <NuxtLink to="/hardware" class="text-gray-400 hover:text-white transition">
                    Hardware
                </NuxtLink>
                <NuxtLink to="/impressum" class="text-gray-400 hover:text-white transition">
                    Impressum
                </NuxtLink>
                <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white transition">
                    Datenschutz
                </NuxtLink>
            </nav>
            
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
                        <p>Hey! Ich weiß aus eigener Erfahrung, wie frustrierend es sein kann, als Content Creator die richtigen Tools zu finden. Oft sind sie versteckt, unübersichtlich oder einfach viel zu teuer. Deshalb habe ich diese Seite ins Leben gerufen – aus Überzeugung und Leidenschaft für unsere kreative Community.</p>
                        
                        <p>Hier findest du eine stetig wachsende Sammlung nützlicher Helferlein – egal ob du gerade streamst, YouTube-Videos schneidest, Social-Media-Inhalte vorbereitest oder einfach nur deinen Workflow optimieren willst. Alle Tools sind komplett kostenlos und bleiben es auch. Keine versteckten Kosten, keine Premium-Tricks.</p>
                        
                        <p>Mein Ziel ist es, dir das Leben ein kleines bisschen leichter zu machen. Damit du weniger Zeit mit Suchen und mehr Zeit mit deinem eigentlichen Content verbringst. Schau dich um, probier die Tools aus – und wenn du Feedback oder Wünsche hast, melde dich gern. Diese Plattform ist für uns alle.</p>
                        
                        <p class="text-sm text-gray-400 italic mt-6">Alle hier aufgelisteten Tools wurden sorgfältig ausgewählt und getestet. Die Sammlung wird regelmäßig aktualisiert und erweitert, um dir stets die besten kostenlosen Ressourcen zur Verfügung zu stellen.</p>
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
            
            <!-- Info about upcoming tools -->
            <div class="w-full max-w-5xl mb-4 text-sm text-gray-400 flex items-center gap-2">
                <span class="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">Bald verfügbar</span>
                <span>= Tool ist noch in Entwicklung und wird bald hinzugefügt</span>
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
                    :is="tool.status === 'todo' ? 'div' : 'a'"
                    :href="tool.status !== 'todo' ? tool.link : undefined"
                    :target="tool.status !== 'todo' ? '_blank' : undefined"
                    :class="[
                        categoryStyles[tool.category]?.bg || 'bg-gray-800',
                        categoryStyles[tool.category]?.border || 'border-gray-600',
                        tool.status === 'todo' ? 'opacity-75 cursor-default' : 'hover:saturate-150 cursor-pointer',
                    ]"
                    class="p-4 transition duration-200 text-white border-4 relative"
                >
                    <!-- Coming Soon Badge -->
                    <div v-if="tool.status === 'todo'" class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                        Bald verfügbar
                    </div>
                    
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
                </component>
            </div>

            <!-- Additional Info Section -->
            <div class="w-full max-w-5xl mt-12 mb-8 bg-eerie-black p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">Warum diese Tool-Sammlung?</h3>
                <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                        Als Content Creator verbringt man oft mehr Zeit damit, nach den richtigen Tools zu suchen, als tatsächlich Content zu erstellen. 
                        Diese Sammlung soll dir genau diese Zeit sparen. Jedes Tool wurde persönlich getestet und wird von Content Creators aktiv genutzt.
                    </p>
                    <p>
                        Ob du gerade erst anfängst oder bereits etabliert bist - die richtigen Tools können deinen Workflow massiv verbessern. 
                        Von der Content-Planung über die Produktion bis hin zur Monetarisierung findest du hier kostenlose Lösungen für jeden Schritt.
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

const tools = [
    {
        title: 'ChallengePicker',
        description: 'Innovatives Tool für Streamer um spannende, von der Community getriebene Challenges in deinen Stream zu integrieren - ganz ohne PC-Installation. Biete deinen Zuschauern ein einmaliges interaktives Erlebnis und fordere andere Streamer heraus.',
        tags: ['Stream-Interaktion', 'Games'],
        link: '#',
        category: 'Stream-Interaktion',
        status: 'todo',
    },
    {
        title: 'Questify',
        description: 'Ermögliche deiner Community gegeneinander zu spielen, auch in Spielen ohne direkte Ziele oder Quests. Als Gamehost wählst du aus verschiedenen Quests oder erstellst eigene. Verschiedene Modi machen jedes Spiel zum Wettbewerb - perfekt auch für Streamer-Battles.',
        tags: ['Stream-Interaktion', 'Games'],
        link: '#',
        category: 'Stream-Interaktion',
        status: 'todo',
    },
    {
        title: 'Crowd Control',
        description: 'Alternative zu ChallengePicker: Lass deine Zuschauer direkt ins Spielgeschehen eingreifen. Die Community kann durch verschiedene Aktionen deinen Stream beeinflussen und für chaotische oder hilfreiche Momente sorgen.',
        tags: ['Stream-Interaktion', 'Games'],
        link: 'https://crowdcontrol.live/',
        category: 'Stream-Interaktion',
        status: 'done',
    },
    {
        title: 'Merlin Image Converter',
        description: 'Konvertiere deine Bilder schnell und einfach in verschiedene Formate wie PNG, JPG, WEBP oder SVG. Perfekt für die Optimierung von Thumbnails und Social Media Grafiken.',
        tags: ['Grafik', 'Utility'],
        link: 'https://example.com/converter',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'Thumbnail Previewer',
        description: 'Sieh dir an, wie dein YouTube-Thumbnail im direkten Vergleich zu anderen Videos aussieht. Teste verschiedene Designs und optimiere die Klickrate deiner Videos bevor du sie hochlädst.',
        tags: ['Grafik', 'Utility'],
        link: 'https://thumbnail-preview.tebbe.dev/',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'Todoist',
        description: 'Eine übersichtliche und benutzerfreundliche To-Do-Listen App. Perfekt um deine Content-Planung, Upload-Zeitpläne und Stream-Vorbereitung zu organisieren. Funktioniert auf allen Geräten.',
        tags: ['Organisation'],
        link: 'https://www.todoist.com/de',
        category: 'Organisation',
        status: 'done',
    },
    {
        title: 'Sound Resource',
        description: 'Umfangreiche Bibliothek mit kostenlosen Soundeffekten und Musik aus Videospielen. Ideal für Streamer und YouTuber die nach lizenzfreien und einzigartigen Audio-Elementen suchen.',
        tags: ['Audio'],
        link: 'https://www.sounds-resource.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'Sub Calculator',
        description: 'Berechne deine Twitch-Einnahmen basierend auf Subs, Bits und Donations. Ein praktisches Tool um deine monatlichen Einnahmen zu planen und deine Ziele zu verfolgen.',
        tags: ['Finanzen', 'Organisation'],
        link: 'https://subcalculator.blackeyestudio.de/',
        category: 'Finanzen',
        status: 'done',
    },
    {
        title: 'Suno',
        description: 'KI-gestützte Musik-Generierung für lizenzfreie Hintergrundmusik. Erstelle einzigartige Tracks für deine Streams, Videos oder Intros - perfekt abgestimmt auf deine Inhalte und Stimmung.',
        tags: ['Organisation', 'Audio', 'Ki'],
        link: 'https://suno.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'Game Finder',
        description: 'Das beste Tool zum Entdecken neuer Spiele für deinen Stream oder Kanal. Filtere nach Genre, Plattform und Popularität um das perfekte Game für deinen Content zu finden.',
        tags: ['Organisation', 'Games'],
        link: 'https://game-finder.app/',
        category: 'Games',
        status: 'done',
    },
    {
        title: 'Pixabay',
        description: 'Riesige Sammlung an kostenlosen, lizenzfreien Bildern, Videos und Musik. Über 4 Millionen Assets die du ohne Anmeldung in deinen Videos und auf Social Media nutzen kannst.',
        tags: ['Organisation', 'Audio'],
        link: 'https://pixabay.com/de/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'Sora',
        description: 'OpenAIs KI-Tool zur Bild- und Video-Generierung. Ideal für kreative Shorts, Video-Intros oder um schnell visuelle Ideen für deinen Content zu entwickeln und zu testen.',
        tags: ['Grafik', 'Ki'],
        link: 'https://sora.chatgpt.com/explore',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: '101Soundboards',
        description: 'Riesige Sammlung an Soundboards mit tausenden Sounds aus Filmen, Serien und Memes. Alle Sounds können direkt abgespielt oder heruntergeladen werden für deinen Stream.',
        tags: ['Audio'],
        link: 'https://www.101soundboards.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'DiscoHook',
        description: 'Erstelle und verwalte Discord Webhooks ganz einfach im Browser. Perfekt um Benachrichtigungen für neue Uploads, Streams oder Community-Updates automatisch zu versenden.',
        tags: ['Organisation'],
        link: 'https://discohook.org/',
        category: 'Organisation',
        status: 'done',
    },
    {
        title: 'Amazon Affiliate Partnerseite',
        description: 'Das offizielle Amazon PartnerNet Dashboard. Verwalte deine Affiliate-Links, tracke deine Einnahmen und erstelle Werbelinks für Produkte die du in deinen Videos oder Streams empfiehlst.',
        tags: ['Organisation', 'Finanzen'],
        link: 'https://partnernet.amazon.de/home',
        category: 'Finanzen',
        status: 'done',
    },
    {
        title: 'Shopify',
        description: 'Professionelle E-Commerce Plattform für deinen eigenen Merch-Shop. Einfacher Einstieg mit Templates, Payment-Integration und Versandmanagement. Ideal für den Start ins Merch-Business.',
        tags: ['Organisation', 'Finanzen', 'Merch'],
        link: 'https://www.shopify.com/',
        category: 'Merch',
        status: 'done',
    },
    {
        title: 'MyInstants',
        description: 'Beliebte Soundboard-Plattform mit Sounds aus Internet-Kultur, Memes und populären Medien. Alle Sounds können sofort abgespielt oder für deinen Stream heruntergeladen werden.',
        tags: ['Audio'],
        link: 'https://www.myinstants.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'ChatGPT',
        description: 'KI-Assistent von OpenAI für Brainstorming, Content-Planung und Recherche. Nutze es für Video-Ideen, Script-Entwürfe oder Social Media Posts - aber überprüfe immer die Fakten.',
        tags: ['Organisation', 'Ki'],
        link: 'https://chatgpt.com/',
        category: 'Ki',
        status: 'done',
    },
    {
        title: 'Discords',
        description: 'Große Sammlung an kostenlosen Discord-Emotes und Emojis. Perfekt um deinen Community-Server aufzuwerten und ihm eine persönliche Note zu geben.',
        tags: ['Organisation'],
        link: 'https://discords.com/',
        category: 'Organisation',
        status: 'done',
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
