<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Breadcrumbs -->
            <Breadcrumbs />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">Streaming & Content Creator Glossar</h1>
            <p class="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Alle wichtigen Begriffe aus der Streaming- und Content Creator-Welt verständlich erklärt.
            </p>

            <!-- Search -->
            <div class="mb-6">
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Begriff suchen..."
                    class="w-full p-3 rounded border border-gray-600 bg-eerie-black text-white placeholder-gray-400"
                />
            </div>

            <!-- Alphabet Navigation -->
            <div class="bg-gray-800/40 border border-gray-600 p-4 rounded-lg mb-6">
                <div class="flex flex-wrap gap-2 justify-center">
                    <button
                        v-for="letter in alphabet"
                        :key="letter"
                        @click="scrollToLetter(letter)"
                        class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition"
                    >
                        {{ letter }}
                    </button>
                </div>
            </div>

            <!-- Glossary Terms -->
            <div class="space-y-6">
                <div v-for="letter in groupedTerms" :key="letter.letter" :id="`letter-${letter.letter}`">
                    <h2 class="text-3xl font-bold mb-4 text-blue-400">{{ letter.letter }}</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div
                            v-for="term in letter.terms"
                            :key="term.term"
                            class="bg-gray-800/40 border border-gray-600 p-4 md:p-5 rounded-lg hover:border-gray-500 transition"
                        >
                            <h3 class="text-lg md:text-xl font-semibold mb-2">{{ term.term }}</h3>
                            <p class="text-sm text-gray-300 leading-relaxed">{{ term.definition }}</p>
                            <div v-if="term.tags" class="flex flex-wrap gap-1 mt-3">
                                <span
                                    v-for="tag in term.tags"
                                    :key="tag"
                                    class="text-xs bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll to Top Button -->
        <ScrollToTop />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

useHead({
    title: 'Streaming Glossar - Content Creator Begriffe erklärt',
    meta: [
        { name: 'description', content: 'Alle wichtigen Begriffe aus der Streaming- und Content Creator-Welt verständlich erklärt. Von Bitrate über OBS bis zu Subs.' },
        { property: 'og:title', content: 'Streaming Glossar - Content Creator Begriffe erklärt' },
        { property: 'og:description', content: 'Alle wichtigen Begriffe aus der Streaming- und Content Creator-Welt verständlich erklärt.' }
    ]
});

const searchQuery = ref('');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const terms = [
    {
        term: 'Affiliate',
        definition: 'Ein Status-Level auf Twitch, bei dem Streamer anfangen können, Geld zu verdienen. Affiliate-Streamer können Subs, Bits und Werbung nutzen. Wird erreicht mit 50 Followern, 500 Minuten Streaming in 7 Tagen und durchschnittlich 3 Zuschauern.',
        tags: ['Twitch', 'Monetarisierung']
    },
    {
        term: 'API',
        definition: 'Application Programming Interface - Eine Schnittstelle, die es verschiedenen Programmen ermöglicht, miteinander zu kommunizieren. Wichtig für Bots, Overlays und Integrationen.',
        tags: ['Technik']
    },
    {
        term: 'Bitrate',
        definition: 'Die Menge an Daten, die pro Sekunde übertragen wird (gemessen in Kbps oder Mbps). Höhere Bitrate = bessere Qualität, aber benötigt mehr Upload-Geschwindigkeit. Für Twitch empfohlen: 3000-6000 Kbps.',
        tags: ['OBS', 'Streaming', 'Technik']
    },
    {
        term: 'Bits',
        definition: 'Virtuelle Währung auf Twitch, die Zuschauer kaufen und Streamern als Unterstützung geben können. 1 Bit = ca. 0,01 USD für den Streamer (nach Twitch-Gebühren).',
        tags: ['Twitch', 'Monetarisierung']
    },
    {
        term: 'Bot',
        definition: 'Ein automatisiertes Programm im Twitch-Chat. Kann Befehle ausführen, moderieren und Chat-Games ermöglichen. Beliebte Bots: Nightbot, StreamElements, Moobot.',
        tags: ['Twitch', 'Tools']
    },
    {
        term: 'Canvas (OBS)',
        definition: 'Die Arbeitsfläche in OBS, auf der alle Quellen (Spiel, Webcam, Overlays) platziert werden. Standard-Auflösung ist meist 1920x1080 (Full HD).',
        tags: ['OBS']
    },
    {
        term: 'Capture Card',
        definition: 'Hardware, die Video-Signale von einer Konsole oder einem zweiten PC aufnimmt und an den Streaming-PC überträgt. Wichtig für Konsolen-Streaming oder Dual-PC-Setups.',
        tags: ['Hardware', 'Streaming']
    },
    {
        term: 'Channel Points',
        definition: 'Kostenlose Belohnungspunkte auf Twitch, die Zuschauer durch aktives Zuschauen sammeln können. Streamer können eigene Belohnungen definieren (z.B. Song-Request, Hydrate-Reminder).',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'Chatbot',
        definition: 'Siehe "Bot" - Ein automatisiertes Tool für Chat-Moderation und interaktive Befehle.',
        tags: ['Twitch', 'Tools']
    },
    {
        term: 'Chroma Key',
        definition: 'Technik zum Entfernen eines farbigen Hintergrunds (meist grün). Wird für Green Screens verwendet, um den Hintergrund transparent zu machen.',
        tags: ['OBS', 'Video']
    },
    {
        term: 'Clips',
        definition: 'Kurze Video-Ausschnitte (bis 60 Sekunden) aus Streams, die Zuschauer erstellen können. Perfekt für lustige oder epische Momente.',
        tags: ['Twitch', 'YouTube']
    },
    {
        term: 'Donations / Donos',
        definition: 'Geldspenden von Zuschauern über Drittanbieter wie PayPal, Streamlabs oder StreamElements. Anders als Subs fließt das Geld (abzüglich Gebühren) direkt zum Streamer.',
        tags: ['Monetarisierung']
    },
    {
        term: 'DMCA',
        definition: 'Digital Millennium Copyright Act - Urheberrechtsgesetz. Wichtig: Keine urheberrechtlich geschützte Musik auf Stream! Kann zu Strikes und Bans führen.',
        tags: ['Recht', 'Musik']
    },
    {
        term: 'Drops (Twitch)',
        definition: 'In-Game Items oder Belohnungen, die Zuschauer erhalten, wenn sie einen Stream mit aktivierten Drops schauen. Oft bei Spiel-Releases.',
        tags: ['Twitch', 'Gaming']
    },
    {
        term: 'Emote',
        definition: 'Kleine Bilder/Symbole im Chat, ähnlich wie Emojis. Auf Twitch können Affiliates und Partner eigene Emotes hochladen.',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'Encoder',
        definition: 'Software oder Hardware, die Video komprimiert für Streaming. Typen: x264 (CPU), NVENC (Nvidia GPU), QuickSync (Intel), AMF (AMD).',
        tags: ['OBS', 'Technik', 'Streaming']
    },
    {
        term: 'FPS (Frames per Second)',
        definition: 'Bilder pro Sekunde. Höhere FPS = flüssigeres Bild. Standard: 30 FPS für Talk-Streams, 60 FPS für Gaming.',
        tags: ['Streaming', 'Video']
    },
    {
        term: 'Game Capture',
        definition: 'Die beste OBS-Quelle zum Aufnehmen von Spielen. Nutzt weniger Ressourcen als Window/Display Capture.',
        tags: ['OBS', 'Gaming']
    },
    {
        term: 'Green Screen',
        definition: 'Grüner Hintergrund, der mit Chroma Key entfernt wird. Ermöglicht professionelle Webcam-Integration ohne sichtbaren Raum im Hintergrund.',
        tags: ['Hardware', 'Video']
    },
    {
        term: 'Hosting',
        definition: 'Wenn dein Stream offline ist, kannst du automatisch den Stream eines anderen Kanals anzeigen. Gute Möglichkeit, andere Streamer zu unterstützen.',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'Hype Train',
        definition: 'Event auf Twitch, das startet, wenn viele Subs/Bits innerhalb kurzer Zeit gegeben werden. Je mehr Momentum, desto höher das Level und die Belohnungen.',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'IRL (In Real Life)',
        definition: 'Twitch-Kategorie für Streams außerhalb vom Gaming - z.B. Kochen, Reisen, Talk-Shows, DIY-Projekte.',
        tags: ['Twitch', 'Kategorie']
    },
    {
        term: 'Just Chatting',
        definition: 'Die beliebteste Non-Gaming-Kategorie auf Twitch. Für Talk-Streams, Reactions, Co-Working und andere Inhalte ohne spezifisches Spiel.',
        tags: ['Twitch', 'Kategorie']
    },
    {
        term: 'Kbps (Kilobits per Second)',
        definition: 'Maßeinheit für Bitrate. 1000 Kbps = 1 Mbps. Twitch empfiehlt 3000-6000 Kbps für 1080p-Streams.',
        tags: ['Technik', 'Streaming']
    },
    {
        term: 'Latenz / Delay',
        definition: 'Verzögerung zwischen dem was du tust und dem was Zuschauer sehen. Normal sind 10-20 Sekunden. Low-Latency Mode reduziert dies auf 3-5 Sekunden.',
        tags: ['Streaming', 'Twitch']
    },
    {
        term: 'Lurker',
        definition: 'Zuschauer, die den Stream geöffnet haben, aber nicht aktiv im Chat schreiben. Trotzdem wertvoll für Viewer-Count und Watchtime!',
        tags: ['Community', 'Twitch']
    },
    {
        term: 'Mod / Moderator',
        definition: 'Vertrauenswürdige Community-Mitglieder mit erweiterten Rechten: Können Chat moderieren, User bannen/timeout und dich unterstützen.',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'Multi-Stream',
        definition: 'Gleichzeitiges Streamen auf mehreren Plattformen (Twitch, YouTube, Kick). Achtung: Twitch Partner/Affiliate haben Exklusivitätsklauseln!',
        tags: ['Streaming', 'Plattformen']
    },
    {
        term: 'NVENC',
        definition: 'Hardware-Encoder von Nvidia-Grafikkarten. Entlastet die CPU und liefert sehr gute Qualität. Empfohlen ab GTX 1650 Super / RTX 2000 Serie.',
        tags: ['OBS', 'Hardware', 'Technik']
    },
    {
        term: 'OBS (Open Broadcaster Software)',
        definition: 'Kostenlose Open-Source Software zum Streamen und Aufnehmen. Der Standard für die meisten Streamer. Unterstützt Szenen, Quellen, Filter und Plugins.',
        tags: ['Software', 'Streaming']
    },
    {
        term: 'Overlay',
        definition: 'Grafische Elemente über dem Stream: Webcam-Rahmen, Alerts, Chat-Box, Labels, Spenden-Goal. Oft erstellt mit Photoshop oder online bei Nerd or Die.',
        tags: ['Design', 'Streaming']
    },
    {
        term: 'Partner (Twitch)',
        definition: 'Höchster Status auf Twitch. Partner haben mehr Emote-Slots, bessere Einnahmen-Splits und können sich für Support-Verträge qualifizieren. Schwer zu erreichen!',
        tags: ['Twitch', 'Monetarisierung']
    },
    {
        term: 'Portable Mode (OBS)',
        definition: 'Speichermodus für OBS, bei dem alle Einstellungen im OBS-Ordner bleiben statt in AppData. Ermöglicht einfache Backups. Aktiviert durch portable_mode Ordner.',
        tags: ['OBS', 'Technik']
    },
    {
        term: 'Raid',
        definition: 'Am Ende deines Streams kannst du deine Zuschauer zu einem anderen Kanal "raiden" - alle werden automatisch dorthin weitergeleitet. Tolle Community-Aktion!',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'Resolution / Auflösung',
        definition: 'Bildgröße in Pixeln. Gängige Werte: 1920x1080 (Full HD), 1280x720 (HD), 1664x936 (936p - empfohlen für 6000 Kbps).',
        tags: ['Video', 'Streaming']
    },
    {
        term: 'Resub',
        definition: 'Wenn ein Zuschauer sein Abo (Sub) verlängert. Oft mit persönlicher Nachricht im Chat. Große Feier für Streamer!',
        tags: ['Twitch', 'Monetarisierung']
    },
    {
        term: 'Scene / Szene',
        definition: 'Ein Layout in OBS mit verschiedenen Quellen. Z.B. "Gaming-Szene", "BRB-Szene", "Starting Soon". Du kannst per Hotkey zwischen Szenen wechseln.',
        tags: ['OBS', 'Streaming']
    },
    {
        term: 'Source / Quelle',
        definition: 'Einzelne Elemente in einer OBS-Szene: Game Capture, Webcam, Bilder, Text, Browser-Source, Audio. Können positioniert, skaliert und gefiltert werden.',
        tags: ['OBS', 'Streaming']
    },
    {
        term: 'Stream Deck',
        definition: 'Hardware von Elgato mit programmierbaren Tasten (mit LCD-Displays). Ermöglicht Szenen-Wechsel, Soundboard, Makros und mehr auf Knopfdruck.',
        tags: ['Hardware', 'Tools']
    },
    {
        term: 'Stream Key',
        definition: 'Geheimer Schlüssel, der OBS mit deinem Streaming-Konto verbindet. NIEMALS teilen! Zu finden im Twitch/YouTube Dashboard.',
        tags: ['Streaming', 'Sicherheit']
    },
    {
        term: 'StreamElements / Streamlabs',
        definition: 'Plattformen für Alerts, Chatbots, Overlays und Donation-Verwaltung. StreamElements ist kostenlos, Streamlabs hat Premium-Features.',
        tags: ['Tools', 'Streaming']
    },
    {
        term: 'Sub / Subscription',
        definition: 'Monatliches Abo auf Twitch (4,99€ / 9,99€ / 24,99€). Zuschauer unterstützen Streamer und erhalten dafür Emotes, Badge und werbefreie Erfahrung.',
        tags: ['Twitch', 'Monetarisierung']
    },
    {
        term: 'Sub Gifting',
        definition: 'Zuschauer können anderen Zuschauern Subs schenken. Community Gifting = Subs an zufällige Zuschauer. Große Geste der Unterstützung!',
        tags: ['Twitch', 'Community']
    },
    {
        term: 'TOS (Terms of Service)',
        definition: 'Nutzungsbedingungen einer Plattform. SEHR WICHTIG zu kennen! Verstöße können zu Strikes, Suspensions oder Bans führen.',
        tags: ['Recht', 'Plattformen']
    },
    {
        term: 'TTS (Text-to-Speech)',
        definition: 'Sprachsynthese, die Text vorliest. Oft für Donations verwendet - Zuschauer können Nachrichten mit TTS-Voice senden.',
        tags: ['Tools', 'Chat']
    },
    {
        term: 'Upload Speed / Upload-Rate',
        definition: 'Deine Internet-Geschwindigkeit zum Hochladen von Daten. WICHTIG für Streaming! Mindestens 10 Mbps empfohlen für 1080p @ 6000 Kbps.',
        tags: ['Technik', 'Internet']
    },
    {
        term: 'VTuber',
        definition: 'Virtual YouTuber - Content Creator die statt Webcam einen animierten Avatar nutzen. Verwendet Software wie VSeeFace oder Live2D.',
        tags: ['Streaming', 'Trend']
    },
    {
        term: 'VOD (Video on Demand)',
        definition: 'Aufgezeichnete Stream-Wiederholungen. Auf Twitch 14 Tage (Affiliate) oder 60 Tage (Partner) gespeichert. Können highlight-clipped werden.',
        tags: ['Twitch', 'Video']
    },
    {
        term: 'Webcam',
        definition: 'Kamera für dein Gesicht im Stream. USB-Kameras sind günstig aber limitiert. DSLRs bieten beste Qualität. Empfohlen: OBSBOT Meet SE (Budget) oder Sony ZV-1.',
        tags: ['Hardware', 'Streaming']
    },
    {
        term: 'x264',
        definition: 'CPU-basierter Encoder in OBS. Nutzt Prozessor-Leistung für Encoding. Gute Qualität bei hoher CPU-Last. Empfohlen bei schwacher GPU.',
        tags: ['OBS', 'Technik']
    },
    {
        term: 'XLR',
        definition: 'Professioneller Audio-Anschluss für Mikrofone. Benötigt Audio-Interface. Bessere Qualität als USB, aber teurer. Für fortgeschrittene Setups.',
        tags: ['Audio', 'Hardware']
    },
];

const filteredTerms = computed(() => {
    if (!searchQuery.value) return terms;
    return terms.filter(term =>
        term.term.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const groupedTerms = computed(() => {
    const grouped = {};
    filteredTerms.value.forEach(term => {
        const firstLetter = term.term[0].toUpperCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(term);
    });

    return Object.keys(grouped)
        .sort()
        .map(letter => ({
            letter,
            terms: grouped[letter].sort((a, b) => a.term.localeCompare(b.term))
        }));
});

const scrollToLetter = (letter) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<style scoped>
</style>

