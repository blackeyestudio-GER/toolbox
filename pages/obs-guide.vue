<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Navigation -->
            <AppNavigation />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">OBS Studio - Der ultimative Einsteigerguide</h1>
            <p class="text-sm md:text-base text-gray-400 mb-6 md:mb-8">Alles was du brauchst, um mit OBS Studio durchzustarten</p>
            
            <div class="space-y-8">
                <!-- Intro -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Was ist OBS Studio?</h2>
                    <p class="text-gray-300 mb-4">
                        OBS Studio (Open Broadcaster Software) ist eine kostenlose, quelloffene Software zum Aufnehmen und Streamen 
                        von Videos. Sie ist die erste Wahl für die meisten Streamer auf Twitch, YouTube und anderen Plattformen. 
                        Mit OBS kannst du professionelle Streams erstellen, ohne einen Cent auszugeben.
                    </p>
                    <p class="text-gray-300 mb-4">
                        In diesem Guide zeige ich dir Schritt für Schritt, wie du OBS einrichtest und deinen ersten Stream startest. 
                        Keine Vorkenntnisse nötig - wir fangen bei Null an!
                    </p>
                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded mt-4">
                        <p class="text-gray-300">
                            <strong>💡 Tipp:</strong> Dieser Guide richtet sich an Anfänger. Wenn du bereits Erfahrung mit OBS hast, 
                            spring direkt zu den fortgeschrittenen Abschnitten.
                        </p>
                    </div>
                </section>

                <!-- Installation -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schritt 1: Installation & Download</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <p class="text-gray-300 mb-4">
                                OBS Studio ist komplett kostenlos und enthält keine Werbung oder versteckte Kosten. 
                                Wähle die Installation die am besten zu dir passt:
                            </p>
                            
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded mb-6">
                                <p class="text-gray-300 text-sm">
                                    <strong>💡 Meine Empfehlung:</strong> Nutze die <strong>Steam-Version</strong>, wenn du Steam bereits installiert hast. 
                                    Du bleibst automatisch auf dem neuesten Stand. <strong>Mache deine Installation dann portabel</strong> 
                                    (siehe Anleitung in den Tabs) - so hast du das Beste aus beiden Welten!
                                </p>
                            </div>

                            <!-- Tab Navigation -->
                            <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
                                <button
                                    v-for="tab in installTabs"
                                    :key="tab.id"
                                    @click="activeInstallTab = tab.id"
                                    :class="[
                                        'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all rounded-t-lg',
                                        activeInstallTab === tab.id 
                                            ? 'bg-eerie-black text-white border-b-2 border-gray-400' 
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    ]"
                                >
                                    {{ tab.name }}
                                </button>
                            </div>

                            <!-- Tab Content -->
                            <div class="space-y-6">
                                <!-- Steam Installation -->
                                <div v-if="activeInstallTab === 'steam'" class="space-y-4">
                                    <div class="bg-gray-700/30 border border-gray-500 p-4 md:p-5 rounded-lg">
                                        <h3 class="text-lg md:text-xl font-semibold mb-3 text-white">🎮 Steam Version (EMPFOHLEN)</h3>
                                        <p class="text-gray-300 mb-4">
                                            Automatische Updates, einfache Installation und trotzdem die Möglichkeit Versionen zu pinnen.
                                        </p>
                                        
                                        <div class="mb-4">
                                            <h4 class="font-semibold mb-2 text-gray-200">✨ Vorteile:</h4>
                                            <ul class="text-sm text-gray-300 list-disc list-inside ml-2 space-y-1">
                                                <li>Automatische Updates - immer aktuell</li>
                                                <li>Einfache Installation mit einem Klick</li>
                                                <li>Version lässt sich bei Bedarf pinnen</li>
                                                <li>Keine manuelle Update-Verwaltung nötig</li>
                                            </ul>
                                        </div>

                                        <div class="bg-gray-800/60 border border-gray-600 p-4 rounded">
                                            <h4 class="font-semibold mb-3 text-gray-200">📋 Installations-Schritte:</h4>
                                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-2">
                                                <li>Öffne Steam</li>
                                                <li>Suche nach "OBS Studio" im Store</li>
                                                <li>Klicke auf "Installieren" (kostenlos)</li>
                                                <li>Warte bis die Installation abgeschlossen ist</li>
                                                <li>Starte OBS über deine Steam-Bibliothek</li>
                                            </ol>
                                        </div>

                                        <div class="bg-gray-800/60 border border-gray-600 p-4 rounded mt-4">
                                            <h4 class="font-semibold mb-2 text-gray-200">🔧 Optional: Version pinnen</h4>
                                            <p class="text-sm text-gray-300 mb-2">
                                                Wenn du bei einer bestimmten Version bleiben willst:
                                            </p>
                                            <ol class="text-sm text-gray-300 space-y-1 list-decimal list-inside ml-2">
                                                <li>Rechtsklick auf OBS Studio in deiner Steam-Bibliothek</li>
                                                <li>Eigenschaften → Updates</li>
                                                <li>Wähle "Nur gewählte Beta-Version"</li>
                                                <li>Wähle die gewünschte Version aus</li>
                                            </ol>
                                        </div>

                                        <div class="bg-gray-700/30 border-l-4 border-blue-500 p-4 rounded mt-4">
                                            <h4 class="font-semibold mb-3 text-blue-400">🎒 OBS Portabel machen (EMPFOHLEN!)</h4>
                                            <p class="text-sm text-gray-300 mb-3">
                                                Mache deine OBS-Installation portabel! Alle Einstellungen, Szenen und Plugins bleiben dann 
                                                im OBS-Ordner statt in AppData. <strong>Der Hauptgrund:</strong> Du kannst einfache Backups erstellen! 
                                                Weiter unten findest du fertige Backup-Scripts zum Download.
                                            </p>
                                            
                                            <div class="bg-gray-800/60 p-3 rounded mb-3">
                                                <p class="text-xs text-gray-300 mb-2"><strong>So geht's:</strong></p>
                                                <ol class="text-xs text-gray-300 space-y-1 list-decimal list-inside ml-2">
                                                    <li>Öffne das OBS-Installationsverzeichnis:
                                                        <ul class="list-disc list-inside ml-4 mt-1 text-xs text-gray-400">
                                                            <li>Steam: Rechtsklick auf OBS → Verwalten → Lokale Dateien durchsuchen</li>
                                                            <li>Oder direkt zu: <code class="bg-gray-900 px-1 rounded">C:\Program Files (x86)\Steam\steamapps\common\OBS Studio</code></li>
                                                        </ul>
                                                    </li>
                                                    <li>Erstelle im OBS-Ordner einen <strong>neuen Ordner</strong> namens <code class="bg-gray-900 px-2 py-0.5 rounded">portable_mode</code></li>
                                                    <li>Starte OBS neu</li>
                                                    <li>Fertig! OBS speichert ab jetzt alles im <code class="bg-gray-900 px-1 rounded">portable_mode</code> Ordner</li>
                                                </ol>
                                            </div>

                                            <div class="bg-gray-700/30 border-l-4 border-green-500 p-3 rounded">
                                                <p class="text-gray-300 text-xs">
                                                    <strong class="text-green-400">✅ So prüfst du ob es funktioniert:</strong> Öffne in OBS 
                                                    <strong>Hilfe → Logdatei → Aktuelles Protokoll ansehen</strong>. 
                                                    In den ersten Zeilen sollte "Portable mode: true" stehen!
                                                </p>
                                            </div>

                                            <p class="text-xs text-gray-400 mt-3">
                                                <strong>💾 Backup-Tipp:</strong> Kopiere einfach den ganzen <code class="bg-gray-900 px-1 rounded">portable_mode</code> 
                                                Ordner = perfektes Backup mit allen Einstellungen!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Manuelle Installation -->
                                <div v-if="activeInstallTab === 'manual'" class="space-y-4">
                                    <div class="bg-gray-700/30 border border-gray-500 p-4 md:p-5 rounded-lg">
                                        <h3 class="text-lg md:text-xl font-semibold mb-3 text-white">💻 Manuelle Installation</h3>
                                        <p class="text-gray-300 mb-4">
                                            Volle Kontrolle über Updates und funktioniert ohne Steam. Perfekt wenn du Updates selbst verwalten willst.
                                        </p>
                                        
                                        <div class="mb-4">
                                            <h4 class="font-semibold mb-2 text-gray-200">✨ Vorteile:</h4>
                                            <ul class="text-sm text-gray-300 list-disc list-inside ml-2 space-y-1">
                                                <li>Funktioniert ohne Steam</li>
                                                <li>Version bleibt stabil bis du manuell updatest</li>
                                                <li>Volle Kontrolle über den Installationsort</li>
                                                <li>Auch für ältere Systeme verfügbar</li>
                                            </ul>
                                        </div>

                                        <div class="bg-gray-800/60 border border-gray-600 p-4 rounded mb-4">
                                            <h4 class="font-semibold mb-3 text-gray-200">📥 Download:</h4>
                                            <p class="text-gray-300 mb-2">
                                                → <a href="https://obsproject.com/de" target="_blank" class="text-blue-400 hover:text-blue-300 underline font-semibold">
                                                    obsproject.com/de
                                                </a>
                                            </p>
                                            <p class="text-sm text-gray-400">
                                                Wähle die Version für dein Betriebssystem (Windows, macOS, Linux)
                                            </p>
                                        </div>

                                        <div class="bg-gray-800/60 border border-gray-600 p-4 rounded">
                                            <h4 class="font-semibold mb-3 text-gray-200">📋 Installations-Schritte:</h4>
                                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-2">
                                                <li>Starte das heruntergeladene Installationsprogramm</li>
                                                <li>Folge den Anweisungen des Installationsassistenten</li>
                                                <li>Wähle den Installationsort (Standard ist meist in Ordnung)</li>
                                                <li>Warte bis die Installation abgeschlossen ist</li>
                                                <li>Starte OBS Studio über das Desktop-Icon oder Startmenü</li>
                                            </ol>
                                        </div>

                                        <div class="bg-gray-700/30 border-l-4 border-blue-500 p-4 rounded mt-4">
                                            <h4 class="font-semibold mb-3 text-blue-400">🎒 OBS Portabel machen (EMPFOHLEN!)</h4>
                                            <p class="text-sm text-gray-300 mb-3">
                                                Mache deine OBS-Installation portabel! Alle Einstellungen, Szenen und Plugins bleiben dann 
                                                im OBS-Ordner statt in AppData. <strong>Der Hauptgrund:</strong> Du kannst einfache Backups erstellen! 
                                                Weiter unten findest du fertige Backup-Scripts zum Download.
                                            </p>
                                            
                                            <div class="bg-gray-800/60 p-3 rounded mb-3">
                                                <p class="text-xs text-gray-300 mb-2"><strong>So geht's:</strong></p>
                                                <ol class="text-xs text-gray-300 space-y-1 list-decimal list-inside ml-2">
                                                    <li>Öffne das OBS-Installationsverzeichnis (Standard: <code class="bg-gray-900 px-1 rounded">C:\Program Files\obs-studio</code>)</li>
                                                    <li>Erstelle im OBS-Ordner einen <strong>neuen Ordner</strong> namens <code class="bg-gray-900 px-2 py-0.5 rounded">portable_mode</code></li>
                                                    <li>Starte OBS neu</li>
                                                    <li>Fertig! OBS speichert ab jetzt alles im <code class="bg-gray-900 px-1 rounded">portable_mode</code> Ordner</li>
                                                </ol>
                                            </div>

                                            <div class="bg-gray-700/30 border-l-4 border-green-500 p-3 rounded">
                                                <p class="text-gray-300 text-xs">
                                                    <strong class="text-green-400">✅ So prüfst du ob es funktioniert:</strong> Öffne in OBS 
                                                    <strong>Hilfe → Logdatei → Aktuelles Protokoll ansehen</strong>. 
                                                    In den ersten Zeilen sollte "Portable mode: true" stehen!
                                                </p>
                                            </div>

                                            <p class="text-xs text-gray-400 mt-3">
                                                <strong>💾 Backup-Tipp:</strong> Kopiere einfach den ganzen <code class="bg-gray-900 px-1 rounded">portable_mode</code> 
                                                Ordner = perfektes Backup mit allen Einstellungen!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-2 text-blue-400">Auto-Konfigurationsassistent</h3>
                            <p class="text-gray-300 mb-3">
                                Beim ersten Start öffnet sich automatisch der Auto-Konfigurationsassistent. Dieser hilft dir dabei, 
                                die optimalen Einstellungen für dein System zu finden:
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Für Streaming:</strong> Wähle "Optimierung für Streaming" wenn du hauptsächlich live streamen willst</li>
                                <li><strong>Für Aufnahmen:</strong> Wähle "Optimierung für Aufnahme" wenn du hauptsächlich Videos aufnehmen willst</li>
                                <li>Folge den Anweisungen und lass OBS einen Bandbreitentest durchführen</li>
                            </ul>
                            <p class="text-gray-300 mt-3">
                                Der Assistent stellt automatisch Auflösung, Bitrate und FPS (Frames per Second) optimal ein.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Grundlegende Einstellungen -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schritt 2: Grundlegende Einstellungen</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-green-400">Stream-Einstellungen</h3>
                            <p class="text-gray-300 mb-3">
                                Gehe zu <strong>Datei → Einstellungen → Stream</strong>
                            </p>
                            <ul class="text-gray-300 space-y-3 ml-4">
                                <li>
                                    <strong>Für Twitch:</strong>
                                    <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Dienst: Twitch auswählen</li>
                                        <li>Server: Automatisch wählen (empfohlen)</li>
                                        <li>Stream-Schlüssel: Aus deinem Twitch-Dashboard kopieren</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Für YouTube:</strong>
                                    <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Dienst: YouTube - RTMPS auswählen</li>
                                        <li>Stream-Schlüssel: Aus YouTube Studio kopieren</li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="bg-gray-700/30 border-l-4 border-yellow-500 p-3 rounded mt-4">
                                <p class="text-gray-300 text-sm">
                                    <strong class="text-yellow-400">⚠️ WICHTIG:</strong> Teile deinen Stream-Schlüssel NIEMALS mit anderen! 
                                    Wer deinen Schlüssel hat, kann in deinem Namen streamen.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-green-400">Ausgabe-Einstellungen</h3>
                            <p class="text-gray-300 mb-3">
                                Die Ausgabe-Einstellungen sind das Herzstück deines Streams. Wenn du deine Internet-Verbindung genau kennst, 
                                kannst du direkt die Werte einstellen. Wenn du dir unsicher bist, nutze den Calculator unten!
                            </p>
                            <p class="text-gray-300 mb-4">
                                Gehe zu <strong>Einstellungen → Ausgabe</strong>
                            </p>

                            <!-- Bitrate Calculator -->
                            <div class="bg-gray-800/60 border border-gray-600 p-4 md:p-5 rounded-lg mb-6">
                                <h4 class="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                    🧮 Bitrate Calculator
                                    <span class="text-xs text-gray-400 font-normal">(Optional, aber empfohlen!)</span>
                                </h4>
                                
                                <div class="space-y-4">
                                    <!-- Speedtest Links -->
                                    <div class="bg-gray-700/30 border border-gray-500 p-3 rounded">
                                        <p class="text-sm text-gray-300 mb-2">
                                            <strong>📊 Schritt 1:</strong> Mache einen Speedtest (Frankfurt-Server für Twitch optimal):
                                        </p>
                                        <div class="flex flex-wrap gap-2">
                                            <a href="https://www.speedtest.net/" target="_blank" 
                                               class="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                                Speedtest.net
                                            </a>
                                            <a href="https://fast.com/" target="_blank" 
                                               class="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                                Fast.com
                                            </a>
                                            <a href="https://www.wieistmeineip.de/speedtest/" target="_blank" 
                                               class="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                                WieIstMeineIP (DE)
                                            </a>
                                        </div>
                                        <p class="text-xs text-gray-400 mt-2">
                                            💡 Tipp: Wähle bei Speedtest.net einen Server in Frankfurt für beste Twitch-Näherung
                                        </p>
                                    </div>

                                    <!-- Input -->
                                    <div>
                                        <label class="block text-sm text-gray-300 mb-2">
                                            <strong>📤 Schritt 2:</strong> Deine Upload-Geschwindigkeit:
                                        </label>
                                        <div class="flex gap-3 items-center">
                                            <input 
                                                v-model.number="uploadSpeed" 
                                                type="number" 
                                                placeholder="z.B. 50"
                                                class="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white w-32"
                                                @input="calculateBitrate"
                                            />
                                            <span class="text-gray-300">Mbit/s</span>
                                        </div>
                                    </div>

                                    <!-- Results -->
                                    <div v-if="bitrateResult" class="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded space-y-3">
                                        <h5 class="font-semibold text-green-400">✅ Empfohlene Einstellungen:</h5>
                                        
                                        <div class="grid md:grid-cols-2 gap-3 text-sm">
                                            <div class="bg-gray-800/60 p-3 rounded">
                                                <p class="text-gray-400 text-xs mb-1">Bitrate:</p>
                                                <p class="text-white font-bold text-lg">{{ bitrateResult.bitrate }} Kbps</p>
                                            </div>
                                            <div class="bg-gray-800/60 p-3 rounded">
                                                <p class="text-gray-400 text-xs mb-1">Auflösung:</p>
                                                <p class="text-white font-bold text-lg">
                                                    {{ bitrateResult.resolution }}
                                                    <button 
                                                        v-if="bitrateResult.showResolutionInfo"
                                                        @click="showResolutionModal = true"
                                                        class="ml-2 text-blue-400 hover:text-blue-300 text-xs underline"
                                                    >
                                                        Warum?
                                                    </button>
                                                </p>
                                            </div>
                                            <div class="bg-gray-800/60 p-3 rounded">
                                                <p class="text-gray-400 text-xs mb-1">FPS:</p>
                                                <p class="text-white font-bold text-lg">{{ bitrateResult.fps }}</p>
                                            </div>
                                            <div class="bg-gray-800/60 p-3 rounded">
                                                <p class="text-gray-400 text-xs mb-1">Encoder:</p>
                                                <p class="text-white font-bold text-lg">{{ bitrateResult.encoder }}</p>
                                            </div>
                                        </div>

                                        <p class="text-gray-300 text-xs">
                                            {{ bitrateResult.note }}
                                        </p>
                                    </div>

                                    <!-- Haushaltsbandbreite Warnung -->
                                    <div class="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded">
                                        <h5 class="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                                            ⚠️ Wichtig: Andere im Haushalt mitbedenken!
                                        </h5>
                                        <p class="text-gray-300 text-sm mb-3">
                                            Deine nervigen Geschwister die TikTok scrollen, dein Partner der Netflix schaut, oder Mitbewohner 
                                            die zocken - <strong>alle nutzen deine Bandbreite!</strong> Hier ist der 30% Puffer besonders wichtig.
                                        </p>

                                        <div class="bg-gray-800/60 border border-gray-600 p-3 rounded mb-3">
                                            <p class="text-gray-300 text-xs mb-2">
                                                <strong>📊 Typische Bandbreiten-Nutzung im Haushalt:</strong>
                                            </p>
                                            <div class="grid md:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-300">
                                                <div>• <strong>Netflix (HD):</strong> 5 Mbit/s ⬇️</div>
                                                <div>• <strong>Netflix (4K):</strong> 25 Mbit/s ⬇️</div>
                                                <div>• <strong>YouTube (1080p):</strong> 5 Mbit/s ⬇️</div>
                                                <div>• <strong>YouTube (4K):</strong> 20 Mbit/s ⬇️</div>
                                                <div>• <strong>TikTok/Instagram:</strong> 2-3 Mbit/s ⬇️</div>
                                                <div>• <strong>Twitch (1080p):</strong> 6 Mbit/s ⬇️</div>
                                                <div>• <strong>Discord (Video):</strong> 2-4 Mbit/s ⬇️⬆️</div>
                                                <div>• <strong>Zoom/Teams (HD):</strong> 2-3 Mbit/s ⬇️⬆️</div>
                                                <div>• <strong>Online Gaming:</strong> 1-3 Mbit/s ⬇️⬆️</div>
                                                <div>• <strong>Cloud-Backups:</strong> variabel ⬆️</div>
                                                <div>• <strong>Smart Home:</strong> 0.5-1 Mbit/s ⬇️⬆️</div>
                                                <div>• <strong>Software-Updates:</strong> variabel ⬇️</div>
                                            </div>
                                            <p class="text-xs text-gray-400 mt-2 italic">
                                                ⬇️ = Download | ⬆️ = Upload
                                            </p>
                                        </div>

                                        <div class="bg-gray-700/30 border-l-4 border-blue-500 p-3 rounded">
                                            <p class="text-gray-300 text-xs">
                                                <strong class="text-blue-400">💡 Warum der 70%-Puffer?</strong> Die meisten Aktivitäten sind zwar hauptsächlich Download, 
                                                <strong>aber es gibt immer Kommunikation zurück zum Server</strong> (Upload). 
                                                Discord sendet dein Mikrofon, Gaming sendet deine Eingaben, und Netflix/YouTube bestätigen empfangene Pakete. 
                                                Diese Upload-Kommunikation kann deine Stream-Qualität einschränken, selbst wenn die anderen "nur schauen". 
                                                Deshalb nutzen wir vorsorglich nur 70% deiner Upload-Rate, damit <strong>30% Puffer für alle anderen da sind</strong>!
                                            </p>
                                        </div>

                                        <p class="text-gray-300 text-xs mt-3">
                                            <strong>🎯 Streaming-Zeit planen:</strong> Streame am besten wenn weniger Leute zu Hause sind, 
                                            oder sprich mit deinem Haushalt ab, dass während deines Streams keine 4K-Videos geschaut werden. 
                                            Das macht einen riesigen Unterschied!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Manual Settings -->
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <p class="text-gray-300 mb-3"><strong>📋 Standard-Empfehlungen (ohne Calculator):</strong></p>
                                <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4 text-sm">
                                    <li><strong>Encoder:</strong> x264 (Software) oder NVENC H.264 (Nvidia GPU)</li>
                                    <li><strong>Bitrate:</strong> 3000-6000 Kbps (abhängig von Upload-Geschwindigkeit)</li>
                                    <li><strong>Keyframe-Intervall:</strong> 2 Sekunden</li>
                                    <li><strong>Preset:</strong> "veryfast" für x264, "Quality" für NVENC</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Resolution Info Modal -->
                        <div v-if="showResolutionModal" 
                             @click="showResolutionModal = false"
                             class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                            <div @click.stop class="bg-gray-800 border border-gray-600 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div class="flex justify-between items-start mb-4">
                                    <h3 class="text-xl font-bold text-white">🎯 Warum 936p statt 1080p bei 6000 Kbps?</h3>
                                    <button @click="showResolutionModal = false" 
                                            class="text-gray-400 hover:text-white text-2xl leading-none">
                                        ×
                                    </button>
                                </div>
                                
                                <div class="space-y-4 text-gray-300 text-sm">
                                    <p>
                                        Bei Twitch (und anderen Streaming-Plattformen) gibt es ein <strong>Bitrate-Limit von ca. 6000-8000 Kbps</strong>. 
                                        Das klingt nach viel, aber für 1080p bei 60 FPS ist das eigentlich zu wenig!
                                    </p>

                                    <div class="bg-gray-800/50 border-l-4 border-red-500 p-4 rounded">
                                        <h4 class="font-semibold text-red-400 mb-2">❌ Problem: 1080p @ 6000 Kbps</h4>
                                        <ul class="space-y-1 list-disc list-inside ml-2 text-gray-300">
                                            <li>Zu wenig Bitrate für die hohe Auflösung</li>
                                            <li>Artefakte und Verpixelung bei schnellen Bewegungen</li>
                                            <li>Besonders schlecht bei Action-Spielen</li>
                                            <li>Zuschauer sehen ein matschiges Bild</li>
                                        </ul>
                                    </div>

                                    <div class="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded">
                                        <h4 class="font-semibold text-green-400 mb-2">✅ Lösung: 936p @ 6000 Kbps</h4>
                                        <ul class="space-y-1 list-disc list-inside ml-2 text-gray-300">
                                            <li>Perfektes Verhältnis zwischen Auflösung und Bitrate</li>
                                            <li>Scharfes, klares Bild ohne Artefakte</li>
                                            <li>Auch bei schnellen Spielen gut</li>
                                            <li>Kaum Unterschied zu 1080p für Zuschauer</li>
                                        </ul>
                                    </div>

                                    <div class="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded">
                                        <h4 class="font-semibold text-blue-400 mb-2">💡 Technischer Hintergrund:</h4>
                                        <p class="mb-2 text-gray-300">
                                            Die Bitrate bestimmt, wie viele Daten pro Sekunde übertragen werden. Je höher die Auflösung, 
                                            desto mehr Bitrate wird benötigt um ein scharfes Bild zu liefern.
                                        </p>
                                        <p class="mb-2 text-gray-300">
                                            <strong>936p (1664x936)</strong> hat ca. <strong>20% weniger Pixel</strong> als 1080p (1920x1080). 
                                            Das bedeutet: Die gleiche Bitrate kann mehr Details pro Pixel speichern = schärferes Bild!
                                        </p>
                                        <p class="text-xs text-gray-400 mt-2">
                                            Erst ab 8000 Kbps macht 1080p wirklich Sinn - aber das ist das Twitch-Maximum und lässt keinen Puffer!
                                        </p>
                                    </div>

                                    <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                        <h4 class="font-semibold text-gray-200 mb-2">📊 Faustregeln:</h4>
                                        <ul class="space-y-1 text-xs">
                                            <li>• <strong>3000 Kbps:</strong> 720p @ 30fps oder 720p @ 60fps</li>
                                            <li>• <strong>4500 Kbps:</strong> 900p @ 60fps</li>
                                            <li>• <strong>6000 Kbps:</strong> 936p @ 60fps (Sweet Spot! ⭐)</li>
                                            <li>• <strong>8000 Kbps:</strong> 1080p @ 60fps (Twitch Maximum)</li>
                                        </ul>
                                    </div>
                                </div>

                                <button @click="showResolutionModal = false" 
                                        class="mt-6 w-full px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded transition">
                                    Verstanden!
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-green-400">Video-Einstellungen</h3>
                            <p class="text-gray-300 mb-3">
                                Gehe zu <strong>Einstellungen → Video</strong>
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Basis-Auflösung:</strong> Deine Monitor-Auflösung (z.B. 1920x1080)</li>
                                <li><strong>Ausgabe-Auflösung:</strong> 1920x1080 (Full HD) oder 1280x720 (HD) bei schwächeren PCs</li>
                                <li><strong>FPS:</strong> 60 FPS für Gaming, 30 FPS für Talk-Streams</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-green-400">Audio-Einstellungen</h3>
                            <p class="text-gray-300 mb-3">
                                Gehe zu <strong>Einstellungen → Audio</strong>
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Samplerate:</strong> 48 kHz (Standard)</li>
                                <li><strong>Desktop-Audio:</strong> Deine Lautsprecher/Headset wählen</li>
                                <li><strong>Mikrofon/Aux:</strong> Dein Mikrofon auswählen</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Szenen und Quellen -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schritt 3: Szenen und Quellen erstellen</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-purple-400">Was sind Szenen?</h3>
                            <p class="text-gray-300 mb-3">
                                Szenen sind verschiedene Layouts für deinen Stream. Du kannst zwischen ihnen wechseln, zum Beispiel:
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Startbildschirm:</strong> Wird angezeigt bevor der Stream beginnt</li>
                                <li><strong>Gaming-Szene:</strong> Zeigt dein Spiel mit Webcam</li>
                                <li><strong>Just Chatting:</strong> Webcam im Vollbild</li>
                                <li><strong>BRB-Szene:</strong> "Bin gleich zurück" Screen</li>
                                <li><strong>Endbildschirm:</strong> Wird am Ende des Streams gezeigt</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-purple-400">Szene erstellen</h3>
                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-4">
                                <li>Klicke auf das "+" Symbol im "Szenen" Bereich unten links</li>
                                <li>Gib deiner Szene einen Namen (z.B. "Gaming")</li>
                                <li>Klicke auf "OK"</li>
                            </ol>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-purple-400">Quellen hinzufügen</h3>
                            <p class="text-gray-300 mb-3">
                                Quellen sind die Inhalte, die in deinen Szenen angezeigt werden. Die wichtigsten Quellen für Spiele und Programme:
                            </p>
                            
                            <div class="bg-gray-700/30 border-l-4 border-yellow-500 p-4 rounded mb-4">
                                <p class="text-gray-300 text-sm">
                                    <strong class="text-yellow-400">⚡ Performance-Reihenfolge:</strong> Versuche immer in dieser Reihenfolge: 
                                    <strong>Game Capture → Window Capture → Display Capture</strong>. 
                                    Je weiter unten, desto mehr Performance kostet die Aufnahme!
                                </p>
                            </div>
                            
                            <div class="space-y-4 mt-4">
                                <div class="bg-gray-800/50 border border-gray-600 p-4 rounded">
                                    <h4 class="font-semibold mb-2 text-green-400 border-b border-green-500 pb-2">🎮 1. Game Capture (Spielaufnahme) - BESTE Performance</h4>
                                    <p class="text-sm text-gray-300 mb-2">
                                        <strong>Nutze dies für:</strong> Spiele (beste Performance!)
                                    </p>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4 space-y-1">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Spielaufnahme"</li>
                                        <li>Modus: "Bestimmtes Fenster aufnehmen"</li>
                                        <li>Wähle dein Spiel aus der Liste</li>
                                    </ol>
                                    <div class="bg-gray-700/30 border-l-4 border-blue-500 p-3 rounded mt-3">
                                        <p class="text-gray-300 text-xs">
                                            <strong class="text-blue-400">💡 Pro-Tipp:</strong> Du musst die Quelle für jedes Spiel ändern. Das ist zwar nervig, 
                                            aber du kannst einfach mehrere Game Capture Quellen erstellen wenn du dieselben Spiele 
                                            wiederholt spielst (z.B. "Game Capture - Valorant", "Game Capture - League of Legends").
                                        </p>
                                    </div>
                                </div>

                                <div class="bg-gray-800/50 border border-gray-600 p-4 rounded">
                                    <h4 class="font-semibold mb-2">🪟 2. Window Capture (Fensteraufnahme) - Mittlere Performance</h4>
                                    <p class="text-sm text-gray-300 mb-2">
                                        <strong>Nutze dies für:</strong> Wenn Game Capture nicht funktioniert, oder für Programme/Browser
                                    </p>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4 space-y-1">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Fensteraufnahme"</li>
                                        <li>Wähle das Fenster aus der Liste</li>
                                        <li>Fenster wird am Namen erkannt</li>
                                    </ol>
                                    <div class="bg-gray-700/30 border border-gray-500 p-3 rounded mt-3">
                                        <p class="text-gray-300 text-xs">
                                            <strong>ℹ️ Hinweis:</strong> Die Quelle muss angepasst werden wenn sich der Fenstertitel ändert. 
                                            Window Capture vergleicht den Namen des Fensters - wenn das Spiel/Programm einen anderen Titel zeigt, 
                                            musst du die Quelle neu auswählen.
                                        </p>
                                    </div>
                                </div>

                                <div class="bg-gray-800/50 border border-gray-600 p-4 rounded">
                                    <h4 class="font-semibold mb-2 text-red-400 border-b border-red-500 pb-2">🖥️ 3. Display Capture (Bildschirmaufnahme) - SCHLECHTESTE Performance</h4>
                                    <p class="text-sm text-gray-300 mb-2">
                                        <strong>Nutze dies nur als letzte Option:</strong> Wenn Game & Window Capture nicht funktionieren
                                    </p>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4 space-y-1">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Bildschirmaufnahme"</li>
                                        <li>Wähle den Monitor aus, den du aufnehmen willst</li>
                                    </ol>
                                    <div class="bg-gray-700/30 border-l-4 border-yellow-500 p-3 rounded mt-3">
                                        <p class="text-gray-300 text-xs">
                                            <strong class="text-yellow-400">⚠️ Performance-Warnung:</strong> Display Capture greift das Bild NACH dem kompletten Rendering ab. 
                                            Das bedeutet: Dein PC muss alles rendern UND dann nochmal für OBS aufnehmen. 
                                            Dies kostet am meisten Performance! Nutze es nur wenn Game/Window Capture wirklich nicht funktionieren.
                                        </p>
                                    </div>
                                </div>

                                <div class="bg-gray-800/50 p-4 rounded">
                                    <h4 class="font-semibold mb-2">📹 Videoaufnahmegerät (Webcam)</h4>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Videoaufnahmegerät"</li>
                                        <li>Wähle deine Webcam aus der Liste</li>
                                        <li>Passe Größe und Position mit der Maus an</li>
                                    </ol>
                                </div>

                                <div class="bg-gray-800/50 p-4 rounded">
                                    <h4 class="font-semibold mb-2">📝 Text (Titel, Labels, etc.)</h4>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Text (GDI+)"</li>
                                        <li>Gib deinen Text ein</li>
                                        <li>Wähle Schriftart, Größe und Farbe</li>
                                    </ol>
                                </div>

                                <div class="bg-gray-800/50 p-4 rounded">
                                    <h4 class="font-semibold mb-2">🖼️ Bild (Overlays, Logos, etc.)</h4>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Bild"</li>
                                        <li>Wähle deine Bilddatei (PNG mit Transparenz empfohlen)</li>
                                        <li>Passe Position und Größe an</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <p class="text-gray-300">
                                <strong>✅ Pro-Tipp:</strong> Die Reihenfolge der Quellen ist wichtig! Quellen weiter oben 
                                in der Liste werden über denen darunter angezeigt. Ziehe Quellen per Drag & Drop um sie neu zu ordnen.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Audio Setup -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schritt 4: Audio richtig einstellen</h2>
                    
                    <div class="space-y-4">
                        <p class="text-gray-300">
                            Audio ist einer der wichtigsten Aspekte deines Streams. Schlechtes Audio vertreibt Zuschauer schneller 
                            als schlechte Video-Qualität!
                        </p>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-orange-400">Audio-Mixer verstehen</h3>
                            <p class="text-gray-300 mb-3">
                                Der Audio-Mixer befindet sich standardmäßig rechts unten in OBS. Hier siehst du alle Audio-Quellen:
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Desktop-Audio:</strong> Alle System-Sounds (Spiele, Musik, etc.)</li>
                                <li><strong>Mikrofon:</strong> Deine Stimme</li>
                                <li>Weitere Quellen die du hinzugefügt hast</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-orange-400">Pegel richtig einstellen</h3>
                            <p class="text-gray-300 mb-3">Die Balken zeigen die Lautstärke an. Achte darauf:</p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Grün:</strong> Guter Bereich - hier sollten deine Audio-Quellen sein</li>
                                <li><strong>Gelb:</strong> Wird langsam zu laut - Vorsicht!</li>
                                <li><strong>Rot:</strong> Zu laut! Audio wird verzerrt (Clipping)</li>
                            </ul>
                            <p class="text-gray-300 mt-3">
                                <strong>Faustregel:</strong> Deine Stimme sollte im oberen grünen Bereich liegen (ca. -12 bis -6 dB), 
                                Spiele-Audio etwas leiser (ca. -18 bis -12 dB).
                            </p>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-orange-400">Filter hinzufügen (Fortgeschritten)</h3>
                            <p class="text-gray-300 mb-3">
                                Rechtsklick auf dein Mikrofon im Mixer → Filter. Empfohlene Filter:
                            </p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Rauschunterdrückung:</strong> Entfernt Hintergrundgeräusche</li>
                                <li><strong>Kompressor:</strong> Gleicht Lautstärke-Unterschiede aus</li>
                                <li><strong>Noise Gate:</strong> Blockiert Audio unter einem bestimmten Schwellenwert</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Los gehts -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schritt 5: Deinen ersten Stream starten!</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-red-400">Vor dem Start - Checkliste:</h3>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li>✅ Stream-Schlüssel ist eingetragen</li>
                                <li>✅ Alle Szenen sind vorbereitet</li>
                                <li>✅ Mikrofon funktioniert und ist nicht zu laut/leise</li>
                                <li>✅ Spiel/Desktop-Aufnahme wird korrekt angezeigt</li>
                                <li>✅ Webcam ist positioniert und scharf</li>
                                <li>✅ Internet-Verbindung ist stabil</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-red-400">Stream starten:</h3>
                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-4">
                                <li>Wähle deine Startszene aus</li>
                                <li>Klicke auf <strong>"Streaming starten"</strong> (rechts unten)</li>
                                <li>OBS zeigt jetzt "LIVE" an</li>
                                <li>Gehe zu Twitch/YouTube und prüfe ob der Stream läuft</li>
                                <li>Warte ca. 10-20 Sekunden - so lange ist die Verzögerung normal</li>
                            </ol>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-red-400">Während des Streams:</h3>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li>Achte auf die Indikatoren unten rechts in OBS (grün = alles gut)</li>
                                <li>Der "CPU" Wert sollte unter 80% bleiben</li>
                                <li>Bei rotem/gelbem Indikator: Bitrate reduzieren oder Auflösung senken</li>
                                <li>Behalte deinen Chat im Auge</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg md:text-xl font-semibold mb-3 text-red-400">Stream beenden:</h3>
                            <p class="text-gray-300 mb-2">
                                Klicke einfach auf <strong>"Streaming stoppen"</strong>. Fertig! 🎉
                            </p>
                        </div>

                        <div class="bg-gray-800/40 border border-gray-600 p-6 rounded mt-6">
                            <h4 class="text-xl font-bold mb-3">🎊 Glückwunsch!</h4>
                            <p class="text-gray-200">
                                Du hast jetzt alle Grundlagen um mit OBS zu streamen! Übung macht den Meister - 
                                je öfter du streamst, desto besser wirst du. Experimentiere mit verschiedenen Einstellungen 
                                und finde heraus, was für dich am besten funktioniert.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Tipps und Tricks -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Bonus: Wichtige Tipps für bessere Streams</h2>
                    
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-800/50 p-4 rounded">
                            <h4 class="font-semibold mb-2">⚡ Performance-Optimierung</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                <li>Schließe unnötige Programme</li>
                                <li>Nutze immer: Game Capture → Window Capture → Display Capture (in dieser Reihenfolge!)</li>
                                <li>Display Capture nur als letzte Option (kostet am meisten Performance)</li>
                                <li>Verwende NVENC Encoder wenn du eine Nvidia-GPU hast</li>
                                <li>Reduziere FPS oder Auflösung bei Problemen</li>
                            </ul>
                        </div>

                        <div class="bg-gray-800/50 p-4 rounded">
                            <h4 class="font-semibold mb-2">🎨 Visuelles</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                <li>Nutze kostenlose Overlays von nerdordie.com</li>
                                <li>Achte auf gute Beleuchtung bei der Webcam</li>
                                <li>Halte deine Szenen übersichtlich</li>
                                <li>Verwende maximal 2-3 Schriftarten</li>
                            </ul>
                        </div>

                        <div class="bg-gray-800/50 p-4 rounded">
                            <h4 class="font-semibold mb-2">🎤 Audio-Qualität</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                <li>Investiere in ein gutes Mikrofon</li>
                                <li>Vermeide Echo - nutze Kopfhörer</li>
                                <li>Teste dein Audio vor dem Stream</li>
                                <li>Nutze Push-to-Talk wenn du viel Hintergrund-Lärm hast</li>
                            </ul>
                        </div>

                        <div class="bg-gray-800/50 p-4 rounded">
                            <h4 class="font-semibold mb-2">📊 Monitoring</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                <li>Nutze einen zweiten Monitor wenn möglich</li>
                                <li>Behalte OBS-Statistiken im Blick</li>
                                <li>Checke regelmäßig deinen Stream auf dem Handy</li>
                                <li>Bitte Freunde um Feedback</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Troubleshooting -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Häufige Probleme & Lösungen</h2>
                    
                    <div class="space-y-4">
                        <div class="border-l-4 border-red-500 pl-4">
                            <h4 class="font-semibold mb-2">❌ Stream laggt / niedrige FPS</h4>
                            <p class="text-sm text-gray-300">
                                <strong>Lösung:</strong> Reduziere die Ausgabe-Auflösung auf 720p, senke die FPS auf 30, 
                                wechsle zu NVENC Encoder, schließe andere Programme, oder reduziere die Bitrate.
                            </p>
                        </div>

                        <div class="border-l-4 border-red-500 pl-4">
                            <h4 class="font-semibold mb-2">❌ Schwarzer Bildschirm bei Game Capture</h4>
                            <p class="text-sm text-gray-300">
                                <strong>Lösung:</strong> Starte OBS als Administrator, stelle sicher dass das Spiel 
                                im Vollbild-Modus läuft, oder nutze "Display Capture" stattdessen.
                            </p>
                        </div>

                        <div class="border-l-4 border-red-500 pl-4">
                            <h4 class="font-semibold mb-2">❌ Mikrofon ist zu leise</h4>
                            <p class="text-sm text-gray-300">
                                <strong>Lösung:</strong> Erhöhe die Verstärkung im Audio-Mixer (Zahnrad-Symbol → 
                                Erweiterte Audio-Eigenschaften), oder füge einen Kompressor-Filter hinzu.
                            </p>
                        </div>

                        <div class="border-l-4 border-red-500 pl-4">
                            <h4 class="font-semibold mb-2">❌ Stream bricht ab / Verbindungsprobleme</h4>
                            <p class="text-sm text-gray-300">
                                <strong>Lösung:</strong> Reduziere die Bitrate, wechsle zu einem anderen Server in den 
                                Stream-Einstellungen, prüfe deine Internet-Verbindung, oder nutze einen LAN-Kabel statt WLAN.
                            </p>
                        </div>

                        <div class="border-l-4 border-red-500 pl-4">
                            <h4 class="font-semibold mb-2">❌ Kein Ton vom Spiel / Desktop</h4>
                            <p class="text-sm text-gray-300">
                                <strong>Lösung:</strong> Überprüfe ob "Desktop-Audio" in den Audio-Einstellungen 
                                richtig eingestellt ist, prüfe ob die Quelle stummgeschaltet ist (Lautsprecher-Symbol im Mixer).
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Plattform-Richtlinien -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg border border-gray-700">
                    <h2 class="text-2xl font-semibold mb-4 text-red-400">⚠️ WICHTIG: Plattform-Richtlinien & Regeln</h2>
                    <p class="text-gray-200 mb-6">
                        Bevor du mit dem Streamen beginnst, ist es <strong>absolut essentiell</strong>, dass du die Regeln und 
                        Richtlinien der Streaming-Plattformen kennst und einhältst. Verstöße können zu Verwarnungen, Sperren 
                        oder permanenten Bans führen - und damit das Ende deiner Streaming-Karriere bedeuten!
                    </p>

                    <div class="space-y-6">
                        <!-- Twitch -->
                        <div class="bg-gray-800/50 border border-gray-600 p-4 md:p-5 rounded-lg">
                            <h3 class="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                                <span class="text-purple-400">📺 Twitch</span>
                            </h3>
                            
                            <div class="space-y-3 text-gray-300 text-sm">
                                <div>
                                    <p class="font-semibold mb-2">Wichtige Links:</p>
                                    <ul class="space-y-2 ml-4">
                                        <li>
                                            → <a href="https://www.twitch.tv/" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Twitch.tv
                                            </a> - Hauptseite
                                        </li>
                                        <li>
                                            → <a href="https://dashboard.twitch.tv/settings/stream" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Creator Dashboard
                                            </a> - Stream-Schlüssel & Einstellungen
                                        </li>
                                        <li>
                                            → <a href="https://www.twitch.tv/p/de-de/legal/terms-of-service/" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Nutzungsbedingungen (TOS)
                                            </a> - <strong>Pflichtlektüre!</strong>
                                        </li>
                                        <li>
                                            → <a href="https://safety.twitch.tv/s/article/Community-Guidelines?language=de" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Community-Richtlinien
                                            </a> - <strong>Sehr wichtig!</strong>
                                        </li>
                                        <li>
                                            → <a href="https://www.twitch.tv/p/de-de/legal/community-guidelines/music/" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Musik-Richtlinien
                                            </a> - DMCA & Copyright
                                        </li>
                                        <li>
                                            → <a href="https://www.twitch.tv/directory/all/tags" target="_blank" class="text-purple-400 hover:text-purple-300 underline">
                                                Verbotene & Eingeschränkte Spiele
                                            </a> - Spiele mit "AO" Rating sind verboten
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="bg-gray-700/30 border-l-4 border-red-500 p-3 rounded">
                                    <p class="text-red-400 font-semibold mb-2">🚨 Häufige Verstöße auf Twitch:</p>
                                    <ul class="space-y-1 list-disc list-inside text-gray-300">
                                        <li>Hassrede, Diskriminierung oder Belästigung</li>
                                        <li>Urheberrechtlich geschützte Musik (DMCA)</li>
                                        <li>Streamen von "Adults Only" (AO) bewerteten Spielen</li>
                                        <li>Sexuell explizite Inhalte oder Nacktheit</li>
                                        <li>Gewaltandrohungen oder illegale Aktivitäten</li>
                                        <li>Stream-Sniping oder Cheating in Spielen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- YouTube -->
                        <div class="bg-gray-800/50 border border-gray-600 p-4 md:p-5 rounded-lg">
                            <h3 class="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                                <span class="text-red-400">▶️ YouTube</span>
                            </h3>
                            
                            <div class="space-y-3 text-gray-300 text-sm">
                                <div>
                                    <p class="font-semibold mb-2">Wichtige Links:</p>
                                    <ul class="space-y-2 ml-4">
                                        <li>
                                            → <a href="https://www.youtube.com/" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                YouTube.com
                                            </a> - Hauptseite
                                        </li>
                                        <li>
                                            → <a href="https://studio.youtube.com/" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                YouTube Studio
                                            </a> - Stream-Schlüssel & Verwaltung
                                        </li>
                                        <li>
                                            → <a href="https://www.youtube.com/t/terms" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                Nutzungsbedingungen (TOS)
                                            </a> - <strong>Pflichtlektüre!</strong>
                                        </li>
                                        <li>
                                            → <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                Community-Richtlinien
                                            </a> - <strong>Sehr wichtig!</strong>
                                        </li>
                                        <li>
                                            → <a href="https://support.google.com/youtube/answer/2797370" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                Urheberrecht & Content ID
                                            </a> - Copyright-Regeln
                                        </li>
                                        <li>
                                            → <a href="https://support.google.com/youtube/answer/9288567" target="_blank" class="text-red-400 hover:text-red-300 underline">
                                                Richtlinien für Live-Streams
                                            </a> - Spezielle Stream-Regeln
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="bg-gray-700/30 border-l-4 border-red-500 p-3 rounded">
                                    <p class="text-red-400 font-semibold mb-2">🚨 Häufige Verstöße auf YouTube:</p>
                                    <ul class="space-y-1 list-disc list-inside text-gray-300">
                                        <li>Urheberrechtsverletzungen (Musik, Videos, Bilder)</li>
                                        <li>Hassrede oder Belästigung</li>
                                        <li>Gewaltdarstellung oder schockierende Inhalte</li>
                                        <li>Sexuell explizite Inhalte</li>
                                        <li>Schädliche oder gefährliche Inhalte</li>
                                        <li>Fehlinformationen (besonders zu Gesundheitsthemen)</li>
                                        <li>Spam, Betrug oder irreführende Metadaten</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-gray-700/30 border-l-4 border-yellow-500 p-3 rounded">
                                    <p class="text-gray-300 text-xs">
                                        <strong class="text-yellow-400">⚠️ YouTube Strike-System:</strong> Bei Verstößen erhältst du "Strikes" (Verwarnungen). 
                                        3 Strikes innerhalb von 90 Tagen = permanenter Kanalverlust!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Kick -->
                        <div class="bg-gray-800/50 border border-gray-600 p-4 md:p-5 rounded-lg">
                            <h3 class="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                                <span class="text-green-400">🎯 Kick</span>
                            </h3>
                            
                            <div class="space-y-3 text-gray-300 text-sm">
                                <div>
                                    <p class="font-semibold mb-2">Wichtige Links:</p>
                                    <ul class="space-y-2 ml-4">
                                        <li>
                                            → <a href="https://kick.com/" target="_blank" class="text-green-400 hover:text-green-300 underline">
                                                Kick.com
                                            </a> - Hauptseite
                                        </li>
                                        <li>
                                            → <a href="https://kick.com/dashboard/settings/stream" target="_blank" class="text-green-400 hover:text-green-300 underline">
                                                Creator Dashboard
                                            </a> - Stream-Einstellungen
                                        </li>
                                        <li>
                                            → <a href="https://kick.com/terms" target="_blank" class="text-green-400 hover:text-green-300 underline">
                                                Nutzungsbedingungen (TOS)
                                            </a>
                                        </li>
                                        <li>
                                            → <a href="https://kick.com/community-guidelines" target="_blank" class="text-green-400 hover:text-green-300 underline">
                                                Community-Richtlinien
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Allgemeine Tipps -->
                        <div class="bg-gray-800/50 border border-gray-600 p-4 md:p-5 rounded-lg">
                            <h3 class="text-lg md:text-xl font-semibold mb-3 border-b border-yellow-500 pb-2">
                                <span class="text-yellow-400">💡 Allgemeine Tipps für alle Plattformen</span>
                            </h3>
                            <div class="space-y-3 text-gray-300 text-sm">
                                <div>
                                    <p class="font-semibold mb-2">✅ Do's (Das solltest du tun):</p>
                                    <ul class="space-y-1 list-disc list-inside ml-4">
                                        <li>Lies die TOS und Community-Guidelines VOLLSTÄNDIG durch</li>
                                        <li>Nutze lizenzfreie Musik (z.B. von Epidemic Sound, Pretzel Rocks, Suno)</li>
                                        <li>Sei respektvoll zu deiner Community und anderen Streamern</li>
                                        <li>Kennzeichne gesponserte Inhalte deutlich</li>
                                        <li>Achte auf Altersbeschränkungen bei Spielen</li>
                                        <li>Moderiere deinen Chat aktiv</li>
                                        <li>Mache regelmäßig Pausen (wichtig für deine Gesundheit!)</li>
                                    </ul>
                                </div>

                                <div>
                                    <p class="font-semibold mb-2">❌ Don'ts (Das solltest du vermeiden):</p>
                                    <ul class="space-y-1 list-disc list-inside ml-4">
                                        <li>NIEMALS urheberrechtlich geschützte Musik spielen</li>
                                        <li>Keine Hassrede, Diskriminierung oder Mobbing</li>
                                        <li>Keine illegalen Aktivitäten auf Stream zeigen</li>
                                        <li>Nicht andere Streamer oder Zuschauer belästigen</li>
                                        <li>Keine persönlichen Daten (deine oder von anderen) teilen</li>
                                        <li>Nicht unter Einfluss von Drogen oder Alkohol streamen (plattformabhängig)</li>
                                        <li>Vermeide kontroverse politische oder religiöse Diskussionen</li>
                                    </ul>
                                </div>

                                <div class="bg-gray-700/30 border-l-4 border-blue-500 p-3 rounded mt-4">
                                    <p class="text-gray-300 text-sm">
                                        <strong class="text-blue-400">💼 Professioneller Tipp:</strong> Erstelle dir eine Checklist mit den wichtigsten Regeln 
                                        und hänge sie neben deinen Monitor. So hast du sie immer im Blick und vermeidest versehentliche Verstöße!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Finale Warnung -->
                        <div class="bg-gray-800/50 border-l-4 border-red-500 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                                <span class="text-red-400">🚨 ACHTUNG - Das kann deine Karriere beenden!</span>
                            </h3>
                            <p class="text-gray-300 mb-3">
                                Ein einziger schwerer Verstoß kann ausreichen, um permanent von einer Plattform gebannt zu werden. 
                                Es gibt Fälle von Streamern, die ihre gesamte Community und jahrelange Arbeit verloren haben, 
                                weil sie die Regeln nicht ernst genommen haben.
                            </p>
                            <p class="text-gray-300 font-semibold">
                                Nimm dir die Zeit, die Richtlinien zu lesen. Es lohnt sich! 
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Plugins & Erweiterungen -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">🔌 Empfohlene Plugins & Tools</h2>
                    
                    <div class="space-y-4">
                        <p class="text-gray-300 mb-4">
                            OBS lässt sich mit Plugins massiv erweitern. Hier sind meine persönlichen Empfehlungen:
                        </p>

                        <div class="grid md:grid-cols-2 gap-4">
                            <!-- StreamUp Tips -->
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2 text-blue-400">⭐ StreamUp.tips (Meine Wahl!)</h4>
                                <p class="text-sm text-gray-300 mb-3">
                                    Das Plugin das ich selbst nutze! Perfekt für Alerts, Overlays und Stream-Interaktionen.
                                </p>
                                <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside mb-3">
                                    <li>Einfache Integration in OBS</li>
                                    <li>Moderne Alerts & Widgets</li>
                                    <li>Kostenlose & Premium Features</li>
                                    <li>Twitch, YouTube & Kick Support</li>
                                </ul>
                                <a href="https://streamup.tips/" target="_blank" rel="noopener noreferrer"
                                   class="inline-block px-3 py-1.5 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                    → streamup.tips
                                </a>
                            </div>

                            <!-- Move Transition -->
                            <div class="bg-gray-800/50 border border-gray-600 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2 text-gray-200">Move Transition</h4>
                                <p class="text-sm text-gray-300 mb-3">
                                    Animierte Übergänge zwischen Szenen. Macht deinen Stream professioneller!
                                </p>
                                <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside mb-3">
                                    <li>Smooth Animationen</li>
                                    <li>Einfach zu konfigurieren</li>
                                    <li>Kostenlos & Open Source</li>
                                </ul>
                                <a href="https://obsproject.com/forum/resources/move.913/" target="_blank" rel="noopener noreferrer"
                                   class="inline-block px-3 py-1.5 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                    → OBS Forum
                                </a>
                            </div>

                            <!-- Advanced Scene Switcher -->
                            <div class="bg-gray-800/50 border border-gray-600 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2 text-gray-200">Advanced Scene Switcher</h4>
                                <p class="text-sm text-gray-300 mb-3">
                                    Automatischer Szenenwechsel basierend auf Fenstern, Zeit oder Bedingungen.
                                </p>
                                <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside mb-3">
                                    <li>Automatische Szenen-Wechsel</li>
                                    <li>Sehr mächtig & flexibel</li>
                                    <li>Spart viel manuelle Arbeit</li>
                                </ul>
                                <a href="https://obsproject.com/forum/resources/advanced-scene-switcher.395/" target="_blank" rel="noopener noreferrer"
                                   class="inline-block px-3 py-1.5 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                    → OBS Forum
                                </a>
                            </div>

                            <!-- Aitum Vertical -->
                            <div class="bg-gray-800/50 border border-gray-600 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2 text-gray-200">Aitum Vertical</h4>
                                <p class="text-sm text-gray-300 mb-3">
                                    Perfekt für vertikale Streams! Erstelle TikTok, YouTube Shorts und Instagram Reels direkt aus OBS.
                                </p>
                                <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside mb-3">
                                    <li>9:16 Vertical Streaming</li>
                                    <li>Perfekt für Shorts & Reels</li>
                                    <li>Multi-Platform Support</li>
                                    <li>Einfache Einrichtung</li>
                                </ul>
                                <a href="https://aitum.tv/vertical" target="_blank" rel="noopener noreferrer"
                                   class="inline-block px-3 py-1.5 bg-gray-600 hover:bg-gray-500 rounded text-xs transition">
                                    → aitum.tv/vertical
                                </a>
                            </div>
                        </div>

                        <div class="bg-gray-700/30 border-l-4 border-blue-500 p-4 rounded mt-4">
                            <p class="text-gray-300 text-sm">
                                <strong class="text-blue-400">⚠️ Plugin-Installation:</strong> Plugins müssen manuell in den OBS-Ordner kopiert werden. 
                                Lies immer die Installations-Anleitung des jeweiligen Plugins! Mit portable_mode bleiben auch 
                                Plugins in deinem OBS-Ordner.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Backup Scripts -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">💾 Automatische OBS-Backups</h2>
                    
                    <div class="space-y-4">
                        <p class="text-gray-300 mb-4">
                            Du hast OBS portabel gemacht? Perfekt! Hier sind fertige Backup-Scripts die automatisch 
                            deine komplette OBS-Konfiguration sichern - mit Datum im Dateinamen!
                        </p>

                        <div class="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded mb-4">
                            <h4 class="font-semibold text-green-400 mb-2">✨ Was die Scripts machen:</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside ml-4">
                                <li>Finden automatisch deine OBS portable_mode Installation</li>
                                <li>Erstellen ein komprimiertes Backup</li>
                                <li>Speichern mit Datum im Format: <code class="bg-gray-900 px-1 rounded text-xs">OBS-Backup_2025-01-15.zip</code></li>
                                <li>Backup landet in: <code class="bg-gray-900 px-1 rounded text-xs">Dokumente/OBS-Backups</code></li>
                            </ul>
                        </div>

                        <div class="grid md:grid-cols-3 gap-4">
                            <!-- Windows .bat -->
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h4 class="font-semibold mb-2 text-white">🪟 Windows (.bat)</h4>
                                <p class="text-xs text-gray-300 mb-3">
                                    Batch-Script für Windows. Nutzt 7-Zip für beste Kompression.
                                </p>
                                <p class="text-xs text-gray-400 mb-3">
                                    <strong>Benötigt:</strong> <a href="https://www.7-zip.org/" target="_blank" class="text-blue-400 underline">7-Zip</a>
                                </p>
                                <a href="/obs-backup.bat" download
                                   class="inline-block w-full text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                    ⬇️ Download .bat
                                </a>
                            </div>

                            <!-- PowerShell -->
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h4 class="font-semibold mb-2 text-white">⚡ PowerShell (.ps1)</h4>
                                <p class="text-xs text-gray-300 mb-3">
                                    Modernes PowerShell-Script. Nutzt native ZIP-Kompression.
                                </p>
                                <p class="text-xs text-gray-400 mb-3">
                                    <strong>Benötigt:</strong> PowerShell 5.0+
                                </p>
                                <a href="/obs-backup.ps1" download
                                   class="inline-block w-full text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                    ⬇️ Download .ps1
                                </a>
                            </div>

                            <!-- Linux -->
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h4 class="font-semibold mb-2 text-white">🐧 Linux/Mac (.sh)</h4>
                                <p class="text-xs text-gray-300 mb-3">
                                    Bash-Script für Linux & macOS. Nutzt tar.gz Kompression.
                                </p>
                                <p class="text-xs text-gray-400 mb-3">
                                    <strong>Benötigt:</strong> bash, tar
                                </p>
                                <a href="/obs-backup.sh" download
                                   class="inline-block w-full text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition">
                                    ⬇️ Download .sh
                                </a>
                            </div>
                        </div>

                        <div class="bg-gray-800/50 border-l-4 border-red-500 p-4 rounded mb-4">
                            <h4 class="font-semibold text-red-400 mb-2">⚠️ WICHTIG: Pfad anpassen!</h4>
                            <p class="text-sm text-gray-300 mb-3">
                                Dein OBS kann auf einer anderen Festplatte sein! Du <strong>musst den Pfad im Script anpassen</strong>:
                            </p>
                            
                            <div class="space-y-3 text-xs">
                                <div class="bg-gray-800/60 p-3 rounded">
                                    <p class="text-white font-semibold mb-2">🔍 So findest du deinen OBS-Pfad:</p>
                                    <ul class="text-gray-300 space-y-1 list-disc list-inside ml-2">
                                        <li><strong>Steam:</strong> Rechtsklick auf OBS in Steam → Verwalten → Lokale Dateien durchsuchen → Pfad aus Adressleiste kopieren</li>
                                        <li><strong>Manuell:</strong> Meist <code class="bg-gray-900 px-1 rounded">C:\Program Files\obs-studio</code></li>
                                        <li><strong>Andere Festplatte:</strong> z.B. <code class="bg-gray-900 px-1 rounded">D:\Steam\steamapps\common\OBS Studio</code></li>
                                    </ul>
                                </div>

                                <div class="bg-gray-800/60 p-3 rounded">
                                    <p class="text-white font-semibold mb-2">✏️ So passt du das Script an:</p>
                                    <div class="space-y-2">
                                        <div>
                                            <p class="text-yellow-400 mb-1">Windows (.bat / .ps1):</p>
                                            <ol class="text-gray-300 list-decimal list-inside ml-2">
                                                <li>Rechtsklick auf die Datei → "Bearbeiten" oder "Bearbeiten mit Notepad++"</li>
                                                <li>Ändere die Zeile <code class="bg-gray-900 px-1 rounded">set "OBS_PATH=..."</code> bzw. <code class="bg-gray-900 px-1 rounded">$ObsPath = "..."</code></li>
                                                <li>Trage deinen OBS-Pfad zwischen die Anführungszeichen ein</li>
                                                <li>Speichern (Strg+S)</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <p class="text-green-400 mb-1">Linux/Mac (.sh):</p>
                                            <ol class="text-gray-300 list-decimal list-inside ml-2">
                                                <li><code class="bg-gray-900 px-1 rounded">nano obs-backup.sh</code> (oder vim/gedit)</li>
                                                <li>Ändere die Zeile <code class="bg-gray-900 px-1 rounded">OBS_PATH="..."</code></li>
                                                <li>Speichern (Strg+O, Enter, Strg+X bei nano)</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                            <h4 class="font-semibold text-yellow-400 mb-2">📋 Nach der Anpassung - Nutzung:</h4>
                            <ol class="text-xs text-gray-300 space-y-1 list-decimal list-inside ml-4">
                                <li><strong>Windows .bat:</strong> Einfach doppelklicken</li>
                                <li><strong>PowerShell:</strong> Rechtsklick → "Mit PowerShell ausführen"</li>
                                <li><strong>Linux:</strong> <code class="bg-gray-900 px-1 rounded">chmod +x obs-backup.sh && ./obs-backup.sh</code></li>
                            </ol>
                        </div>

                        <div class="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded">
                            <h4 class="font-semibold text-blue-400 mb-2">💡 Wann solltest du Backups machen?</h4>
                            <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside ml-4">
                                <li><strong>VOR jedem OBS-Update</strong> - Falls das Update Probleme macht</li>
                                <li><strong>NACH jeder großen Änderung</strong> - Neue Szenen, Einstellungen, Plugins</li>
                                <li><strong>Vor dem Testen neuer Plugins</strong> - Sicherheit falls etwas schief geht</li>
                                <li><strong>Regelmäßig (wöchentlich)</strong> - Automatisch via Task Scheduler</li>
                                <li><strong>Vor Stream-Events</strong> - Damit du schnell zurück kannst</li>
                            </ul>
                            <p class="text-xs text-gray-400 mt-3">
                                <strong>📅 Mein Tipp:</strong> Erstelle ein Backup <strong>vor und nach jedem Update/Change</strong>. 
                                So kannst du immer zur letzten funktionierenden Version zurück!
                            </p>
                        </div>

                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h4 class="font-semibold text-gray-200 mb-2">🤖 Automatische Backups (Fortgeschritten):</h4>
                            <p class="text-xs text-gray-300 mb-2">
                                Erstelle eine Windows-Aufgabe (Task Scheduler) für automatische tägliche/wöchentliche Backups!
                            </p>
                            <p class="text-xs text-gray-400">
                                → Windows → Suche "Aufgabenplanung" → Einfache Aufgabe erstellen → Script als Aktion hinzufügen
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Weiterführende Ressourcen -->
                <section class="bg-gray-800/40 p-6 rounded-lg border border-gray-600">
                    <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4">📚 Weiterführende Ressourcen</h2>
                    <div class="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <h4 class="font-semibold mb-2">Offizielle Quellen:</h4>
                            <ul class="space-y-1 text-sm">
                                <li>→ <a href="https://obsproject.com/wiki/" target="_blank" class="text-gray-300 hover:text-white underline">OBS Wiki</a></li>
                                <li>→ <a href="https://obsproject.com/forum/" target="_blank" class="text-gray-300 hover:text-white underline">OBS Forum</a></li>
                                <li>→ OBS Discord Server</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">Nützliche Tools:</h4>
                            <ul class="space-y-1 text-sm">
                                <li>→ StreamElements (Alerts & Overlays)</li>
                                <li>→ Streamlabs (Alternative)</li>
                                <li>→ Twitch Inspector (Stream-Analyse)</li>
                            </ul>
                        </div>
                    </div>
                </section>
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
  title: 'OBS Studio Guide für Einsteiger',
  meta: [
    { name: 'description', content: 'Kompletter Einsteiger-Guide für OBS Studio. Lerne wie du OBS einrichtest, konfigurierst und deinen ersten Stream startest.' },
    { name: 'keywords', content: 'OBS Studio, Streaming Guide, Twitch Tutorial, OBS Einstellungen, Stream Setup' }
  ]
});

// Installation Tabs
const activeInstallTab = ref('steam');
const installTabs = [
  { id: 'steam', name: '🎮 Steam' },
  { id: 'manual', name: '💻 Manuell' },
];

// Bitrate Calculator
const uploadSpeed = ref(null);
const bitrateResult = ref(null);
const showResolutionModal = ref(false);

const calculateBitrate = () => {
  if (!uploadSpeed.value || uploadSpeed.value <= 0) {
    bitrateResult.value = null;
    return;
  }

  const upload = uploadSpeed.value; // Mbit/s
  // Upload in Kbps umrechnen und 70% für Stabilität nutzen
  const maxBitrate = Math.floor(upload * 1000 * 0.70);
  
  let bitrate, resolution, fps, encoder, note, showResolutionInfo = false;

  // Twitch hat ein Maximum von ca. 8000 Kbps, YouTube 9000 Kbps
  // Wir limitieren auf 8000 für Twitch-Kompatibilität
  const twitchMax = 8000;
  const safeBitrate = Math.min(maxBitrate, twitchMax);

  if (upload >= 12) {
    // >12 Mbit/s Upload: 8000 Kbps möglich (Twitch Maximum)
    bitrate = 8000;
    resolution = '1920x1080 (1080p)';
    fps = '60 FPS';
    encoder = 'NVENC (empfohlen) oder x264';
    note = '🎉 Perfekte Verbindung! Du kannst mit maximaler Qualität (Twitch-Maximum) streamen.';
  } else if (upload >= 9) {
    // 9-12 Mbit/s: 6000 Kbps (Sweet Spot mit 936p)
    bitrate = 6000;
    resolution = '1664x936 (936p)';
    fps = '60 FPS';
    encoder = 'NVENC (empfohlen) oder x264';
    note = '⭐ Optimal! 936p ist der Sweet Spot für 6000 Kbps - besser als 1080p bei dieser Bitrate!';
    showResolutionInfo = true;
  } else if (upload >= 7) {
    // 7-9 Mbit/s: 4500-5000 Kbps
    bitrate = Math.min(safeBitrate, 5000);
    resolution = '1600x900 (900p)';
    fps = '60 FPS';
    encoder = 'NVENC (empfohlen) oder x264';
    note = '👍 Gute Verbindung! 900p bietet eine schöne Balance zwischen Qualität und Stabilität.';
  } else if (upload >= 5) {
    // 5-7 Mbit/s: 3500 Kbps
    bitrate = 3500;
    resolution = '1280x720 (720p)';
    fps = '60 FPS';
    encoder = 'x264 (veryfast) oder NVENC';
    note = '✅ Solide Verbindung! 720p @ 60fps ist perfekt für die meisten Streams.';
  } else if (upload >= 4) {
    // 4-5 Mbit/s: 3000 Kbps
    bitrate = 3000;
    resolution = '1280x720 (720p)';
    fps = '60 FPS';
    encoder = 'x264 (veryfast) oder NVENC';
    note = '✅ Solide! 720p @ 60fps funktioniert gut.';
  } else if (upload >= 3) {
    // 3-4 Mbit/s: 2500 Kbps, 30fps empfohlen
    bitrate = 2500;
    resolution = '1280x720 (720p)';
    fps = '30 FPS';
    encoder = 'x264 (veryfast)';
    note = '⚠️ Niedrige Upload-Rate. 30 FPS sind stabiler bei dieser Geschwindigkeit.';
  } else {
    // <3 Mbit/s: Sehr niedrig
    bitrate = 2000;
    resolution = '854x480 (480p)';
    fps = '30 FPS';
    encoder = 'x264 (veryfast)';
    note = '⚠️ Sehr niedrige Upload-Rate. Erwäge einen besseren Internetanschluss für höhere Qualität.';
  }

  bitrateResult.value = {
    bitrate,
    resolution,
    fps,
    encoder,
    note,
    showResolutionInfo
  };
};
</script>

<style scoped>
</style>

