<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Navigation -->
            <AppNavigation />

            <!-- Breadcrumbs -->
            <Breadcrumbs />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">Software-Empfehlungen für Content Creator</h1>
            <p class="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Die beste Software für Video-Editing, Design, Streaming und mehr - sortiert nach Kategorie.
            </p>

            <!-- Intro -->
            <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg mb-8">
                <h2 class="text-xl md:text-2xl font-bold mb-4">💡 Warum diese Software-Empfehlungen?</h2>
                <div class="space-y-4 text-gray-300">
                    <p class="leading-relaxed">
                        Als Content Creator brauchst du verlässliche Tools, die deinen Workflow unterstützen ohne dein Budget zu sprengen. 
                        Diese Liste fokussiert sich auf <strong class="text-blue-400">kosteneffiziente</strong> und <strong class="text-blue-400">professionelle</strong> Software, 
                        die von tausenden Content Creators weltweit genutzt wird.
                    </p>
                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                        <p class="text-gray-300 leading-relaxed">
                            <strong>⚠️ Wichtig:</strong> Viele Anfänger geben hunderte Euro für Premiere Pro oder Final Cut aus - 
                            dabei gibt es <strong>kostenlose oder günstige Alternativen</strong>, die für 90% aller Content Creator vollkommen ausreichen!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Categories -->
            <div class="space-y-8">
                <!-- Video Editing -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                        <span class="text-3xl">🎬</span>
                        Video-Editing Software
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- DaVinci Resolve -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">DaVinci Resolve</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">KOSTENLOS</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                <strong class="text-white">Meine #1 Empfehlung!</strong> Professionelle Video-Editing-Software, die in Hollywood-Produktionen 
                                verwendet wird - komplett kostenlos. Inkl. Color Grading, Audio-Editing und VFX.
                            </p>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">✅ Vorteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Vollständig kostenlos (keine Wasserzeichen!)</li>
                                    <li>Professionelle Features (Color Grading, Fusion VFX)</li>
                                    <li>Für Windows, Mac & Linux</li>
                                    <li>Sehr gute Performance</li>
                                    <li>Regelmäßige Updates</li>
                                </ul>
                            </div>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">⚠️ Nachteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Steile Lernkurve am Anfang</li>
                                    <li>Benötigt etwas mehr RAM (16GB empfohlen)</li>
                                </ul>
                            </div>
                            <div class="flex gap-2">
                                <a href="https://www.blackmagicdesign.com/de/products/davinciresolve" target="_blank" rel="noopener noreferrer"
                                   class="flex-1 text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                    Download (Kostenlos)
                                </a>
                                <a href="https://www.youtube.com/results?search_query=davinci+resolve+tutorial+deutsch" target="_blank" rel="noopener noreferrer"
                                   class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                    Tutorials
                                </a>
                            </div>
                        </div>

                        <!-- CapCut -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">CapCut</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">KOSTENLOS</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                Perfekt für <strong>Anfänger</strong> und <strong>Social Media Content</strong> (TikTok, Reels, Shorts). 
                                Sehr einfach zu bedienen, viele Templates und KI-Features.
                            </p>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">✅ Vorteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Super einfach zu lernen (1-2 Stunden)</li>
                                    <li>Viele Vorlagen und Effekte</li>
                                    <li>KI-gestützte Features (Auto-Captions)</li>
                                    <li>Optimal für vertikale Videos</li>
                                    <li>Für Desktop & Mobil</li>
                                </ul>
                            </div>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">⚠️ Nachteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Weniger professionell als DaVinci</li>
                                    <li>Premium-Features kosten (aber optional)</li>
                                </ul>
                            </div>
                            <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Zur Website
                            </a>
                        </div>
                    </div>

                    <div class="mt-6 p-4 bg-gray-700/30 border border-gray-500 rounded">
                        <p class="text-sm text-gray-300">
                            <strong>💰 Warum NICHT Adobe Premiere Pro?</strong> Premiere kostet 24€/Monat (288€/Jahr). 
                            DaVinci Resolve ist kostenlos und kann 95% der gleichen Dinge - nur eben ohne Abo-Falle!
                        </p>
                    </div>
                </section>

                <!-- Image Design -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                        <span class="text-3xl">🎨</span>
                        Bildbearbeitung & Design
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Photoshop Elements -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">Adobe Photoshop Elements</h3>
                                <span class="bg-yellow-600 text-black px-3 py-1 rounded text-sm font-bold">~60€</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                <strong class="text-white">Die oft vergessene Alternative!</strong> Einmalzahlung statt Abo. 
                                Perfekt für Thumbnails, Overlays und Social Media Grafiken. Circa 60€ für 3 Jahre Nutzung.
                            </p>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">✅ Vorteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li><strong>Keine Abo-Falle!</strong> Einmalzahlung (ca. 60€)</li>
                                    <li>Einfacher als Photoshop CC</li>
                                    <li>Perfekt für Thumbnails & Overlays</li>
                                    <li>Geführte Edits für Anfänger</li>
                                    <li>Templates & Effekte</li>
                                </ul>
                            </div>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">📊 Vergleich zu Photoshop CC:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Photoshop CC: 12€/Monat = 144€/Jahr = 432€ in 3 Jahren</li>
                                    <li>Photoshop Elements: ~60€ einmalig = <strong>372€ gespart!</strong></li>
                                </ul>
                            </div>
                            <a href="https://www.adobe.com/de/products/photoshop-elements.html" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Mehr erfahren
                            </a>
                        </div>

                        <!-- GIMP -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">GIMP</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">KOSTENLOS</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                <strong>Die kostenlose Photoshop-Alternative.</strong> Open Source Bildbearbeitung mit fast allen Features. 
                                Perfekt wenn du kein Geld ausgeben willst.
                            </p>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">✅ Vorteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>100% kostenlos & Open Source</li>
                                    <li>Sehr mächtig (ähnlich wie Photoshop)</li>
                                    <li>Für Windows, Mac & Linux</li>
                                    <li>Große Community & Plugins</li>
                                </ul>
                            </div>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">⚠️ Nachteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>UI ist gewöhnungsbedürftig</li>
                                    <li>Steile Lernkurve</li>
                                    <li>Weniger intuitiv als Photoshop</li>
                                </ul>
                            </div>
                            <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Download (Kostenlos)
                            </a>
                        </div>

                        <!-- Canva -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">Canva</h3>
                                <span class="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">FREEMIUM</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                <strong>Für Nicht-Designer.</strong> Browser-basiertes Design-Tool mit tausenden Templates. 
                                Perfekt für schnelle Social Media Posts, Thumbnails und Grafiken ohne Vorkenntnisse.
                            </p>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">✅ Vorteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Super einfach - keine Design-Kenntnisse nötig</li>
                                    <li>Tausende Templates</li>
                                    <li>Im Browser (keine Installation)</li>
                                    <li>Kostenlose Version reicht für Basics</li>
                                </ul>
                            </div>
                            <div class="space-y-2 mb-4">
                                <h4 class="text-sm font-semibold text-gray-200">⚠️ Nachteile:</h4>
                                <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2">
                                    <li>Premium kostet 13€/Monat</li>
                                    <li>Weniger flexibel als Photoshop</li>
                                    <li>Kann "template-artig" aussehen</li>
                                </ul>
                            </div>
                            <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Kostenlos starten
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Streaming Software -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                        <span class="text-3xl">📡</span>
                        Streaming Software
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- OBS Studio -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">OBS Studio</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">KOSTENLOS</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                <strong class="text-white">Der Standard!</strong> Open Source Streaming Software. 
                                Von 99% aller professionellen Streamer verwendet. Unbegrenzte Möglichkeiten mit Plugins.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2 mb-4">
                                <li>Komplett kostenlos & Open Source</li>
                                <li>Szenen, Quellen, Filter, Plugins</li>
                                <li>Multi-Platform (Twitch, YouTube, Kick)</li>
                                <li>Sehr stabil & performant</li>
                            </ul>
                            <div class="flex gap-2">
                                <NuxtLink to="/obs-guide"
                                   class="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                    📖 Zum OBS Guide
                                </NuxtLink>
                                <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer"
                                   class="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                    Download
                                </a>
                            </div>
                        </div>

                        <!-- Streamlabs Desktop -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">Streamlabs Desktop</h3>
                                <span class="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">FREEMIUM</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                OBS-Fork mit integriertem Alertsystem. Einfacher für Anfänger, aber weniger flexibel. 
                                <strong>Nicht empfohlen</strong> - besser OBS + StreamElements!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2 mb-4">
                                <li>✅ Alerts integriert</li>
                                <li>⚠️ Mehr Ressourcen-Verbrauch als OBS</li>
                                <li>⚠️ Premium-Features hinter Paywall</li>
                                <li>❌ Weniger Community-Support</li>
                            </ul>
                            <p class="text-xs text-gray-400 italic">
                                💡 Tipp: Nutze lieber OBS Studio + StreamElements Plugin (kostenlos!)
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Audio -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                        <span class="text-3xl">🎵</span>
                        Audio-Bearbeitung
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Audacity -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">Audacity</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">KOSTENLOS</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                Klassiker für Audio-Bearbeitung. Perfekt für Podcasts, Voiceovers und Audio-Cleaning.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2 mb-4">
                                <li>100% kostenlos & Open Source</li>
                                <li>Noise Reduction, Compressor, EQ</li>
                                <li>Multi-Track Recording</li>
                                <li>Export in alle Formate</li>
                            </ul>
                            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Download (Kostenlos)
                            </a>
                        </div>

                        <!-- Reaper -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">REAPER</h3>
                                <span class="bg-yellow-600 text-black px-3 py-1 rounded text-sm font-bold">60$</span>
                            </div>
                            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                                Professionelle DAW (Digital Audio Workstation). Perfekt für Musik-Produktion und fortgeschrittenes Audio-Editing.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-2 mb-4">
                                <li>Sehr günstig (60$ Lizenz, unbegrenzt nutzbar)</li>
                                <li>Professionelle Features</li>
                                <li>VST Plugin Support</li>
                                <li>60 Tage kostenlose Trial (voll funktional)</li>
                            </ul>
                            <a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer"
                               class="block text-center px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Zur Website
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Final Tips -->
            <div class="mt-8 bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                <h3 class="text-lg md:text-xl font-bold mb-4">💡 Finale Tipps zur Software-Wahl</h3>
                <div class="space-y-3 text-sm text-gray-300">
                    <p>
                        <strong>1. Fang mit Kostenlos an:</strong> DaVinci Resolve, OBS Studio und GIMP sind kostenlos und reichen für 95% aller Creator.
                    </p>
                    <p>
                        <strong>2. Vermeide Abo-Fallen:</strong> Adobe Creative Cloud kostet 60€/Monat = 720€/Jahr. Das ist ein Auto nach 5 Jahren!
                    </p>
                    <p>
                        <strong>3. Nutze Tutorials:</strong> Alle empfohlenen Tools haben tausende kostenlose Tutorials auf YouTube.
                    </p>
                    <p>
                        <strong>4. Upgrade nur wenn nötig:</strong> Erst wenn du an die Grenzen der kostenlosen Tools stößt, solltest du upgraden.
                    </p>
                    <p class="text-xs text-gray-400 italic mt-4">
                        📚 Weitere Guides findest du auf unserer <NuxtLink to="/" class="text-blue-400 underline">Startseite</NuxtLink>.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Scroll to Top Button -->
        <ScrollToTop />
    </div>
</template>

<script setup>
useHead({
    title: 'Software-Empfehlungen für Content Creator - Video, Design & Streaming',
    meta: [
        { name: 'description', content: 'Die besten kostenlosen und günstigen Software-Tools für Content Creator. DaVinci Resolve, Photoshop Elements, OBS Studio und mehr.' },
        { property: 'og:title', content: 'Software-Empfehlungen für Content Creator' },
        { property: 'og:description', content: 'Die besten kostenlosen und günstigen Software-Tools für Video-Editing, Design und Streaming.' }
    ]
});
</script>

<style scoped>
</style>

