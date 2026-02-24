<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-6xl mx-auto">
            <!-- Breadcrumbs -->
            <Breadcrumbs />

            <h1 class="text-2xl md:text-4xl font-bold mb-4">Über uns - Die Content Creator Toolbox</h1>
            <p class="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Wer wir sind, warum diese Seite existiert und was uns antreibt.
            </p>

            <!-- Main Content -->
            <div class="space-y-8">
                <!-- Mission -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🎯 Unsere Mission</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Ich habe diese Toolbox aus einer einfachen Beobachtung heraus gemacht: 
                            Wir Content Creator verbringen viel zu viel Zeit damit, die richtigen Tools zu finden, statt 
                            tatsächlich Content zu erstellen. Das wollte ich ändern.
                        </p>
                        <p>
                            Mein Ziel ist es, eine zentrale Anlaufstelle für alle zu schaffen, 
                            die im Bereich Streaming, YouTube und Social Media aktiv sind. Ich sammle, teste und 
                            dokumentiere kostenlose und kosteneffiziente Tools, die dir wirklich helfen.
                        </p>
                        <p>
                            <strong class="text-white">Wichtig:</strong> Diese Seite ist und bleibt komplett kostenlos. 
                            Keine Premium-Mitgliedschaften, keine Paywalls, keine versteckten Kosten. Alle Tools, 
                            Guides und Ressourcen sind frei zugänglich. Das verspreche ich dir.
                        </p>
                    </div>
                </section>

                <!-- Warum diese Seite -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">💡 Warum diese Seite?</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Als Content Creator kennst du das Problem bestimmt: Du brauchst ein Tool für Thumbnails, suchst 
                            stundenlang, findest entweder nichts Passendes oder stößt auf teure Abo-Modelle. 
                            Oder du findest ein Tool, aber hast keine Zeit, es richtig zu verstehen.
                        </p>
                        <p>
                            Diese Seite soll beide Probleme lösen:
                        </p>
                        <ul class="list-disc list-inside ml-4 space-y-2 text-gray-300">
                            <li><strong class="text-white">Kuratiert:</strong> Alle Tools habe ich selbst ausgewählt und getestet</li>
                            <li><strong class="text-white">Kostenlos fokussiert:</strong> Ich zeige dir Alternativen zu teuren Abos</li>
                            <li><strong class="text-white">Ausführlich dokumentiert:</strong> Guides und Erklärungen für jedes Tool</li>
                            <li><strong class="text-white">Aktuell gehalten:</strong> Ich aktualisiere regelmäßig und füge neue Tools hinzu</li>
                        </ul>
                    </div>
                </section>

                <!-- Wer steht dahinter -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">👤 Wer steht dahinter?</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Diese Seite betreibe ich unter <strong class="text-white">Blackeye Studio</strong>. 
                            Ich bin selbst Content Creator und kenne die täglichen Herausforderungen aus eigener Erfahrung.
                        </p>
                        <p>
                            Ich bin keine große Agentur oder Firma mit hunderten Mitarbeitern. Ich bin selbst 
                            Streamer und Content Creator und weiß genau, welche Probleme du im 
                            Alltag hast. Diese Erfahrung fließt direkt in meine Empfehlungen und Guides ein.
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded mt-4">
                            <p class="text-gray-300 text-sm">
                                <strong>💼 Rechtliche Informationen:</strong> Alle rechtlichen Angaben findest du 
                                in unserem <NuxtLink to="/impressum" class="text-blue-400 underline">Impressum</NuxtLink>.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Wie wir arbeiten -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🔍 Wie wir arbeiten</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Jedes Tool, das hier landet, durchläuft bei mir einen sorgfältigen Auswahlprozess:
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mt-4">
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">1. Recherche & Test</h3>
                                <p class="text-sm text-gray-300">
                                    Ich recherchiere Tools, teste sie selbst in der Praxis und bewerte sie nach 
                                    Funktionalität, Benutzerfreundlichkeit und Kosten. Nur was wirklich hilft, kommt hier rein.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">2. Dokumentation</h3>
                                <p class="text-sm text-gray-300">
                                    Jedes Tool beschreibe ich ausführlich, mit Anwendungsfällen, Vor- und 
                                    Nachteilen und praktischen Tipps aus meiner eigenen Nutzung.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">3. Regelmäßige Updates</h3>
                                <p class="text-sm text-gray-300">
                                    Ich überprüfe regelmäßig, ob Tools noch verfügbar sind, ob sich Preise 
                                    geändert haben oder ob es bessere Alternativen gibt.
                                </p>
                            </div>
                            <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                                <h3 class="font-semibold text-white mb-2">4. Community-Feedback</h3>
                                <p class="text-sm text-gray-300">
                                    Dein Feedback fließt direkt in meine Empfehlungen ein. 
                                    Wenn du ein Tool kennst, das fehlt, schreib mir einfach!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Transparenz -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🔐 Transparenz & Finanzierung</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Ich lege Wert auf Transparenz. Deshalb möchte ich dir klar sagen, wie diese 
                            Seite finanziert wird:
                        </p>
                        <div class="bg-gray-700/30 border border-gray-500 p-4 rounded">
                            <h3 class="font-semibold text-white mb-3">Finanzierungsquellen:</h3>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li>
                                    <strong class="text-white">Google AdSense:</strong> Ich zeige Werbeanzeigen, 
                                    um die Serverkosten zu decken. Diese sind klar als Werbung gekennzeichnet.
                                </li>
                                <li>
                                    <strong class="text-white">Affiliate-Links:</strong> Auf der Hardware-Seite 
                                    nutze ich Amazon Affiliate Links. Wenn du über diese Links einkaufst, erhalte 
                                    ich eine kleine Provision – ohne dass du mehr bezahlst. Diese Links sind immer 
                                    als Affiliate-Links gekennzeichnet.
                                </li>
                                <li>
                                    <strong class="text-white">Freiwillige Unterstützung:</strong> Über Ko-fi und 
                                    Patreon kannst du mich freiwillig unterstützen. Das ist komplett optional und 
                                    ändert nichts an der Verfügbarkeit der Inhalte.
                                </li>
                            </ul>
                        </div>
                        <p class="text-sm text-gray-400 italic mt-4">
                            <strong>Wichtig:</strong> Meine Empfehlungen werden niemals durch Zahlungen von 
                            Tool-Anbietern beeinflusst. Ich empfehle nur Tools, die ich selbst getestet habe 
                            und für wirklich nützlich halte.
                        </p>
                    </div>
                </section>

                <!-- Community -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🤝 Community & Feedback</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Diese Seite lebt von der Community. Dein Feedback, deine Vorschläge und deine 
                            Erfahrungen helfen mir, die Toolbox kontinuierlich zu verbessern.
                        </p>
                        <p>
                            Wenn du:
                        </p>
                        <ul class="list-disc list-inside ml-4 space-y-2 text-gray-300">
                            <li>Ein Tool kennst, das hier fehlt</li>
                            <li>Fehler oder veraltete Informationen gefunden hast</li>
                            <li>Fragen oder Anregungen hast</li>
                            <li>Einen Guide vermisst</li>
                        </ul>
                        <p class="mt-4">
                            Dann schreib mir einfach über die <NuxtLink to="/kontakt" class="text-blue-400 underline">Kontaktseite</NuxtLink>!
                        </p>
                    </div>
                </section>

                <!-- Zukunft -->
                <section class="bg-gray-800/40 border border-gray-600 p-4 md:p-6 rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">🚀 Die Zukunft</h2>
                    <div class="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Ich habe große Pläne für die Content Creator Toolbox:
                        </p>
                        <ul class="list-disc list-inside ml-4 space-y-2 text-gray-300">
                            <li>Weitere ausführliche Guides zu verschiedenen Tools und Themen</li>
                            <li>Video-Tutorials für komplexere Tools</li>
                            <li>Vergleichstabellen für ähnliche Tools</li>
                            <li>Community-Bereich für Erfahrungsaustausch</li>
                            <li>Regelmäßige Updates mit neuen Tools</li>
                        </ul>
                        <p class="mt-4">
                            Alles Schritt für Schritt, mit Fokus auf Qualität statt Quantität. Ich will, 
                            dass diese Seite eine echte Hilfe ist, nicht nur eine weitere Link-Sammlung.
                        </p>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="bg-blue-600/20 border border-blue-500 p-4 md:p-6 rounded-lg text-center">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4">Bereit loszulegen?</h2>
                    <p class="text-gray-300 mb-6">
                        Schau dich auf der Seite um, probiere die Tools aus und lass uns wissen, was du denkst!
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <NuxtLink to="/" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                            Zur Tool-Übersicht
                        </NuxtLink>
                        <NuxtLink to="/kontakt" class="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-semibold transition">
                            Kontakt aufnehmen
                        </NuxtLink>
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
    title: 'Über uns - Content Creator Toolbox',
    meta: [
        { name: 'description', content: 'Erfahre mehr über die Content Creator Toolbox: Unsere Mission, wie wir arbeiten und warum diese Seite existiert.' },
        { property: 'og:title', content: 'Über uns - Content Creator Toolbox' },
        { property: 'og:description', content: 'Erfahre mehr über die Content Creator Toolbox und unser Team.' }
    ]
});
</script>

<style scoped>
</style>
