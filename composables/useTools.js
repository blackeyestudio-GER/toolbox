// Shared composable for tools data
import { allTools } from '~/data/tools';

// Additional tools not yet in detail pages
const additionalTools = [
    {
        title: 'ChallengePicker',
        slug: 'challengepicker',
        description: 'Innovatives Tool für Streamer um spannende, von der Community getriebene Challenges in deinen Stream zu integrieren - ganz ohne PC-Installation. Biete deinen Zuschauern ein einmaliges interaktives Erlebnis und fordere andere Streamer heraus.',
        tags: ['Stream-Interaktion', 'Games'],
        link: '#',
        category: 'Stream-Interaktion',
        status: 'todo',
    },
    {
        title: 'Questify',
        slug: 'questify',
        description: 'Ermögliche deiner Community gegeneinander zu spielen, auch in Spielen ohne direkte Ziele oder Quests. Als Gamehost wählst du aus verschiedenen Quests oder erstellst eigene. Verschiedene Modi machen jedes Spiel zum Wettbewerb - perfekt auch für Streamer-Battles.',
        tags: ['Stream-Interaktion', 'Games'],
        link: '#',
        category: 'Stream-Interaktion',
        status: 'todo',
    },
    {
        title: 'Merlin Image Converter',
        slug: 'merlin-image-converter',
        description: 'Konvertiere deine Bilder schnell und einfach in verschiedene Formate wie PNG, JPG, WEBP oder SVG. Perfekt für die Optimierung von Thumbnails und Social Media Grafiken.',
        tags: ['Grafik', 'Utility'],
        link: '#',
        category: 'Grafik',
        status: 'todo',
    },
    {
        title: 'Game Finder',
        slug: 'game-finder',
        description: 'Tool zum Entdecken neuer Spiele für deinen Stream oder Kanal. Filtere nach Genre, Plattform und Popularität um passende Games für deinen Content zu finden.',
        tags: ['Organisation', 'Games'],
        link: 'https://game-finder.app/',
        category: 'Games',
        status: 'done',
    },
    {
        title: 'Pixabay',
        slug: 'pixabay',
        description: 'Riesige Sammlung an kostenlosen, lizenzfreien Bildern, Videos und Musik. Über 4 Millionen Assets die du ohne Anmeldung in deinen Videos und auf Social Media nutzen kannst.',
        tags: ['Organisation', 'Audio'],
        link: 'https://pixabay.com/de/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'Sora',
        slug: 'sora',
        description: 'OpenAIs KI-Tool zur Bild- und Video-Generierung. Ideal für kreative Shorts, Video-Intros oder um schnell visuelle Ideen für deinen Content zu entwickeln und zu testen.',
        tags: ['Grafik', 'Ki'],
        link: 'https://sora.chatgpt.com/explore',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'Affinity',
        slug: 'affinity',
        description: 'Professionelle Bildbearbeitungs-Suite mit Affinity Photo, Designer und Publisher. Einmalige Zahlung statt Abo-Modell - perfekte Alternative zu Adobe Photoshop und Illustrator für professionelle Grafik- und Design-Arbeiten.',
        tags: ['Grafik'],
        link: 'https://affinity.serif.com/',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'CapCut',
        slug: 'capcut',
        description: 'Perfekt für Anfänger und Social Media Content (TikTok, Reels, Shorts). Sehr einfach zu bedienen, viele Templates und KI-Features. Optimal für vertikale Videos.',
        tags: ['Utility', 'Grafik'],
        link: 'https://www.capcut.com/',
        category: 'Utility',
        status: 'done',
    },
    {
        title: 'Adobe Photoshop Elements',
        slug: 'adobe-photoshop-elements',
        description: 'Die oft vergessene Alternative! Einmalzahlung statt Abo. Perfekt für Thumbnails, Overlays und Social Media Grafiken. Circa 60€ für 3 Jahre Nutzung - ohne monatliche Kosten!',
        tags: ['Grafik'],
        link: 'https://www.adobe.com/de/products/photoshop-elements.html',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'GIMP',
        slug: 'gimp',
        description: 'Die kostenlose Photoshop-Alternative. Open Source Bildbearbeitung mit fast allen Features. Perfekt wenn du kein Geld ausgeben willst - sehr mächtig und für Windows, Mac & Linux.',
        tags: ['Grafik'],
        link: 'https://www.gimp.org/',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'Canva',
        slug: 'canva',
        description: 'Für Nicht-Designer. Browser-basiertes Design-Tool mit tausenden Templates. Perfekt für schnelle Social Media Posts, Thumbnails und Grafiken ohne Vorkenntnisse.',
        tags: ['Grafik'],
        link: 'https://www.canva.com/',
        category: 'Grafik',
        status: 'done',
    },
    {
        title: 'Audacity',
        slug: 'audacity',
        description: 'Klassiker für Audio-Bearbeitung. Perfekt für Podcasts, Voiceovers und Audio-Cleaning. Kostenlos & Open Source mit Noise Reduction, Compressor und EQ.',
        tags: ['Audio'],
        link: 'https://www.audacityteam.org/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'REAPER',
        slug: 'reaper',
        description: 'Professionelle DAW (Digital Audio Workstation). Perfekt für Musik-Produktion und fortgeschrittenes Audio-Editing. Sehr günstig (60$ Lizenz, unbegrenzt nutzbar) mit 60 Tagen kostenloser Trial.',
        tags: ['Audio'],
        link: 'https://www.reaper.fm/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: '101Soundboards',
        slug: '101soundboards',
        description: 'Riesige Sammlung an Soundboards mit tausenden Sounds aus Filmen, Serien und Memes. Alle Sounds können direkt abgespielt oder heruntergeladen werden für deinen Stream.',
        tags: ['Audio'],
        link: 'https://www.101soundboards.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'DiscoHook',
        slug: 'discohook',
        description: 'Erstelle und verwalte Discord Webhooks ganz einfach im Browser. Perfekt um Benachrichtigungen für neue Uploads, Streams oder Community-Updates automatisch zu versenden.',
        tags: ['Organisation'],
        link: 'https://discohook.org/',
        category: 'Organisation',
        status: 'done',
    },
    {
        title: 'Amazon Affiliate Partnerseite',
        slug: 'amazon-affiliate',
        description: 'Das offizielle Amazon PartnerNet Dashboard. Verwalte deine Affiliate-Links, tracke deine Einnahmen und erstelle Werbelinks für Produkte die du in deinen Videos oder Streams empfiehlst.',
        tags: ['Organisation', 'Finanzen'],
        link: 'https://partnernet.amazon.de/home',
        category: 'Finanzen',
        status: 'done',
    },
    {
        title: 'Shopify',
        slug: 'shopify',
        description: 'Professionelle E-Commerce Plattform für deinen eigenen Merch-Shop. Einfacher Einstieg mit Templates, Payment-Integration und Versandmanagement. Ideal für den Start ins Merch-Business.',
        tags: ['Organisation', 'Finanzen', 'Merch'],
        link: 'https://www.shopify.com/',
        category: 'Merch',
        status: 'done',
    },
    {
        title: 'MyInstants',
        slug: 'myinstants',
        description: 'Beliebte Soundboard-Plattform mit Sounds aus Internet-Kultur, Memes und populären Medien. Alle Sounds können sofort abgespielt oder für deinen Stream heruntergeladen werden.',
        tags: ['Audio'],
        link: 'https://www.myinstants.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'ChatGPT',
        slug: 'chatgpt',
        description: 'KI-Assistent von OpenAI für Brainstorming, Content-Planung und Recherche. Nutze es für Video-Ideen, Script-Entwürfe oder Social Media Posts - aber überprüfe immer die Fakten.',
        tags: ['Organisation', 'Ki'],
        link: 'https://chatgpt.com/',
        category: 'Ki',
        status: 'done',
    },
    {
        title: 'Discords',
        slug: 'discords',
        description: 'Große Sammlung an kostenlosen Discord-Emotes und Emojis. Perfekt um deinen Community-Server aufzuwerten und ihm eine persönliche Note zu geben.',
        tags: ['Organisation'],
        link: 'https://discords.com/',
        category: 'Organisation',
        status: 'done',
    },
    {
        title: 'Sound Resource',
        slug: 'sound-resource',
        description: 'Umfangreiche Bibliothek mit kostenlosen Soundeffekten und Musik aus Videospielen. Ideal für Streamer und YouTuber die nach lizenzfreien und einzigartigen Audio-Elementen suchen.',
        tags: ['Audio'],
        link: 'https://www.sounds-resource.com/',
        category: 'Audio',
        status: 'done',
    },
    {
        title: 'Sub Calculator',
        slug: 'sub-calculator',
        description: 'Berechne deine Twitch-Einnahmen basierend auf Subs, Bits und Donations. Ein praktisches Tool um deine monatlichen Einnahmen zu planen und deine Ziele zu verfolgen.',
        tags: ['Finanzen', 'Organisation'],
        link: 'https://subcalculator.blackeyestudio.de/',
        category: 'Finanzen',
        status: 'done',
    },
    {
        title: 'Suno',
        slug: 'suno',
        description: 'KI-gestützte Musik-Generierung für lizenzfreie Hintergrundmusik. Erstelle einzigartige Tracks für deine Streams, Videos oder Intros - perfekt abgestimmt auf deine Inhalte und Stimmung.',
        tags: ['Organisation', 'Audio', 'Ki'],
        link: 'https://suno.com/',
        category: 'Audio',
        status: 'done',
    },
];

// Helper function to generate slug from title
export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Get all tools
export function getAllTools() {
    return [...allTools, ...additionalTools].map(tool => ({
        ...tool,
        slug: tool.slug || generateSlug(tool.title)
    }));
}

// Get tool by slug
export function getToolBySlug(slug) {
    const all = getAllTools();
    return all.find(t => t.slug === slug) || null;
}
