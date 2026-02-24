<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Breadcrumbs -->
            <Breadcrumbs />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">Kontakt</h1>
            <p class="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Aktuell ist direkter Kontakt über E-Mail noch nicht möglich. Hier findest du andere Wege, wie du mit mir in Kontakt treten kannst.
            </p>

            <!-- Main Content -->
            <div class="space-y-8">
                <!-- Contact Options -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">📧 Kontaktmöglichkeiten</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Ko-fi & Patreon</h3>
                            <p class="text-sm text-gray-300 mb-3">
                                Du kannst mich über Ko-fi oder Patreon erreichen, wenn du Fragen oder Feedback hast:
                            </p>
                            <div class="flex flex-col gap-2">
                                <a href="https://ko-fi.com/blackeyestudio" target="_blank" 
                                   class="text-blue-400 hover:text-blue-300 underline font-semibold">
                                    Ko-fi Profil →
                                </a>
                                <a href="https://patreon.com/Blackeyestudio_ger" target="_blank" 
                                   class="text-blue-400 hover:text-blue-300 underline font-semibold">
                                    Patreon Profil →
                                </a>
                            </div>
                        </div>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Rechtliches</h3>
                            <p class="text-sm text-gray-300 mb-3">
                                Für rechtliche Anfragen oder Impressum-Informationen:
                            </p>
                            <NuxtLink to="/impressum" class="text-blue-400 hover:text-blue-300 underline font-semibold">
                                Zum Impressum →
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="bg-yellow-600/20 border border-yellow-500 p-4 rounded mt-4">
                        <p class="text-yellow-200 text-sm">
                            <strong>ℹ️ Hinweis:</strong> Eine direkte E-Mail-Adresse ist aktuell noch nicht verfügbar. 
                            Sobald eine Business-Mail eingerichtet ist, wird diese hier veröffentlicht.
                        </p>
                    </div>
                </section>

                <!-- What to contact us about -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">💬 Wofür kannst du uns kontaktieren?</h2>
                    <div class="space-y-4 text-gray-300">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Tool-Vorschläge</h3>
                                <p class="text-sm text-gray-300">
                                    Du kennst ein Tool, das hier fehlt? Lass es mich wissen! Ich prüfe jeden 
                                    Vorschlag sorgfältig.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Fehler melden</h3>
                                <p class="text-sm text-gray-300">
                                    Hast du einen Fehler gefunden? Veraltete Informationen? Broken Links? 
                                    Ich korrigiere das so schnell wie möglich.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Guide-Anfragen</h3>
                                <p class="text-sm text-gray-300">
                                    Du vermisst einen Guide zu einem bestimmten Tool oder Thema? 
                                    Ich nehme alle Anfragen ernst und plane neue Inhalte entsprechend.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Feedback & Kritik</h3>
                                <p class="text-sm text-gray-300">
                                    Was gefällt dir? Was nicht? Dein Feedback hilft mir, die Seite zu verbessern.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Kooperationen</h3>
                                <p class="text-sm text-gray-300">
                                    Interessiert an einer Zusammenarbeit? Ich bin offen für sinnvolle 
                                    Partnerschaften, die der Community helfen.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">✓ Technische Probleme</h3>
                                <p class="text-sm text-gray-300">
                                    Die Seite funktioniert nicht richtig? Etwas lädt nicht? 
                                    Ich helfe gerne weiter.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Response Time -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">⏱️ Antwortzeiten</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Ich versuche, alle Anfragen so schnell wie möglich zu beantworten. 
                            Da ich alle Anfragen manuell bearbeite, kann es etwas dauern. Bitte hab etwas Geduld!
                        </p>
                        <p>
                            <strong class="text-white">Bitte beachte:</strong> Aktuell ist der Kontakt über Ko-fi und Patreon 
                            am zuverlässigsten. Sobald eine E-Mail-Adresse verfügbar ist, wird diese hier veröffentlicht.
                        </p>
                    </div>
                </section>

                <!-- FAQ -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">❓ Häufige Fragen</h2>
                    <div class="space-y-4">
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Kann ich ein Tool vorschlagen?</h3>
                            <p class="text-sm text-gray-300">
                                Ja, absolut! Kontaktiere mich über Ko-fi oder Patreon mit dem Tool-Namen, der URL und 
                                einer kurzen Beschreibung, warum es nützlich ist. Ich prüfe jeden Vorschlag.
                            </p>
                        </div>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Kann ich für euch schreiben?</h3>
                                <p class="text-sm text-gray-300">
                                    Aktuell schreibe ich alle Inhalte selbst. Wenn du Interesse an einer 
                                    Zusammenarbeit hast, melde dich gerne – ich bin offen für Gespräche!
                                </p>
                        </div>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Könnt ihr mir bei einem Tool helfen?</h3>
                                <p class="text-sm text-gray-300">
                                    Ich kann dir bei allgemeinen Fragen zu Tools helfen, die ich auf der Seite 
                                    empfehle. Für spezifische technische Probleme solltest du dich an den 
                                    Support des jeweiligen Tools wenden.
                                </p>
                        </div>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-2">Wie kann ich euch unterstützen?</h3>
                                <p class="text-sm text-gray-300">
                                    Am besten unterstützt du mich, indem du die Seite teilst, Feedback gibst und 
                                    Tools vorschlägst. Freiwillige finanzielle Unterstützung ist über 
                                    <a href="https://ko-fi.com/blackeyestudio" target="_blank" class="text-blue-400 underline">Ko-fi</a> 
                                    oder <a href="https://patreon.com/Blackeyestudio_ger" target="_blank" class="text-blue-400 underline">Patreon</a> möglich.
                                </p>
                        </div>
                    </div>
                </section>

                <!-- Other Resources -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🔗 Weitere Ressourcen</h2>
                    <div class="space-y-3 text-gray-300">
                        <p>
                            Bevor du mich kontaktierst, schau gerne auch hier nach:
                        </p>
                        <ul class="list-disc list-inside ml-4 space-y-2">
                            <li>
                                <NuxtLink to="/glossar" class="text-blue-400 underline">
                                    Glossar
                                </NuxtLink> - Vielleicht findest du hier die Antwort auf deine Frage
                            </li>
                            <li>
                                <NuxtLink to="/obs-guide" class="text-blue-400 underline">
                                    OBS Guide
                                </NuxtLink> - Ausführliche Anleitung zu OBS Studio
                            </li>
                            <li>
                                <NuxtLink to="/impressum" class="text-blue-400 underline">
                                    Impressum
                                </NuxtLink> - Rechtliche Informationen
                            </li>
                            <li>
                                <NuxtLink to="/datenschutz" class="text-blue-400 underline">
                                    Datenschutz
                                </NuxtLink> - Informationen zum Datenschutz
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        
        <!-- Scroll to Top Button -->
        <ScrollToTop />
    </div>
</template>

<script setup>
useHead({
    title: 'Kontakt - Content Creator Toolbox',
    meta: [
        { name: 'description', content: 'Kontaktiere uns für Fragen, Feedback oder Tool-Vorschläge. Wir freuen uns von dir zu hören!' },
        { property: 'og:title', content: 'Kontakt - Content Creator Toolbox' },
        { property: 'og:description', content: 'Kontaktiere uns für Fragen, Feedback oder Tool-Vorschläge.' }
    ]
});
</script>

<style scoped>
</style>
