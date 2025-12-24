<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-4xl mx-auto">
            <!-- Navigation -->
            <AppNavigation />

            <h1 class="text-4xl font-bold mb-4">OBS Studio - Der ultimative Einsteigerguide</h1>
            <p class="text-gray-400 mb-8">Alles was du brauchst, um mit OBS Studio durchzustarten</p>
            
            <div class="space-y-8">
                <!-- Intro -->
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Was ist OBS Studio?</h2>
                    <p class="text-gray-300 mb-4">
                        OBS Studio (Open Broadcaster Software) ist eine kostenlose, quelloffene Software zum Aufnehmen und Streamen 
                        von Videos. Sie ist die erste Wahl für die meisten Streamer auf Twitch, YouTube und anderen Plattformen. 
                        Mit OBS kannst du professionelle Streams erstellen, ohne einen Cent auszugeben.
                    </p>
                    <p class="text-gray-300 mb-4">
                        In diesem Guide zeige ich dir Schritt für Schritt, wie du OBS einrichtest und deinen ersten Stream startest. 
                        Keine Vorkenntnisse nötig - wir fangen bei Null an!
                    </p>
                    <div class="bg-blue-900/20 border border-blue-600 p-4 rounded mt-4">
                        <p class="text-blue-200">
                            <strong>💡 Tipp:</strong> Dieser Guide richtet sich an Anfänger. Wenn du bereits Erfahrung mit OBS hast, 
                            spring direkt zu den fortgeschrittenen Abschnitten.
                        </p>
                    </div>
                </section>

                <!-- Installation -->
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Schritt 1: Installation & Download</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-xl font-semibold mb-2 text-blue-400">Download-Optionen</h3>
                            <p class="text-gray-300 mb-4">
                                OBS Studio ist komplett kostenlos und enthält keine Werbung oder versteckte Kosten. 
                                Du hast zwei Möglichkeiten zur Installation:
                            </p>
                            
                            <div class="grid md:grid-cols-2 gap-4 mb-4">
                                <!-- Steam Version -->
                                <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-600 p-4 rounded">
                                    <h4 class="font-semibold mb-2 text-blue-300">🎮 Steam Version (EMPFOHLEN)</h4>
                                    <p class="text-sm text-gray-300 mb-3">
                                        Wenn du immer die neueste Version haben möchtest und automatische Updates bevorzugst.
                                    </p>
                                    <p class="text-sm text-gray-300 mb-2">
                                        <strong>Vorteile:</strong>
                                    </p>
                                    <ul class="text-sm text-gray-300 list-disc list-inside ml-2 space-y-1">
                                        <li>Automatische Updates</li>
                                        <li>Einfache Installation</li>
                                        <li>Version lässt sich bei Bedarf pinnen</li>
                                        <li>Immer aktuell ohne manuelles Updaten</li>
                                    </ul>
                                    <p class="text-xs text-gray-400 mt-3">
                                        → Suche in Steam nach "OBS Studio" und installiere es kostenlos
                                    </p>
                                </div>
                                
                                <!-- Manuelle Version -->
                                <div class="bg-gray-800/50 border border-gray-600 p-4 rounded">
                                    <h4 class="font-semibold mb-2 text-gray-300">💻 Manuelle Installation</h4>
                                    <p class="text-sm text-gray-300 mb-3">
                                        Wenn du volle Kontrolle über die Version haben und Updates manuell durchführen möchtest.
                                    </p>
                                    <p class="text-sm text-gray-300 mb-2">
                                        <strong>Vorteile:</strong>
                                    </p>
                                    <ul class="text-sm text-gray-300 list-disc list-inside ml-2 space-y-1">
                                        <li>Funktioniert ohne Steam</li>
                                        <li>Version bleibt stabil bis du updatest</li>
                                        <li>Volle Kontrolle über Updates</li>
                                        <li>Auch für ältere Systeme verfügbar</li>
                                    </ul>
                                    <p class="text-xs text-gray-400 mt-3">
                                        → Download von: 
                                        <a href="https://obsproject.com/de" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                                            obsproject.com/de
                                        </a>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="bg-green-900/20 border border-green-600 p-4 rounded">
                                <p class="text-green-200 text-sm">
                                    <strong>💡 Meine Empfehlung:</strong> Nutze die <strong>Steam-Version</strong>, wenn du Steam bereits installiert hast. 
                                    Du bleibst automatisch auf dem neuesten Stand und kannst bei Problemen trotzdem eine ältere Version über Steam pinnen. 
                                    Falls du kein Steam nutzen möchtest, ist die manuelle Installation genauso gut!
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-2 text-blue-400">Installation</h3>
                            
                            <div class="mb-4">
                                <p class="text-sm text-gray-400 mb-2"><strong>Für Steam-Version:</strong></p>
                                <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-2 text-sm">
                                    <li>Öffne Steam</li>
                                    <li>Suche nach "OBS Studio" im Store</li>
                                    <li>Klicke auf "Installieren" (kostenlos)</li>
                                    <li>Starte OBS über deine Steam-Bibliothek</li>
                                    <li><em>Optional:</em> Version pinnen unter Eigenschaften → Updates → "Nur gewählte Beta-Version"</li>
                                </ol>
                            </div>
                            
                            <div>
                                <p class="text-sm text-gray-400 mb-2"><strong>Für manuelle Installation:</strong></p>
                                <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-2 text-sm">
                                    <li>Starte das heruntergeladene Installationsprogramm</li>
                                    <li>Folge den Anweisungen des Installationsassistenten</li>
                                    <li>Wähle den Installationsort (Standard ist meist in Ordnung)</li>
                                    <li>Warte bis die Installation abgeschlossen ist</li>
                                    <li>Starte OBS Studio zum ersten Mal</li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-2 text-blue-400">Auto-Konfigurationsassistent</h3>
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
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Schritt 2: Grundlegende Einstellungen</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-green-400">Stream-Einstellungen</h3>
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
                            <div class="bg-yellow-900/20 border border-yellow-600 p-3 rounded mt-4">
                                <p class="text-yellow-200 text-sm">
                                    <strong>⚠️ WICHTIG:</strong> Teile deinen Stream-Schlüssel NIEMALS mit anderen! 
                                    Wer deinen Schlüssel hat, kann in deinem Namen streamen.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-green-400">Ausgabe-Einstellungen</h3>
                            <p class="text-gray-300 mb-3">
                                Gehe zu <strong>Einstellungen → Ausgabe</strong>
                            </p>
                            <p class="text-gray-300 mb-3"><strong>Empfohlene Einstellungen für Einsteiger:</strong></p>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li><strong>Encoder:</strong> x264 (Software) oder NVENC H.264 (Nvidia GPU)</li>
                                <li><strong>Bitrate:</strong> 3000-6000 Kbps (abhängig von deiner Upload-Geschwindigkeit)</li>
                                <li><strong>Keyframe-Intervall:</strong> 2 Sekunden</li>
                                <li><strong>Preset:</strong> "veryfast" für x264, "Quality" für NVENC</li>
                            </ul>
                            <div class="bg-blue-900/20 border border-blue-600 p-3 rounded mt-4">
                                <p class="text-blue-200 text-sm">
                                    <strong>💡 Tipp:</strong> Deine Upload-Geschwindigkeit sollte mindestens 1,5x höher sein als 
                                    deine gewählte Bitrate. Nutze einen Speedtest um deine Upload-Rate zu prüfen!
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-green-400">Video-Einstellungen</h3>
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
                            <h3 class="text-xl font-semibold mb-3 text-green-400">Audio-Einstellungen</h3>
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
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Schritt 3: Szenen und Quellen erstellen</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-purple-400">Was sind Szenen?</h3>
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
                            <h3 class="text-xl font-semibold mb-3 text-purple-400">Szene erstellen</h3>
                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-4">
                                <li>Klicke auf das "+" Symbol im "Szenen" Bereich unten links</li>
                                <li>Gib deiner Szene einen Namen (z.B. "Gaming")</li>
                                <li>Klicke auf "OK"</li>
                            </ol>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-purple-400">Quellen hinzufügen</h3>
                            <p class="text-gray-300 mb-3">
                                Quellen sind die Inhalte, die in deinen Szenen angezeigt werden. Die wichtigsten Quellen:
                            </p>
                            
                            <div class="space-y-4 mt-4">
                                <div class="bg-gray-800/50 p-4 rounded">
                                    <h4 class="font-semibold mb-2">🎮 Bildschirmaufnahme (Game Capture)</h4>
                                    <p class="text-sm text-gray-300 mb-2">Für Spiele - beste Performance:</p>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Spielaufnahme"</li>
                                        <li>Modus: "Bestimmtes Fenster aufnehmen"</li>
                                        <li>Wähle dein Spiel aus der Liste</li>
                                    </ol>
                                </div>

                                <div class="bg-gray-800/50 p-4 rounded">
                                    <h4 class="font-semibold mb-2">🖥️ Bildschirmaufnahme (Display Capture)</h4>
                                    <p class="text-sm text-gray-300 mb-2">Für alles andere (Browser, Programme, etc.):</p>
                                    <ol class="text-sm text-gray-300 list-decimal list-inside ml-4">
                                        <li>Klicke "+" im Quellen-Bereich</li>
                                        <li>Wähle "Bildschirmaufnahme"</li>
                                        <li>Wähle den Monitor aus, den du aufnehmen willst</li>
                                    </ol>
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

                        <div class="bg-green-900/20 border border-green-600 p-4 rounded">
                            <p class="text-green-200">
                                <strong>✅ Pro-Tipp:</strong> Die Reihenfolge der Quellen ist wichtig! Quellen weiter oben 
                                in der Liste werden über denen darunter angezeigt. Ziehe Quellen per Drag & Drop um sie neu zu ordnen.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Audio Setup -->
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Schritt 4: Audio richtig einstellen</h2>
                    
                    <div class="space-y-4">
                        <p class="text-gray-300">
                            Audio ist einer der wichtigsten Aspekte deines Streams. Schlechtes Audio vertreibt Zuschauer schneller 
                            als schlechte Video-Qualität!
                        </p>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-orange-400">Audio-Mixer verstehen</h3>
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
                            <h3 class="text-xl font-semibold mb-3 text-orange-400">Pegel richtig einstellen</h3>
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
                            <h3 class="text-xl font-semibold mb-3 text-orange-400">Filter hinzufügen (Fortgeschritten)</h3>
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
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Schritt 5: Deinen ersten Stream starten!</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-red-400">Vor dem Start - Checkliste:</h3>
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
                            <h3 class="text-xl font-semibold mb-3 text-red-400">Stream starten:</h3>
                            <ol class="text-gray-300 space-y-2 list-decimal list-inside ml-4">
                                <li>Wähle deine Startszene aus</li>
                                <li>Klicke auf <strong>"Streaming starten"</strong> (rechts unten)</li>
                                <li>OBS zeigt jetzt "LIVE" an</li>
                                <li>Gehe zu Twitch/YouTube und prüfe ob der Stream läuft</li>
                                <li>Warte ca. 10-20 Sekunden - so lange ist die Verzögerung normal</li>
                            </ol>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-red-400">Während des Streams:</h3>
                            <ul class="text-gray-300 space-y-2 list-disc list-inside ml-4">
                                <li>Achte auf die Indikatoren unten rechts in OBS (grün = alles gut)</li>
                                <li>Der "CPU" Wert sollte unter 80% bleiben</li>
                                <li>Bei rotem/gelbem Indikator: Bitrate reduzieren oder Auflösung senken</li>
                                <li>Behalte deinen Chat im Auge</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold mb-3 text-red-400">Stream beenden:</h3>
                            <p class="text-gray-300 mb-2">
                                Klicke einfach auf <strong>"Streaming stoppen"</strong>. Fertig! 🎉
                            </p>
                        </div>

                        <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-600 p-6 rounded mt-6">
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
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Bonus: Wichtige Tipps für bessere Streams</h2>
                    
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-800/50 p-4 rounded">
                            <h4 class="font-semibold mb-2">⚡ Performance-Optimierung</h4>
                            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                <li>Schließe unnötige Programme</li>
                                <li>Nutze "Game Capture" statt "Display Capture"</li>
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
                <section class="bg-eerie-black p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-4">Häufige Probleme & Lösungen</h2>
                    
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
                <section class="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-700">
                    <h2 class="text-2xl font-semibold mb-4">⚠️ WICHTIG: Plattform-Richtlinien & Regeln</h2>
                    <p class="text-gray-200 mb-6">
                        Bevor du mit dem Streamen beginnst, ist es <strong>absolut essentiell</strong>, dass du die Regeln und 
                        Richtlinien der Streaming-Plattformen kennst und einhältst. Verstöße können zu Verwarnungen, Sperren 
                        oder permanenten Bans führen - und damit das Ende deiner Streaming-Karriere bedeuten!
                    </p>

                    <div class="space-y-6">
                        <!-- Twitch -->
                        <div class="bg-purple-900/30 border border-purple-600 p-5 rounded-lg">
                            <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
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
                                
                                <div class="bg-red-900/30 border border-red-600 p-3 rounded">
                                    <p class="text-red-200 font-semibold mb-2">🚨 Häufige Verstöße auf Twitch:</p>
                                    <ul class="space-y-1 list-disc list-inside">
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
                        <div class="bg-red-900/30 border border-red-600 p-5 rounded-lg">
                            <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
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
                                
                                <div class="bg-red-900/30 border border-red-600 p-3 rounded">
                                    <p class="text-red-200 font-semibold mb-2">🚨 Häufige Verstöße auf YouTube:</p>
                                    <ul class="space-y-1 list-disc list-inside">
                                        <li>Urheberrechtsverletzungen (Musik, Videos, Bilder)</li>
                                        <li>Hassrede oder Belästigung</li>
                                        <li>Gewaltdarstellung oder schockierende Inhalte</li>
                                        <li>Sexuell explizite Inhalte</li>
                                        <li>Schädliche oder gefährliche Inhalte</li>
                                        <li>Fehlinformationen (besonders zu Gesundheitsthemen)</li>
                                        <li>Spam, Betrug oder irreführende Metadaten</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-yellow-900/30 border border-yellow-600 p-3 rounded">
                                    <p class="text-yellow-200 text-xs">
                                        <strong>⚠️ YouTube Strike-System:</strong> Bei Verstößen erhältst du "Strikes" (Verwarnungen). 
                                        3 Strikes innerhalb von 90 Tagen = permanenter Kanalverlust!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Kick -->
                        <div class="bg-green-900/30 border border-green-600 p-5 rounded-lg">
                            <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
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
                        <div class="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-600 p-5 rounded-lg">
                            <h3 class="text-xl font-semibold mb-3 text-yellow-300">💡 Allgemeine Tipps für alle Plattformen</h3>
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

                                <div class="bg-blue-900/30 border border-blue-600 p-3 rounded mt-4">
                                    <p class="text-blue-200 text-sm">
                                        <strong>💼 Professioneller Tipp:</strong> Erstelle dir eine Checklist mit den wichtigsten Regeln 
                                        und hänge sie neben deinen Monitor. So hast du sie immer im Blick und vermeidest versehentliche Verstöße!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Finale Warnung -->
                        <div class="bg-red-900/40 border-2 border-red-500 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-3 text-red-300 flex items-center gap-2">
                                🚨 ACHTUNG - Das kann deine Karriere beenden!
                            </h3>
                            <p class="text-gray-200 mb-3">
                                Ein einziger schwerer Verstoß kann ausreichen, um permanent von einer Plattform gebannt zu werden. 
                                Es gibt Fälle von Streamern, die ihre gesamte Community und jahrelange Arbeit verloren haben, 
                                weil sie die Regeln nicht ernst genommen haben.
                            </p>
                            <p class="text-gray-200 font-semibold">
                                Nimm dir die Zeit, die Richtlinien zu lesen. Es lohnt sich! 
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Weiterführende Ressourcen -->
                <section class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-700">
                    <h2 class="text-2xl font-semibold mb-4">📚 Weiterführende Ressourcen</h2>
                    <div class="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <h4 class="font-semibold mb-2">Offizielle Quellen:</h4>
                            <ul class="space-y-1 text-sm">
                                <li>→ <a href="https://obsproject.com/wiki/" target="_blank" class="text-blue-400 hover:text-blue-300">OBS Wiki</a></li>
                                <li>→ <a href="https://obsproject.com/forum/" target="_blank" class="text-blue-400 hover:text-blue-300">OBS Forum</a></li>
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
                <NuxtLink to="/" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                    ← Zurück zur Tool-Übersicht
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'OBS Studio Guide für Einsteiger',
  meta: [
    { name: 'description', content: 'Kompletter Einsteiger-Guide für OBS Studio. Lerne wie du OBS einrichtest, konfigurierst und deinen ersten Stream startest.' },
    { name: 'keywords', content: 'OBS Studio, Streaming Guide, Twitch Tutorial, OBS Einstellungen, Stream Setup' }
  ]
});
</script>

<style scoped>
</style>

