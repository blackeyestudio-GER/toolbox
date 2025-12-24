<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Navigation -->
            <nav class="mb-8 bg-eerie-black rounded-lg p-4">
                <div class="flex justify-center gap-8 text-base flex-wrap">
                    <NuxtLink to="/" class="text-gray-300 hover:text-blue-400 transition font-medium">
                        🏠 Home
                    </NuxtLink>
                    <NuxtLink to="/obs-guide" class="text-gray-300 hover:text-blue-400 transition font-medium">
                        📖 OBS Guide
                    </NuxtLink>
                    <NuxtLink to="/hardware" class="text-white font-semibold hover:text-blue-400 transition">
                        🔧 Hardware
                    </NuxtLink>
                    <NuxtLink to="/impressum" class="text-gray-400 hover:text-white transition text-sm">
                        Impressum
                    </NuxtLink>
                    <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white transition text-sm">
                        Datenschutz
                    </NuxtLink>
                </div>
            </nav>

            <h1 class="text-4xl font-bold mb-4">Streaming Hardware Guide</h1>
            <p class="text-gray-400 mb-4">
                Von Einsteiger bis High-End - Finde das perfekte Setup für dein Budget. 
                Alle Empfehlungen basieren auf praktischer Erfahrung und echtem Einsatz im Stream.
            </p>
            
            <!-- Affiliate Disclaimer -->
            <div class="bg-blue-900/20 border border-blue-600 p-4 rounded-lg mb-8">
                <p class="text-blue-200 text-sm">
                    <strong>💙 Transparenz-Hinweis:</strong> Die Links auf dieser Seite sind Amazon Affiliate Links. 
                    Wenn du über diese Links einkaufst, erhalte ich eine kleine Provision - ohne dass du mehr bezahlst! 
                    Dies hilft mir, diese Wissensdatenbank weiter auszubauen und zu pflegen. Vielen Dank für deine Unterstützung! 🙏
                </p>
            </div>
            
            <!-- Tab Navigation -->
            <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                        'px-6 py-3 font-semibold transition-all rounded-t-lg',
                        activeTab === tab.id 
                            ? 'bg-eerie-black text-white border-b-2 border-blue-500' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    ]"
                >
                    <span class="block">{{ tab.name }}</span>
                    <span class="text-xs block mt-1" :class="activeTab === tab.id ? 'text-blue-400' : 'text-gray-500'">
                        {{ tab.budget }}
                    </span>
                </button>
            </div>

            <!-- Tab Content -->
            <div class="space-y-8">
                <!-- Anfänger Setup -->
                <div v-if="activeTab === 'beginner'" class="space-y-6">
                    <div class="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-600 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-3">🌱 Anfänger Setup - Einstieg ins Streaming</h2>
                        <p class="text-gray-300 mb-4">
                            Das Minimum um zu starten. Perfekt wenn du erstmal testen willst, ob Streaming etwas für dich ist, 
                            ohne viel Geld auszugeben. Alle Produkte von Amazon für einfache Verfügbarkeit.
                        </p>
                        <div class="bg-blue-900/20 border border-blue-600 p-3 rounded">
                            <p class="text-blue-200 text-sm">
                                <strong>💡 Tipp:</strong> Mit diesem Setup kannst du definitiv starten! Die Qualität ist okay für den Anfang, 
                                und du kannst später Stück für Stück upgraden.
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-green-400 font-bold">~30€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">FIFINE USB Mikrofon K669B</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Solides USB-Mikrofon für Einsteiger. Plug & Play, keine zusätzliche Hardware nötig.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ USB-Anschluss (einfach)</li>
                                <li>✓ Nierencharakteristik</li>
                                <li>✓ Gutes Preis-Leistungs-Verhältnis</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=FIFINE+K669B&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Webcam -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">📹 Webcam</h3>
                                <span class="text-green-400 font-bold">~40€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Logitech C920 HD</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Der Klassiker für Einsteiger. 1080p, zuverlässig und weit verbreitet.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1080p @ 30fps</li>
                                <li>✓ Autofokus</li>
                                <li>✓ Eingebautes Stereo-Mikrofon</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Logitech+C920&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">💡 Beleuchtung</h3>
                                <span class="text-green-400 font-bold">~25€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Neewer Ringlicht 10"</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Kleines Ringlicht mit Stativ. Perfekt um dein Gesicht auszuleuchten.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Dimmbar</li>
                                <li>✓ 3 Farbtemperaturen</li>
                                <li>✓ Inklusive Tischstativ</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Neewer+Ringlicht+10&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎧 Kopfhörer</h3>
                                <span class="text-green-400 font-bold">~50€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">HyperX Cloud Stinger</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Gaming-Headset mit gutem Sound. Verhindert Echo beim Streamen.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Leicht und bequem</li>
                                <li>✓ Guter Sound</li>
                                <li>✓ 50mm Treiber</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=HyperX+Cloud+Stinger&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800 p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-green-400">~145€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Preise können variieren. Schau nach Angeboten auf Amazon!
                        </p>
                    </div>
                </div>

                <!-- Bang for Buck Setup -->
                <div v-if="activeTab === 'bang-for-buck'" class="space-y-6">
                    <div class="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-600 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-3">⚡ Bang for the Buck - Bestes Preis-Leistungs-Verhältnis</h2>
                        <p class="text-gray-300 mb-4">
                            Hier holst du das Maximum aus deinem Budget raus! Deutlich bessere Qualität als beim Anfänger-Setup, 
                            aber immer noch bezahlbar. Meine Top-Empfehlung für neue Streamer die es ernst meinen.
                        </p>
                        <div class="bg-orange-900/20 border border-orange-600 p-3 rounded">
                            <p class="text-orange-200 text-sm">
                                <strong>🔥 Empfehlung:</strong> Das ist das beste Setup für die meisten Streamer! 
                                Hier stimmt das Verhältnis zwischen Preis und Qualität perfekt.
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-yellow-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-yellow-400 font-bold">~100€</span>
                            </div>
                            <p class="text-lg font-semibold text-yellow-400 mb-2">Rode PodMic USB</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Dynamisches USB-Mikrofon mit professionellem Sound. Perfekt für Streaming und Podcasts.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Dynamisches Mikrofon</li>
                                <li>✓ USB & XLR (flexibel)</li>
                                <li>✓ Niedriges Grundrauschen</li>
                                <li>✓ Sehr robust</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Rode+PodMic+USB&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Mikrofon Arm -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-yellow-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🦾 Mikrofon Arm</h3>
                                <span class="text-yellow-400 font-bold">~30€</span>
                            </div>
                            <p class="text-lg font-semibold text-yellow-400 mb-2">Rode PSA1+ Mikrofonarm</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Hochwertiger Mikrofonarm. Flexibel positionierbar und sehr stabil.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Stabil und hochwertig</li>
                                <li>✓ Kabelführung integriert</li>
                                <li>✓ Tischklemme</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Rode+PSA1&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Webcam -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-yellow-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">📹 Webcam</h3>
                                <span class="text-yellow-400 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-yellow-400 mb-2">Logitech C922 Pro Stream</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Upgrade zur C920. Bessere Low-Light Performance und 60fps bei 720p.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1080p @ 30fps / 720p @ 60fps</li>
                                <li>✓ Besseres Low-Light</li>
                                <li>✓ Autofokus</li>
                                <li>✓ Stativ inklusive</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Logitech+C922&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-yellow-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">💡 Beleuchtung</h3>
                                <span class="text-yellow-400 font-bold">~40€</span>
                            </div>
                            <p class="text-lg font-semibold text-yellow-400 mb-2">Elgato Key Light Air</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Professionelles LED-Panel. WiFi-gesteuert über App, perfekte Ausleuchtung.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1400 Lumen</li>
                                <li>✓ WiFi-Steuerung</li>
                                <li>✓ Farbtemperatur einstellbar</li>
                                <li>✓ Tischklemme</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Key+Light+Air&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800 p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-yellow-400">~240€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Deutlich bessere Qualität für moderaten Aufpreis. Top Preis-Leistung!
                        </p>
                    </div>
                </div>

                <!-- Normales Setup -->
                <div v-if="activeTab === 'normal'" class="space-y-6">
                    <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-600 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-3">🎯 Normales Setup - Wo du landen willst</h2>
                        <p class="text-gray-300 mb-4">
                            Das Setup für etablierte Streamer. Professionelle Qualität in Bild und Ton. 
                            Mit dieser Ausrüstung bist du auf dem Niveau vieler erfolgreicher Content Creator.
                        </p>
                        <div class="bg-blue-900/20 border border-blue-600 p-3 rounded">
                            <p class="text-blue-200 text-sm">
                                <strong>🎯 Das Ziel:</strong> Mit diesem Setup bist du professionell aufgestellt. 
                                Deine Zuschauer werden den Unterschied definitiv bemerken!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-blue-400 font-bold">~140€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Shure SM7B</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Das legendäre Broadcast-Mikrofon. Von Streamern und Podcastern weltweit geliebt.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Qualität</li>
                                <li>✓ Dynamisches Mikrofon</li>
                                <li>✓ Exzellente Hintergrundunterdrückung</li>
                                <li>✓ Warmer, voller Sound</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Shure+SM7B&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Audio Interface -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎛️ Audio Interface</h3>
                                <span class="text-blue-400 font-bold">~120€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Focusrite Scarlett Solo (3rd Gen)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Branchenstandard für XLR-Mikrofone. Kristallklarer Vorverstärker.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ XLR-Eingang für SM7B</li>
                                <li>✓ Niedriges Rauschen</li>
                                <li>✓ USB-C Anschluss</li>
                                <li>✓ Kopfhörer-Ausgang</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Focusrite+Scarlett+Solo&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Mikrofon Arm -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🦾 Mikrofon Arm</h3>
                                <span class="text-blue-400 font-bold">~110€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Rode PSA1+</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Premium Mikrofonarm von Rode. Perfekt für das SM7B.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Trägt schwere Mikrofone</li>
                                <li>✓ Integrierte Kabelführung</li>
                                <li>✓ Extrem stabil</li>
                                <li>✓ 360° drehbar</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Rode+PSA1&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Webcam -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">📹 Webcam</h3>
                                <span class="text-blue-400 font-bold">~80€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Razer Kiyo Pro</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Streaming-Webcam mit großem Sensor. Hervorragende Low-Light Performance.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1080p @ 60fps</li>
                                <li>✓ Großer Sony STARVIS Sensor</li>
                                <li>✓ HDR-Unterstützung</li>
                                <li>✓ Weitwinkel-Objektiv</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Razer+Kiyo+Pro&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Key Light -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">💡 Key Light</h3>
                                <span class="text-blue-400 font-bold">~2x 60€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">2x Elgato Key Light Air</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Zwei Lights für 3-Punkt-Beleuchtung. Professionelles Setup.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Perfekte Ausleuchtung</li>
                                <li>✓ WiFi-gesteuert</li>
                                <li>✓ 2800-7000K einstellbar</li>
                                <li>✓ 1400 Lumen pro Light</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Key+Light+Air&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Green Screen -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🟢 Green Screen</h3>
                                <span class="text-blue-400 font-bold">~30€</span>
                            </div>
                            <p class="text-lg font-semibold text-blue-400 mb-2">Elgato Green Screen</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Ausziehbarer Green Screen. Professionelle Hintergrund-Entfernung.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 148 x 180 cm</li>
                                <li>✓ Ausziehbar (wie Rollo)</li>
                                <li>✓ Knitterarm</li>
                                <li>✓ Platzsparend</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Green+Screen&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800 p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-blue-400">~520€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Professionelles Setup. Du bist auf Augenhöhe mit erfolgreichen Streamern!
                        </p>
                    </div>
                </div>

                <!-- High-End Setup -->
                <div v-if="activeTab === 'high-end'" class="space-y-6">
                    <div class="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-600 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-3">💎 High-End Setup - Premium für Profis</h2>
                        <p class="text-gray-300 mb-4">
                            Das Beste vom Besten. Broadcast-Qualität für professionelle Streamer die keine Kompromisse eingehen. 
                            Mit diesem Setup hast du Equipment auf Niveau von großen Produktionen.
                        </p>
                        <div class="bg-purple-900/20 border border-purple-600 p-3 rounded">
                            <p class="text-purple-200 text-sm">
                                <strong>✨ Premium:</strong> Dieses Setup ist für Vollzeit-Streamer und Profis. 
                                Die Investition lohnt sich nur, wenn Streaming dein Hauptjob ist!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-purple-400 font-bold">~430€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Shure SM7B + Cloudlifter CL-1</p>
                            <p class="text-sm text-gray-400 mb-3">
                                SM7B mit Cloudlifter für maximale Gain. Perfekter, rauschfreier Broadcast-Sound.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Broadcast-Standard</li>
                                <li>✓ + 25dB sauberes Gain</li>
                                <li>✓ Absolut rauschfrei</li>
                                <li>✓ Wie bei Top-Podcastern</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Shure+SM7B&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Audio Interface -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎛️ Audio Interface</h3>
                                <span class="text-purple-400 font-bold">~200€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Universal Audio Volt 276</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Premium Interface mit Röhren-Preamp. Studio-Sound für deinen Stream.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Vintage Röhren-Sound</li>
                                <li>✓ 76er Kompressor eingebaut</li>
                                <li>✓ Hervorragende Preamps</li>
                                <li>✓ USB-C</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Universal+Audio+Volt+276&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Mikrofon Arm -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🦾 Mikrofon Arm</h3>
                                <span class="text-purple-400 font-bold">~110€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Rode PSA1+</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Der beste Mikrofonarm auf dem Markt. Premium-Verarbeitung.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Broadcast-Qualität</li>
                                <li>✓ Lautlos positionierbar</li>
                                <li>✓ Perfekte Kabelführung</li>
                                <li>✓ Lebenslange Garantie</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Rode+PSA1&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kamera -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">📹 Kamera</h3>
                                <span class="text-purple-400 font-bold">~600€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Sony Alpha 6400 (nur Body)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Spiegellose Kamera als Webcam. Cinematic Look für deinen Stream.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ APS-C Sensor</li>
                                <li>✓ 4K Video</li>
                                <li>✓ Autofokus wie im Kino</li>
                                <li>✓ Clean HDMI Out</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Sony+Alpha+6400&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Objektiv -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">📸 Objektiv</h3>
                                <span class="text-purple-400 font-bold">~220€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Sigma 16mm f/1.4 DC DN</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Lichtstarkes Objektiv. Perfekt für Streaming mit geringer Tiefenschärfe.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ f/1.4 (sehr lichtstark)</li>
                                <li>✓ Bokeh-Effekt</li>
                                <li>✓ Scharf bis in die Ecken</li>
                                <li>✓ Perfekt für Sony E-Mount</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Sigma+16mm+1.4+Sony&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Capture Card -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎬 Capture Card</h3>
                                <span class="text-purple-400 font-bold">~130€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Elgato Cam Link 4K</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Wandelt HDMI-Signal der Kamera in USB um. 4K-Unterstützung.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 4K @ 30fps / 1080p @ 60fps</li>
                                <li>✓ Ultra-niedrige Latenz</li>
                                <li>✓ Plug & Play</li>
                                <li>✓ USB 3.0</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Cam+Link+4K&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Key Lights -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">💡 Key Lights</h3>
                                <span class="text-purple-400 font-bold">~2x 180€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">2x Elgato Key Light</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Die großen Key Lights. Noch mehr Power als die Air-Version.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 2800 Lumen pro Light</li>
                                <li>✓ WiFi-gesteuert</li>
                                <li>✓ Multi-Mount System</li>
                                <li>✓ Broadcast-Standard</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Key+Light&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Stream Deck -->
                        <div class="bg-eerie-black p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold">🎮 Stream Deck</h3>
                                <span class="text-purple-400 font-bold">~150€</span>
                            </div>
                            <p class="text-lg font-semibold text-purple-400 mb-2">Elgato Stream Deck</p>
                            <p class="text-sm text-gray-400 mb-3">
                                15 programmierbare LCD-Tasten. Steuere deinen Stream mit einem Fingertipp.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 15 LCD-Tasten</li>
                                <li>✓ Szenen-Wechsel</li>
                                <li>✓ Sounds abspielen</li>
                                <li>✓ Unendliche Möglichkeiten</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Stream+Deck&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored" 
                               class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800 p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-purple-400">~2.020€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Absolut professionelles Setup. Broadcast-Qualität für Vollzeit-Streamer!
                        </p>
                    </div>
                </div>

                <!-- Mein Setup -->
                <div v-if="activeTab === 'my-setup'" class="space-y-6">
                    <div class="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-600 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold mb-3">⭐ Mein aktuelles Setup</h2>
                        <p class="text-gray-300 mb-4">
                            Das ist die Hardware die ich aktuell in meinem Stream nutze. Diese Liste wird regelmäßig aktualisiert 
                            wenn ich Equipment upgrade oder austausche.
                        </p>
                        <div class="bg-cyan-900/20 border border-cyan-600 p-3 rounded">
                            <p class="text-cyan-200 text-sm">
                                <strong>📌 Zum Vergleich:</strong> Du kannst mein Setup mit den Budget-Kategorien vergleichen 
                                und sehen, wo sich ein Upgrade lohnt.
                            </p>
                        </div>
                    </div>

                    <!-- Placeholder für dein Setup -->
                    <div class="bg-yellow-900/20 border border-yellow-600 p-6 rounded-lg text-center">
                        <p class="text-yellow-200 mb-3">
                            <strong>🚧 Diese Sektion wird aktualisiert</strong>
                        </p>
                        <p class="text-gray-300 text-sm">
                            Die Produkte werden automatisch von Kit.co importiert sobald das Update-Script läuft.
                        </p>
                    </div>

                    <!-- Auto-generated from Kit.co on 2025-12-24T13:01:54.965Z -->
                    <div class="grid md:grid-cols-2 gap-6">

                        <div class="bg-red-900/20 border border-red-600 p-6 rounded-lg text-center col-span-2">
                            <p class="text-red-200 mb-3">
                                <strong>❌ Keine Produkte gefunden</strong>
                            </p>
                            <p class="text-gray-300 text-sm">
                                Das Scraping konnte keine Produkte von Kit.co extrahieren. 
                                Möglicherweise hat sich die Struktur der Website geändert.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-5 rounded-lg mt-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Letzte Aktualisierung:</h3>
                            <span class="text-cyan-400 font-semibold">24.12.2025</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            0 Produkte von Kit.co importiert
                        </p>
                    </div>
                </div>
            </div>

            <!-- Back to home -->
            <div class="mt-12 text-center">
                <NuxtLink to="/" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                    ← Zurück zur Tool-Übersicht
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
  title: 'Streaming Hardware Guide',
  meta: [
    { name: 'description', content: 'Kompletter Hardware-Guide für Streamer. Von Einsteiger-Setup bis High-End Equipment. Mikrofone, Kameras, Beleuchtung und mehr.' },
    { name: 'keywords', content: 'Streaming Hardware, Mikrofon Streaming, Webcam, Key Light, Stream Setup, Streaming Equipment' }
  ]
});

const activeTab = ref('beginner');

const tabs = [
  { id: 'beginner', name: 'Anfänger', budget: '~150€' },
  { id: 'bang-for-buck', name: 'Bang for Buck', budget: '~250€' },
  { id: 'normal', name: 'Normales Setup', budget: '~500€' },
  { id: 'high-end', name: 'High-End', budget: '~1.000€' },
  { id: 'my-setup', name: 'Mein Setup', budget: 'Zum Vergleich' },
];
</script>

<style scoped>
</style>

