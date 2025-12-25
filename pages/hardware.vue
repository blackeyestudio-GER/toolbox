<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Navigation -->
            <AppNavigation />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">Streaming Hardware Guide</h1>
            <p class="text-sm md:text-base text-gray-400 mb-4">
                Dein Upgrade-Pfad von den ersten Schritten bis zum professionellen Setup. 
                Alle Empfehlungen basieren auf praktischer Erfahrung und echtem Einsatz im Stream.
            </p>
            
            <!-- Affiliate Disclaimer -->
            <div class="bg-gray-800/50 border border-gray-600 p-4 rounded-lg mb-8">
                <p class="text-gray-300 text-sm">
                    <strong>💙 Transparenz-Hinweis:</strong> Die Links auf dieser Seite sind Amazon Affiliate Links. 
                    Wenn du über diese Links einkaufst, erhalte ich eine kleine Provision - ohne dass du mehr bezahlst! 
                    Dies hilft mir, diese Wissensdatenbank weiter auszubauen und zu pflegen. Vielen Dank für deine Unterstützung! 🙏
                </p>
            </div>

            <!-- Intro Text -->
            <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg mb-8">
                <h2 class="text-xl md:text-2xl font-bold mb-4">💡 Bevor du startest - Ein ehrliches Wort</h2>
                
                <div class="space-y-4 text-gray-300">
                    <p class="leading-relaxed">
                        Die folgenden Hardware-Empfehlungen basieren auf meiner eigenen Erfahrung als Streamer und sind darauf 
                        ausgelegt, dir das <strong class="text-blue-400">beste Preis-Leistungs-Verhältnis</strong> zu bieten. 
                        Keine Über-Engineering, keine unnötigen Ausgaben – nur das, was du wirklich brauchst.
                    </p>
                    
                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                        <p class="text-gray-300 leading-relaxed">
                            <strong>⚠️ Reality Check:</strong> Viele Streamer geben für ihre Hardware wesentlich mehr aus, als sie 
                            <strong>eigentlich sollten</strong>. Es ist verlockend, sofort mit dem teuersten Setup zu starten – aber 
                            das ist selten sinnvoll! Meine Empfehlungen dienen dazu, dich zu orientieren, was 
                            <strong>kosteneffizient UND qualitativ hochwertig</strong> ist.
                        </p>
                    </div>

                    <p class="leading-relaxed">
                        <strong class="text-gray-200">💰 Spar-Tipp:</strong> Schau unbedingt auch auf dem 
                        <strong>Gebrauchtmarkt</strong>! DSLRs, Stream Decks und Audio-Equipment werden oft von anderen Streamern 
                        abgestoßen – manchmal bekommst du Premium-Hardware für einen Bruchteil des Neupreises. 
                        Plattformen wie eBay Kleinanzeigen, Facebook Marketplace oder spezialisierte Foto-Börsen sind Gold wert!
                    </p>

                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                        <p class="text-gray-300 leading-relaxed text-center text-lg">
                            <strong>🏃‍♂️ Remember:</strong> Streaming ist ein <strong>Marathon</strong>, kein Sprint!<br>
                            <span class="text-sm">
                                Du musst nicht sofort alles haben. Starte klein, lerne dein Craft, wachse mit deiner Community – 
                                und upgrade deine Hardware Schritt für Schritt, wenn es wirklich Sinn macht.
                            </span>
                        </p>
                    </div>

                    <p class="leading-relaxed">
                        Dieser Guide zeigt dir den <strong class="text-gray-200">optimalen Upgrade-Pfad</strong> – von deinem 
                        ersten Stream bis zum professionellen Setup. Jede Stufe baut auf der vorherigen auf, und du kannst in 
                        deinem eigenen Tempo voranschreiten. 
                    </p>

                    <p class="text-sm text-gray-400 italic">
                        Die Preise sind Richtwerte und können variieren. Schau nach Angeboten und vergleiche immer mehrere Händler!
                    </p>
                </div>
            </div>
            
            <!-- Tab Navigation -->
            <div class="mb-6 border-b border-gray-700 overflow-x-auto scrollbar-hide">
                <div class="flex gap-1 md:gap-2 min-w-max md:min-w-0">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        @click="activeTab = tab.id"
                        :class="[
                            'px-2 md:px-6 py-2 md:py-3 text-xs md:text-base font-semibold transition-all rounded-t-lg whitespace-nowrap flex-shrink-0',
                            activeTab === tab.id 
                                ? 'bg-eerie-black text-white border-b-2 border-gray-400' 
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        ]"
                    >
                        <span class="block">{{ tab.name }}</span>
                        <span class="text-[9px] md:text-xs block mt-0.5 md:mt-1" :class="activeTab === tab.id ? 'text-blue-400' : 'text-gray-500'">
                            {{ tab.budget }}
                        </span>
                    </button>
                </div>
            </div>

            <!-- Tab Content -->
            <div class="space-y-8">
                <!-- 1. Hobbyist Setup -->
                <div v-if="activeTab === 'hobbyist'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                        <h2 class="text-xl md:text-2xl font-bold mb-3">🌱 Hobbyist - Dein erster Stream</h2>
                        <p class="text-gray-300 mb-4">
                            Teste ob Streaming etwas für dich ist - minimale Investition, maximaler Spaß! 
                            Starte mit dem Wichtigsten: einem guten Mikrofon.
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                            <p class="text-gray-300 text-sm">
                                <strong>💡 Spar-Tipp:</strong> Starte OHNE Webcam und Licht! Dein Mikrofon ist am wichtigsten. 
                                Mit etwas Sparen kannst du dann zur OBSBOT Meet SE (~80-100€) upgraden. Stream erstmal nur mit 
                                Game Capture oder nutze dein Smartphone als Webcam!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-gray-300 font-bold">~50-80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">FIFINE XLR/USB Mikrofon</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Oft im Angebot! Flexibel dank USB für sofort + XLR für späteres Upgrade. Perfekter Einstieg.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ USB & XLR (upgrade-fähig!)</li>
                                <li>✓ Nierencharakteristik</li>
                                <li>✓ Oft im Angebot</li>
                                <li>✓ Sehr gutes Preis-Leistungs-Verhältnis</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=FIFINE+XLR+USB&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Keine Kamera -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📹 Webcam</h3>
                                <span class="text-gray-300 font-bold">0€</span>
                            </div>
                            <p class="text-lg font-semibold text-gray-400 mb-2">Keine Kamera nötig!</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Nutze Game Capture oder dein Smartphone. Eine Webcam ist optional!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Smartphone als Webcam</li>
                                <li>✓ Nur Game Capture</li>
                                <li>✓ Spare für OBSBOT Meet SE</li>
                                <li>✓ Mikrofon ist wichtiger!</li>
                            </ul>
                            <div class="text-sm text-gray-400 italic">
                                Spare lieber und hol dir später die OBSBOT Meet SE für ~80-100€
                            </div>
                        </div>

                        <!-- Kopfhörer -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer</h3>
                                <span class="text-gray-300 font-bold">0€</span>
                            </div>
                            <p class="text-lg font-semibold text-gray-400 mb-2">Nutze was du hast!</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Jedes Headset reicht am Anfang. Investiere später in besseren Sound.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Gaming-Headset?</li>
                                <li>✓ In-Ear Kopfhörer?</li>
                                <li>✓ Over-Ear Headphones?</li>
                                <li>✓ Alles ist OK!</li>
                            </ul>
                            <div class="text-sm text-gray-400 italic">
                                Für deinen eigenen Sound reicht jedes Headset
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg md:text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-white">~50-80€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Perfekt zum Testen! Wenn Streaming dir Spaß macht, kannst du Schritt für Schritt upgraden.
                        </p>
                    </div>
                </div>

                <!-- 2. Affiliate Setup -->
                <div v-if="activeTab === 'affiliate'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                        <h2 class="text-xl md:text-2xl font-bold mb-3">⚡ Affiliate - Regelmäßiges Streaming</h2>
                        <p class="text-gray-300 mb-4">
                            Bereit für deine ersten Subs und Donations - regelmäßiges Streaming mit solider Qualität. 
                            Zeit für deine erste richtige Streaming-Kamera!
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                            <p class="text-gray-300 text-sm">
                                <strong>🎯 Level-Up:</strong> Mit diesem Setup bist du bereit für Affiliate-Programme und erste Einnahmen!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon (Option 1)</h3>
                                <span class="text-gray-300 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">FIFINE XLR/USB</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Wenn du mit dem Hobbyist-Mikro zufrieden bist, behalte es! Sonst upgrade zum AT2020USB+.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ USB & XLR Support</li>
                                <li>✓ Upgrade-fähig</li>
                                <li>✓ Oft im Angebot</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=FIFINE+XLR+USB&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon (Option 2)</h3>
                                <span class="text-gray-300 font-bold">~90€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Audio Technica AT2020USB+</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Studio-Sound für wenig Geld. Klassiker unter Streamern und Podcastern.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Qualität</li>
                                <li>✓ USB & XLR</li>
                                <li>✓ Kopfhörer-Monitoring inkl.</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Audio+Technica+AT2020USB+Plus&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">💡 Beleuchtung</h3>
                                <span class="text-gray-300 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">2x Neewer LED Panel Kit</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Professionelle Ausleuchtung für wenig Geld. Zwei Panels mit Stativen.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 2x LED Panels</li>
                                <li>✓ Dimmbar (10-100%)</li>
                                <li>✓ Stative inklusive</li>
                                <li>✓ 3200-5600K einstellbar</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Neewer+LED+Panel+Light+Kit&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kamera -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📹 Webcam</h3>
                                <span class="text-gray-300 font-bold">~80-100€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">OBSBOT Meet SE ⭐</p>
                            <p class="text-sm text-gray-400 mb-3">
                                AI-Tracking Kamera! Folgt dir automatisch. Aktuell oft im Angebot für ~80€!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1080p @ 100fps!</li>
                                <li>✓ AI-Tracking</li>
                                <li>✓ Gestensteuerung</li>
                                <li>✓ Sehr gute Low-Light Performance</li>
                            </ul>
                            <a href="https://amzn.to/3YItTsj" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Mikrofonarm -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🦾 Mikrofonarm</h3>
                                <span class="text-gray-300 font-bold">~50-80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Neewer Hydraulik-Arm ⭐</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Der beste Mikrofonarm den ich je hatte! Oft günstiger im Angebot.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Hydraulische Dämpfung</li>
                                <li>✓ Extrem stabil</li>
                                <li>✓ Kabelführung integriert</li>
                                <li>✓ Oft im Angebot!</li>
                            </ul>
                            <a href="https://amzn.to/4pcy0Yz" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer Option 1 -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 1)</h3>
                                <span class="text-gray-300 font-bold">~50€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">HyperX Cloud Stinger</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Solides Gaming-Headset. Verhindert Echo und ist bequem für lange Sessions.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Leicht und bequem</li>
                                <li>✓ Guter Sound</li>
                                <li>✓ 50mm Treiber</li>
                                <li>✓ Langlebig</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=HyperX+Cloud+Stinger&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer Option 2 -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 2)</h3>
                                <span class="text-gray-300 font-bold">~80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Logitech G PRO X</p>
                            <p class="text-sm text-gray-400 mb-3">
                                eSports-Headset mit Blue VO!CE Technologie. Professioneller Sound für Streamer.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Blue VO!CE Mic-Filter</li>
                                <li>✓ PRO-G 50mm Treiber</li>
                                <li>✓ DTS Headphone:X 2.0</li>
                                <li>✓ Memory Foam Polster</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Logitech+G+PRO+X&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg md:text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-white">~320-390€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Solide Basis für regelmäßiges Streaming. Bereit für Affiliate-Programme!
                        </p>
                    </div>
                </div>

                <!-- 3. Etablierter Streamer -->
                <div v-if="activeTab === 'established'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                        <h2 class="text-xl md:text-2xl font-bold mb-3">💎 Etablierter Streamer - Community aufbauen</h2>
                        <p class="text-gray-300 mb-4">
                            Du streamst regelmäßig und baust dir eine Community auf - solide Basis für kontinuierliches Wachstum.
                            Zeit für bessere Bildqualität!
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                            <p class="text-gray-300 text-sm">
                                <strong>📈 Wachstum:</strong> Mit diesem Setup bist du bereit für echtes Community-Building!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-gray-300 font-bold">~90€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Audio Technica AT2020USB+</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Wenn du bereits das AT2020USB+ hast, behalte es! Ansonsten jetzt upgraden.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Sound</li>
                                <li>✓ USB & XLR</li>
                                <li>✓ Kopfhörer-Monitoring</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Audio+Technica+AT2020USB+Plus&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">💡 Beleuchtung</h3>
                                <span class="text-gray-300 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">2x LED Panel Kit</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Behalte deine LED Panels - die reichen noch!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 2x LED Panels</li>
                                <li>✓ Dimmbar</li>
                                <li>✓ Stative inklusive</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Neewer+LED+Panel+Light+Kit&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kamera UPGRADE -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📹 Webcam ⭐ UPGRADE</h3>
                                <span class="text-gray-300 font-bold">~120-150€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">OBSBOT Meet 2</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Besseres Tracking & Bildqualität! Deutlich professioneller als Meet SE.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Bessere Bildqualität</li>
                                <li>✓ Verbessertes AI-Tracking</li>
                                <li>✓ Gestensteuerung 2.0</li>
                                <li>✓ Zoom-Kontrolle</li>
                            </ul>
                            <a href="https://amzn.to/4axGgPi" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Arm bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🦾 Mikrofonarm</h3>
                                <span class="text-gray-300 font-bold">~50-80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Neewer Hydraulik-Arm</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Behalte deinen Hydraulik-Arm - der ist perfekt!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Hydraulische Dämpfung</li>
                                <li>✓ Extrem stabil</li>
                                <li>✓ Kabelführung</li>
                            </ul>
                            <a href="https://amzn.to/4pcy0Yz" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer</h3>
                                <span class="text-gray-300 font-bold">~50€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">HyperX Cloud Stinger</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Reicht noch! Upgrade erst im nächsten Level.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Leicht und bequem</li>
                                <li>✓ Guter Sound</li>
                                <li>✓ Langlebig</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=HyperX+Cloud+Stinger&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg md:text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-white">~380-440€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Fokus auf bessere Kamera. Community-Building mit professioneller Bildqualität!
                        </p>
                    </div>
                </div>

                <!-- 4. Semi-Pro / Partner Setup -->
                <div v-if="activeTab === 'semi-pro'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                        <h2 class="text-xl md:text-2xl font-bold mb-3">🚀 Semi-Pro - Konstante Einnahmen</h2>
                        <p class="text-gray-300 mb-4">
                            Du verdienst bereits konstant Geld mit Streaming - Zeit für ein Setup, das deinen Ansprüchen gerecht wird. 
                            Etablierte Streamer mit wachsender Community.
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                            <p class="text-gray-300 text-sm">
                                <strong>💰 Einnahmen-Level:</strong> Du verdienst genug, um dein Equipment zu finanzieren und zu upgraden.
                                Die meisten Streamer haben hier bereits eine DSLR - aber ich empfehle noch die OBSBOT Tiny 2!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon UPGRADE -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon</h3>
                                <span class="text-gray-300 font-bold">~90€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Audio Technica AT2020 (XLR)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Zeit für echtes XLR! Falls du noch USB nutzt, upgrade jetzt auf XLR + Audio Interface.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Qualität XLR</li>
                                <li>✓ Nierencharakteristik</li>
                                <li>✓ Professionelle Aufnahmen</li>
                                <li>✓ Klassiker im Studio</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Audio+Technica+AT2020+XLR&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Audio Interface OPTIONAL -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎛️ Audio Interface (Optional)</h3>
                                <span class="text-gray-300 font-bold">~160€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Elgato Wave XLR ⭐</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Eines der besten Interfaces für Streamer! Clipguard Technology und perfekte OBS-Integration.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Clipguard (nie wieder clipping!)</li>
                                <li>✓ 75dB Gain</li>
                                <li>✓ OBS & Wave Link Integration</li>
                                <li>✓ Kopfhörer-Monitoring</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Wave+XLR&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht UPGRADE -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">💡 Beleuchtung (Option 1)</h3>
                                <span class="text-gray-300 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">2x LED Panel Kit</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Die LED Panels reichen noch völlig aus! Spare lieber für andere Upgrades.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Immer noch perfekt</li>
                                <li>✓ Spare für Key Light Airs</li>
                                <li>✓ Erst upgraden wenn nötig</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Neewer+LED+Panel+Light+Kit&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">💡 Beleuchtung (Option 2)</h3>
                                <span class="text-gray-300 font-bold">~260€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">2x Elgato Key Light Air ⭐</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Wenn du bereit bist zu upgraden: Key Light Airs sind perfekt! Smartphone-Control und WiFi.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1400 Lumen pro Light</li>
                                <li>✓ WiFi Control</li>
                                <li>✓ 2900-7000K einstellbar</li>
                                <li>✓ Stream Deck Integration</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Key+Light+Air&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kamera UPGRADE -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📹 Webcam ⭐</h3>
                                <span class="text-gray-300 font-bold">~150-200€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">OBSBOT Tiny 2 Lite</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Top-Kamera bevor du zur DSLR springst! Viele haben hier bereits eine DSLR - aber die Tiny 2 reicht völlig!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Exzellente Bildqualität</li>
                                <li>✓ AI-Tracking Pro</li>
                                <li>✓ 4K Support</li>
                                <li>✓ Gestensteuerung Plus</li>
                            </ul>
                            <a href="https://amzn.to/49eRtC9" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Arm bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🦾 Mikrofonarm</h3>
                                <span class="text-gray-300 font-bold">~50-80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Neewer Hydraulik-Arm</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Behalte deinen Hydraulik-Arm - der ist perfekt!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Hydraulische Dämpfung</li>
                                <li>✓ Extrem stabil</li>
                                <li>✓ Kabelführung</li>
                            </ul>
                            <a href="https://amzn.to/4pcy0Yz" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer UPGRADE -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 1)</h3>
                                <span class="text-gray-300 font-bold">~80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">HyperX Cloud III</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Upgrade zum Cloud III für besseren Sound und Komfort.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 53mm Treiber</li>
                                <li>✓ DTS Headphone:X</li>
                                <li>✓ Extrem bequem</li>
                                <li>✓ Langlebig</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=HyperX+Cloud+III&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 2) ⭐</h3>
                                <span class="text-gray-300 font-bold">~140€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Beyerdynamic DT 990 PRO</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Studio-Qualität! Offene Bauweise für natürlichen Sound. Perfekt für lange Sessions.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Qualität</li>
                                <li>✓ Offene Bauweise</li>
                                <li>✓ 250 Ohm</li>
                                <li>✓ Made in Germany</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Beyerdynamic+DT+990+PRO&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Stream Deck OPTIONAL -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎛️ Stream Deck (Optional)</h3>
                                <span class="text-gray-300 font-bold">~80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Elgato Stream Deck Mini</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Steuerung für Szenen, Sounds, Licht und mehr! Echtes Quality-of-Life Upgrade.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 6 LCD-Tasten</li>
                                <li>✓ OBS Integration</li>
                                <li>✓ Key Light Control</li>
                                <li>✓ Unendliche Möglichkeiten</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Stream+Deck+Mini&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Capture Card Optional -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎬 Capture Card (Optional)</h3>
                                <span class="text-gray-300 font-bold">~60€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">NewGreen HDMI (1080p60)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Nur für Konsolen-Streaming! Siehe Konsolen-Sektion weiter unten.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 1080p @ 60fps</li>
                                <li>✓ USB 3.0</li>
                                <li>✓ Niedrige Latenz</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=HDMI+Capture+Card+1080p+60fps&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg md:text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-white">~570-730€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Semi-Pro Setup mit XLR, optionalem Interface und Key Lights. Die meisten Streamer brauchen nicht mehr!
                        </p>
                    </div>
                </div>

                <!-- 5. Professional Setup -->
                <div v-if="activeTab === 'professional'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                        <h2 class="text-xl md:text-2xl font-bold mb-3">👑 Professional - Top-Tier Setup</h2>
                        <p class="text-gray-300 mb-4">
                            Das ultimative Setup für hauptberufliche Streamer. DSLR-Qualität, professionelles Audio und Premium-Equipment. 
                            Nur wenn Streaming dein Haupteinkommen ist!
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                            <p class="text-gray-300 text-sm">
                                <strong>⚠️ Wichtig:</strong> Dieses Setup ist NUR sinnvoll, wenn Streaming dein Hauptjob ist und du konstante, 
                                hohe Einnahmen hast. Die meisten Streamer brauchen das nicht!
                            </p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Mikrofon Premium -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎤 Mikrofon ⭐</h3>
                                <span class="text-gray-300 font-bold">~400€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Shure SM7B</p>
                            <p class="text-sm text-gray-400 mb-3">
                                THE Podcast & Streaming Mikrofon. Michael Jackson hat damit aufgenommen. Braucht ein starkes Interface!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Broadcast-Qualität</li>
                                <li>✓ Legendärer Sound</li>
                                <li>✓ Nierencharakteristik</li>
                                <li>✓ Pop-Filter integriert</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Shure+SM7B&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Audio Interface Premium -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎛️ Audio Interface ⭐</h3>
                                <span class="text-gray-300 font-bold">~300€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Focusrite Scarlett 2i2 (4th Gen)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Industry-Standard Audio Interface. Genug Power für das SM7B und kristallklare Aufnahmen.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 2 XLR/Instrument Inputs</li>
                                <li>✓ 69dB Gain (perfekt für SM7B)</li>
                                <li>✓ Air Mode (Presence Boost)</li>
                                <li>✓ 24-bit/192kHz</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Focusrite+Scarlett+2i2+4th+Gen&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Licht Premium -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">💡 Beleuchtung ⭐</h3>
                                <span class="text-gray-300 font-bold">~400€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">2x Elgato Key Light</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Die großen Key Lights! 2800 Lumen pro Light - perfekte Ausleuchtung für jedes Setup.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 2800 Lumen pro Light</li>
                                <li>✓ WiFi Control</li>
                                <li>✓ 2900-7000K einstellbar</li>
                                <li>✓ Stream Deck Integration</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Key+Light&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kamera DSLR -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📹 Kamera ⭐</h3>
                                <span class="text-gray-300 font-bold">~800€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Sony ZV-E10</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Speziell für Content Creator! Bokeh-Effekt, Auto-Focus und Clean HDMI Output. DSLR-Qualität.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 24.2 MP APS-C Sensor</li>
                                <li>✓ 4K Video</li>
                                <li>✓ Clean HDMI Output</li>
                                <li>✓ Bokeh Switch Button</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Sony+ZV-E10&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- HDMI Capture für DSLR -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎬 Capture Card (DSLR)</h3>
                                <span class="text-gray-300 font-bold">~150€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Elgato Cam Link 4K</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Wandelt deine DSLR in eine Webcam um. 4K Support und extrem niedrige Latenz.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 4K @ 30fps oder 1080p @ 60fps</li>
                                <li>✓ Ultra-Low Latency</li>
                                <li>✓ Plug & Play</li>
                                <li>✓ Industry Standard</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Cam+Link+4K&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Mikrofonarm bleibt -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🦾 Mikrofonarm</h3>
                                <span class="text-gray-300 font-bold">~50-80€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Neewer Hydraulik-Arm</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Selbst im Pro-Setup perfekt! Der Neewer Arm ist unschlagbar.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Hydraulische Dämpfung</li>
                                <li>✓ Extrem stabil</li>
                                <li>✓ Kabelführung</li>
                            </ul>
                            <a href="https://amzn.to/4pcy0Yz" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Kopfhörer Premium -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 1)</h3>
                                <span class="text-gray-300 font-bold">~140€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Beyerdynamic DT 990 PRO</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Studio-Standard. Offene Bauweise für natürlichen Sound.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Qualität</li>
                                <li>✓ Offene Bauweise</li>
                                <li>✓ 250 Ohm</li>
                                <li>✓ Made in Germany</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Beyerdynamic+DT+990+PRO&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎧 Kopfhörer (Option 2)</h3>
                                <span class="text-gray-300 font-bold">~70€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Audio-Technica ATH-M30x</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Studio-Monitor Kopfhörer. Flacher Sound für Mixing & Monitoring.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ Studio-Monitor</li>
                                <li>✓ Geschlossene Bauweise</li>
                                <li>✓ Flacher Frequenzgang</li>
                                <li>✓ Perfekt für Mixing</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Audio-Technica+ATH-M30x&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Stream Deck Pro -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">🎛️ Stream Deck ⭐</h3>
                                <span class="text-gray-300 font-bold">~150€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Elgato Stream Deck (Classic)</p>
                            <p class="text-sm text-gray-400 mb-3">
                                15 LCD-Tasten für maximale Kontrolle. Unverzichtbar im Pro-Setup!
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ 15 LCD-Tasten</li>
                                <li>✓ Unbegrenzte Ordner</li>
                                <li>✓ OBS, Lighting, Sounds</li>
                                <li>✓ Tausende Plugins</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Elgato+Stream+Deck+Classic&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>

                        <!-- Objektiv für DSLR -->
                        <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-lg md:text-xl font-semibold">📸 Objektiv (DSLR)</h3>
                                <span class="text-gray-300 font-bold">~250€</span>
                            </div>
                            <p class="text-lg font-semibold text-white mb-2">Sigma 16mm f/1.4</p>
                            <p class="text-sm text-gray-400 mb-3">
                                Perfect für Streaming! Weitwinkel für ganzen Raum, f/1.4 für Bokeh-Effekt.
                            </p>
                            <ul class="text-sm text-gray-300 space-y-1 mb-3">
                                <li>✓ f/1.4 (Bokeh!)</li>
                                <li>✓ 16mm Weitwinkel</li>
                                <li>✓ Sehr scharf</li>
                                <li>✓ Low-Light Performance</li>
                            </ul>
                            <a href="https://www.amazon.de/s?k=Sigma+16mm+f1.4+Sony+E-Mount&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                               class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                                Auf Amazon ansehen →
                            </a>
                        </div>
                    </div>

                    <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg md:text-xl font-semibold">Gesamtpreis:</h3>
                            <span class="text-3xl font-bold text-white">~2.500-2.700€</span>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">
                            Professional Setup mit DSLR, SM7B und Premium Equipment. Nur für hauptberufliche Streamer!
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-3 rounded mt-4">
                            <p class="text-gray-300 text-sm">
                                <strong>💡 Gebraucht-Tipp:</strong> Die DSLR und das Objektiv gibt es oft günstig gebraucht! 
                                Schau auf eBay Kleinanzeigen oder Foto-Börsen - spare locker 30-40% vom Neupreis!
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Mein Setup Placeholder -->
                <div v-if="activeTab === 'my-setup'" class="space-y-6">
                    <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg text-center">
                        <p class="text-white mb-3 text-2xl font-semibold">
                            🔧 Mein persönliches Setup
                        </p>
                        <p class="text-gray-300 text-lg mb-4">
                            Hier findest du bald eine Übersicht über mein aktuelles Streaming-Setup...
                        </p>
                        <p class="text-gray-400 text-sm mb-6">
                            💡 Coming Soon: Diese Sektion wird in Kürze mit meiner echten Hardware-Liste befüllt.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Konsolen-Streaming Equipment -->
            <div class="mt-16 pt-12 border-t border-gray-700">
                <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg mb-8">
                    <h2 class="text-3xl font-bold mb-4">🎮 Konsolen-Streaming Equipment</h2>
                    <p class="text-gray-300 mb-2">
                        <strong class="text-gray-200">[Nur für Konsolen-Streaming]</strong> - Du streamst von PlayStation, Xbox oder Switch? 
                        Dann brauchst du eine Capture Card um das Bild auf deinen PC zu übertragen!
                    </p>
                    <p class="text-gray-400 text-sm mt-3">
                        💡 Tipp: PC-Streamer brauchen keine Capture Card! Diese Hardware ist ausschließlich für Konsolen-Streaming gedacht.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <!-- Budget Capture Card -->
                    <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-lg md:text-xl font-semibold">🎬 Budget Capture Card</h3>
                            <span class="text-orange-400 font-bold">~20€</span>
                        </div>
                        <p class="text-lg font-semibold text-white mb-2">NewGreen HDMI Capture Card (1080p)</p>
                        <p class="text-sm text-gray-400 mb-3">
                            Günstige Einstiegs-Capture Card für 1080p @ 30fps. Perfekt zum Testen und für Gelegenheits-Streamer.
                        </p>
                        <ul class="text-sm text-gray-300 space-y-1 mb-3">
                            <li>✓ 1080p @ 30fps</li>
                            <li>✓ USB 2.0</li>
                            <li>✓ Plug & Play</li>
                            <li>✓ HDMI Pass-Through</li>
                        </ul>
                        <a href="https://www.amazon.de/s?k=HDMI+Capture+Card+1080p&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                           class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                            Auf Amazon ansehen →
                        </a>
                    </div>

                    <!-- Premium Capture Card -->
                    <div class="bg-eerie-black p-4 md:p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-lg md:text-xl font-semibold">🎬 Premium Capture Card</h3>
                            <span class="text-orange-400 font-bold">~60€</span>
                        </div>
                        <p class="text-lg font-semibold text-white mb-2">NewGreen HDMI Capture Card (1080p60)</p>
                        <p class="text-sm text-gray-400 mb-3">
                            Bessere Capture Card für 1080p @ 60fps. Flüssigeres Bild und niedrigere Latenz. Ideal für Action-Games!
                        </p>
                        <ul class="text-sm text-gray-300 space-y-1 mb-3">
                            <li>✓ 1080p @ 60fps</li>
                            <li>✓ USB 3.0</li>
                            <li>✓ Niedrige Latenz</li>
                            <li>✓ HDMI Pass-Through</li>
                        </ul>
                        <a href="https://www.amazon.de/s?k=HDMI+Capture+Card+1080p+60fps&tag=blackeye1980f-21" target="_blank" rel="nofollow sponsored"
                           class="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm transition">
                            Auf Amazon ansehen →
                        </a>
                    </div>
                </div>

                <!-- VideoGameCapture Software -->
                <div class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h3 class="text-xl md:text-2xl font-bold mb-3">💻 Empfohlene Software: VideoGameCapture (VGC)</h3>
                    <p class="text-gray-300 mb-4">
                        Eine <strong class="text-gray-200">kostenlose Open-Source Alternative</strong> zur Elgato Game Capture Software! 
                        VGC funktioniert mit fast jeder Capture Card und bietet niedrige Latenz sowie hohe FPS.
                    </p>
                    
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <h4 class="font-semibold text-white mb-2">✨ Vorteile:</h4>
                            <ul class="text-sm text-gray-300 space-y-1">
                                <li>✓ Minimale Latenz</li>
                                <li>✓ Hohe FPS</li>
                                <li>✓ Einfaches Setup</li>
                                <li>✓ Funktioniert mit fast jeder Capture Card</li>
                                <li>✓ Kostenlos & Open Source</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-white mb-2">🎯 Features:</h4>
                            <ul class="text-sm text-gray-300 space-y-1">
                                <li>✓ Live-Preview auf deinem Monitor</li>
                                <li>✓ Direkt in OBS als Game Capture nutzen</li>
                                <li>✓ Auf Discord streamen</li>
                                <li>✓ Regelmäßige Updates</li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded mb-4">
                        <p class="text-gray-300 text-sm">
                            <strong>🔧 Developer-Info:</strong> Diese Software wird von mir geforkt und verbessert werden, 
                            aber aktuell ist sie bereits eine super Einstiegsmöglichkeit für Konsolen-Streaming!
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <a href="https://immernochnoah.itch.io/videogamecapture" target="_blank" rel="noopener noreferrer"
                           class="inline-block px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-semibold transition">
                            → VideoGameCapture herunterladen (itch.io)
                        </a>
                    </div>
                </div>
            </div>

            <!-- Back to home -->
            <div class="mt-12 text-center">
                <NuxtLink to="/" class="inline-block px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-semibold transition">
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
    { name: 'description', content: 'Kompletter Hardware Upgrade-Pfad für Streamer. Von Hobbyist bis Professional Setup. Mikrofone, Kameras, Beleuchtung und mehr.' },
    { name: 'keywords', content: 'Streaming Hardware, Mikrofon Streaming, Webcam, OBSBOT, Stream Setup, Streaming Equipment, Hardware Upgrade' }
  ]
});

const activeTab = ref('hobbyist');

const tabs = [
  { id: 'hobbyist', name: 'Hobbyist', budget: '~50-80€' },
  { id: 'affiliate', name: 'Affiliate', budget: '~320€' },
  { id: 'established', name: 'Etabliert', budget: '~440€' },
  { id: 'semi-pro', name: 'Semi-Pro', budget: '~730€' },
  { id: 'professional', name: 'Professional', budget: '~2.700€' },
  { id: 'my-setup', name: 'Mein Setup', budget: 'Zum Vergleich' },
];
</script>

<style scoped>
.bg-eerie-black {
    background-color: #1a1a1a;
}
</style>
