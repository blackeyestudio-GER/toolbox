<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-4xl mx-auto">
            <!-- Navigation -->
            <AppNavigation />
            
            <h1 class="text-4xl font-bold mb-8">Impressum</h1>
            
            <div class="bg-eerie-black p-6 rounded-lg space-y-6">
                <section>
                    <h2 class="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                    <p class="text-gray-300 mb-2">
                        <strong>Betreiber:</strong><br>
                        [DEIN NAME / FIRMENNAME]<br>
                        [DEINE STRASSE UND HAUSNUMMER]<br>
                        [DEINE PLZ UND STADT]
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Kontakt</h2>
                    <p class="text-gray-300">
                        <strong>E-Mail:</strong> [DEINE E-MAIL]<br>
                        <strong>Telefon:</strong> [OPTIONAL - DEINE TELEFONNUMMER]
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p class="text-gray-300">
                        [DEIN NAME]<br>
                        [DEINE ADRESSE]
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
                    <p class="text-gray-300 mb-4">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                            https://ec.europa.eu/consumers/odr/
                        </a>
                    </p>
                    <p class="text-gray-300">
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                    <p class="text-gray-300">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
                    <p class="text-gray-300 mb-4">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p class="text-gray-300">
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Haftung für Links</h2>
                    <p class="text-gray-300 mb-4">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                    <p class="text-gray-300">
                        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                        Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                        zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">Urheberrecht</h2>
                    <p class="text-gray-300">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                </section>

                <section class="bg-yellow-900/20 border border-yellow-600 p-4 rounded">
                    <p class="text-yellow-200 text-sm">
                        <strong>⚠️ WICHTIG:</strong> Bitte ersetze alle Platzhalter in [ECKIGEN KLAMMERN] mit deinen echten Daten!
                    </p>
                </section>
            </div>

            <div class="mt-8">
                <NuxtLink to="/" class="text-blue-400 hover:text-blue-300 underline">
                    ← Zurück zur Startseite
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Impressum',
  meta: [
    { name: 'description', content: 'Impressum und rechtliche Informationen der Content Creator Toolbox' }
  ]
});
</script>

<style scoped>
</style>

