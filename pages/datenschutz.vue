<template>
    <div class="min-h-screen bg-night text-white p-4">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
            
            <!-- Cookie Settings Link -->
            <div class="bg-blue-900/20 border border-blue-600 p-4 rounded-lg mb-6">
                <p class="text-blue-200 text-sm mb-2">
                    <strong>🍪 Cookie-Einstellungen:</strong>
                </p>
                <p class="text-gray-300 text-sm mb-3">
                    Sie möchten Ihre Cookie-Einstellungen ändern? Klicken Sie hier, um den Cookie-Banner erneut zu öffnen.
                </p>
                <button
                    onclick="localStorage.removeItem('cookie-consent'); window.location.reload();"
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition">
                    Cookie-Einstellungen öffnen
                </button>
            </div>
            
            <div class="bg-eerie-black p-6 rounded-lg space-y-8">
                <section>
                    <h2 class="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
                    
                    <h3 class="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
                    <p class="text-gray-300 mb-4">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                        passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                        persönlich identifiziert werden können.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                    <p class="text-gray-300 mb-2">
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                    </p>
                    <p class="text-gray-300 mb-4">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                        können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <p class="text-gray-300 mb-2">
                        <strong>Wie erfassen wir Ihre Daten?</strong>
                    </p>
                    <p class="text-gray-300 mb-4">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                        um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p class="text-gray-300 mb-4">
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                        Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">2. Hosting</h2>
                    <p class="text-gray-300 mb-4">
                        Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
                    </p>
                    
                    <h3 class="text-xl font-semibold mb-3 mt-6">GitHub Pages</h3>
                    <p class="text-gray-300 mb-4">
                        Diese Website wird auf GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, 
                        San Francisco, CA 94107, USA (nachfolgend „GitHub").
                    </p>
                    <p class="text-gray-300 mb-4">
                        GitHub kann beim Aufruf dieser Website technische Informationen inklusive Ihrer IP-Adresse aufzeichnen. 
                        Dies ist für die Bereitstellung und Sicherheit der Website erforderlich. Die Rechtsgrundlage ist 
                        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung 
                        unserer Website).
                    </p>
                    <p class="text-gray-300 mb-4">
                        Details entnehmen Sie der Datenschutzerklärung von GitHub: 
                        <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" 
                           target="_blank" rel="noopener noreferrer" 
                           class="text-blue-400 hover:text-blue-300 underline">
                            GitHub Privacy Statement
                        </a>
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Cloudflare</h3>
                    <p class="text-gray-300 mb-4">
                        Wir nutzen Cloudflare für die DNS-Verwaltung und Content Delivery. Anbieter ist die Cloudflare Inc., 
                        101 Townsend St., San Francisco, CA 94107, USA (nachfolgend „Cloudflare").
                    </p>
                    <p class="text-gray-300 mb-4">
                        Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Dabei wird technisch 
                        der Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare 
                        geleitet. Das versetzt Cloudflare in die Lage, den Datenverkehr zwischen Ihrem Browser und unserer 
                        Website zu analysieren und als Filter zwischen unseren Servern und potenziell bösartigem Datenverkehr 
                        aus dem Internet zu dienen.
                    </p>
                    <p class="text-gray-300 mb-4">
                        Hierbei kann Cloudflare auch Cookies oder sonstige Technologien zur Wiedererkennung von Internetnutzern 
                        einsetzen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, 
                        schnellen und effizienten Bereitstellung unserer Website).
                    </p>
                    <p class="text-gray-300 mb-4">
                        Details entnehmen Sie der Datenschutzerklärung von Cloudflare: 
                        <a href="https://www.cloudflare.com/de-de/privacypolicy/" 
                           target="_blank" rel="noopener noreferrer" 
                           class="text-blue-400 hover:text-blue-300 underline">
                            Cloudflare Privacy Policy
                        </a>
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Auftragsverarbeitung</h3>
                    <p class="text-gray-300 mb-4">
                        Wir haben mit den oben genannten Anbietern Verträge zur Auftragsverarbeitung abgeschlossen bzw. 
                        nutzen deren Standardvertragsklauseln. Diese stellen sicher, dass die Verarbeitung personenbezogener 
                        Daten unserer Websitebesucher nach den Vorgaben der DSGVO erfolgt.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    
                    <h3 class="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
                    <p class="text-gray-300 mb-4">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                        personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                        dieser Datenschutzerklärung.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                    <p class="text-gray-300 mb-4">
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <p class="text-gray-300 mb-4">
                        Arthur Kielbasa<br>
                        Blackeyestudio<br>
                        Richard-Wagner-Str. 38<br>
                        46236 Bottrop<br>
                        E-Mail: <a href="mailto:kontakt@blackeyestudio.de" class="text-blue-400 hover:text-blue-300 underline">kontakt@blackeyestudio.de</a>
                    </p>
                </section>

                <section class="bg-blue-900/20 border border-blue-600 p-6 rounded">
                    <h2 class="text-2xl font-semibold mb-4">4. Google AdSense</h2>
                    <p class="text-gray-300 mb-4">
                        Diese Website nutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited 
                        („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    
                    <h3 class="text-xl font-semibold mb-3 mt-6">Umfang der Verarbeitung</h3>
                    <p class="text-gray-300 mb-4">
                        Google AdSense verwendet Cookies und ähnliche Technologien (Web Beacons, Pixel-Tags), um personalisierte 
                        Werbung anzuzeigen und die Effektivität der Anzeigen zu messen. Dabei werden folgende Daten verarbeitet:
                    </p>
                    <ul class="text-gray-300 mb-4 list-disc list-inside space-y-1">
                        <li>IP-Adresse (in gekürzter Form)</li>
                        <li>Browser-Typ und -Version</li>
                        <li>Betriebssystem</li>
                        <li>Referrer-URL (zuvor besuchte Website)</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Anzeigeninteraktionen (Klicks, Impressionen)</li>
                        <li>Geräteinformationen und eindeutige Gerätekennungen</li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Verwendete Cookies</h3>
                    <p class="text-gray-300 mb-4">
                        Google AdSense verwendet verschiedene Cookies, unter anderem:
                    </p>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-gray-300 border border-gray-600">
                            <thead class="bg-gray-800">
                                <tr>
                                    <th class="p-2 text-left border border-gray-600">Cookie-Name</th>
                                    <th class="p-2 text-left border border-gray-600">Zweck</th>
                                    <th class="p-2 text-left border border-gray-600">Laufzeit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-gray-600">__gads</td>
                                    <td class="p-2 border border-gray-600">Registrierung und Reporting der Aktionen auf der Website nach Anzeige von Werbung</td>
                                    <td class="p-2 border border-gray-600">13 Monate</td>
                                </tr>
                                <tr class="bg-gray-800/50">
                                    <td class="p-2 border border-gray-600">__gpi</td>
                                    <td class="p-2 border border-gray-600">Google Publisher Tag für Ad-Delivery und Rendering</td>
                                    <td class="p-2 border border-gray-600">13 Monate</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-600">IDE</td>
                                    <td class="p-2 border border-gray-600">Verwendung durch DoubleClick zur Registrierung und Darstellung relevanter Werbung</td>
                                    <td class="p-2 border border-gray-600">13 Monate</td>
                                </tr>
                                <tr class="bg-gray-800/50">
                                    <td class="p-2 border border-gray-600">test_cookie</td>
                                    <td class="p-2 border border-gray-600">Prüfung der Cookie-Unterstützung des Browsers</td>
                                    <td class="p-2 border border-gray-600">15 Minuten</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Zweck und Rechtsgrundlage</h3>
                    <p class="text-gray-300 mb-4">
                        Google AdSense dient der bedarfsgerechten Gestaltung und Optimierung unserer Website sowie der 
                        Finanzierung durch Werbeeinnahmen. Die gesammelten Informationen werden verwendet, um:
                    </p>
                    <ul class="text-gray-300 mb-4 list-disc list-inside space-y-1">
                        <li>Relevante Werbung anzuzeigen</li>
                        <li>Die Häufigkeit der Anzeigenschaltung zu steuern</li>
                        <li>Die Effektivität von Werbekampagnen zu messen</li>
                        <li>Betrug zu verhindern</li>
                    </ul>
                    <p class="text-gray-300 mb-4">
                        Die Rechtsgrundlage für den Einsatz von Google AdSense ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) 
                        bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), wenn Sie über unseren Cookie-Banner zugestimmt haben. 
                        Unser berechtigtes Interesse liegt in der Finanzierung und Optimierung unseres Webangebots.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Datenübermittlung in Drittländer</h3>
                    <p class="text-gray-300 mb-4">
                        Die durch Cookies erzeugten Informationen werden an Google-Server in den USA übertragen und dort gespeichert. 
                        Google hat sich dem EU-US Data Privacy Framework unterworfen und ist zertifiziert. Die Übermittlung erfolgt 
                        auf Grundlage der EU-Standardvertragsklauseln.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
                    <p class="text-gray-300 mb-4">
                        Die meisten Google-Cookies haben eine Laufzeit von 13 Monaten. Google kann die Speicherdauer jedoch anpassen. 
                        Weitere Details finden Sie in der Datenschutzerklärung von Google: 
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" 
                           class="text-blue-400 hover:text-blue-300 underline">
                            Google Werbetechnologien
                        </a>
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Widerspruch und Opt-Out Möglichkeiten</h3>
                    <p class="text-gray-300 mb-4">
                        Sie haben mehrere Möglichkeiten, der Verwendung von Google AdSense zu widersprechen:
                    </p>
                    <div class="space-y-3 mb-4">
                        <div class="bg-gray-800 p-4 rounded">
                            <p class="font-semibold text-white mb-2">1. Cookie-Banner</p>
                            <p class="text-gray-300 text-sm">
                                Über unseren Cookie-Banner können Sie Marketing-Cookies ablehnen oder Ihre Einstellungen jederzeit ändern.
                            </p>
                        </div>
                        <div class="bg-gray-800 p-4 rounded">
                            <p class="font-semibold text-white mb-2">2. Browser-Einstellungen</p>
                            <p class="text-gray-300 text-sm">
                                Sie können Cookies in Ihren Browser-Einstellungen blockieren oder löschen. Beachten Sie, dass 
                                dadurch möglicherweise nicht alle Funktionen dieser Website verfügbar sind.
                            </p>
                        </div>
                        <div class="bg-gray-800 p-4 rounded">
                            <p class="font-semibold text-white mb-2">3. Google Ads Settings</p>
                            <p class="text-gray-300 text-sm mb-2">
                                Personalisierte Werbung können Sie direkt bei Google deaktivieren:
                            </p>
                            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline text-sm">
                                → Google Ads Settings
                            </a>
                        </div>
                        <div class="bg-gray-800 p-4 rounded">
                            <p class="font-semibold text-white mb-2">4. Browser-Plugin</p>
                            <p class="text-gray-300 text-sm mb-2">
                                Installieren Sie das Google Analytics Opt-out Browser Add-on:
                            </p>
                            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline text-sm">
                                → Browser-Plugin herunterladen
                            </a>
                        </div>
                        <div class="bg-gray-800 p-4 rounded">
                            <p class="font-semibold text-white mb-2">5. Netzwerkwerbeinitiative</p>
                            <p class="text-gray-300 text-sm mb-2">
                                Deaktivieren Sie Cookies von Drittanbietern über die Network Advertising Initiative:
                            </p>
                            <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline text-sm">
                                → NAI Opt-Out Tool
                            </a>
                        </div>
                    </div>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Weitere Informationen</h3>
                    <p class="text-gray-300 mb-2">
                        Ausführliche Informationen zu Google AdSense und Datenschutz:
                    </p>
                    <ul class="text-gray-300 space-y-2">
                        <li>
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline">
                                → Google Datenschutzerklärung
                            </a>
                        </li>
                        <li>
                            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline">
                                → Google Werbetechnologien
                            </a>
                        </li>
                        <li>
                            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 underline">
                                → Datennutzung durch Google bei Partnerwebsites
                            </a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">5. Server-Log-Dateien</h2>
                    <p class="text-gray-300 mb-4">
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                        die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul class="text-gray-300 mb-4 list-disc list-inside space-y-1">
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p class="text-gray-300">
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                        Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">6. Amazon Partnerprogramm (Affiliate Links)</h2>
                    <p class="text-gray-300 mb-4">
                        Diese Website nimmt am Amazon EU-Partnerprogramm teil. Wir verwenden sogenannte Affiliate-Links, 
                        die auf Produkte bei Amazon.de verweisen. Wenn Sie über einen solchen Link ein Produkt kaufen, 
                        erhalten wir eine kleine Provision von Amazon, ohne dass für Sie zusätzliche Kosten entstehen.
                    </p>
                    
                    <h3 class="text-xl font-semibold mb-3 mt-6">Umfang der Verarbeitung</h3>
                    <p class="text-gray-300 mb-4">
                        Amazon setzt Cookies ein, um die Herkunft von Bestellungen nachvollziehen zu können. Dadurch kann 
                        Amazon erkennen, dass Sie den Partnerlink auf dieser Website geklickt haben.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Rechtsgrundlage</h3>
                    <p class="text-gray-300 mb-4">
                        Die Rechtsgrundlage für die Nutzung von Amazon Affiliate Links ist Art. 6 Abs. 1 lit. f DSGVO 
                        (berechtigtes Interesse). Unser berechtigtes Interesse liegt in der Finanzierung und Optimierung 
                        unseres Webangebots durch Werbeeinnahmen.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Weitere Informationen</h3>
                    <p class="text-gray-300 mb-4">
                        Die Datenschutzerklärung von Amazon finden Sie hier: 
                        <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                            https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                        </a>
                    </p>
                    
                    <p class="text-gray-300">
                        Weitere Informationen zum Amazon Partnerprogramm: 
                        <a href="https://partnernet.amazon.de/help/operating/agreement" target="_blank" class="text-blue-400 hover:text-blue-300 underline">
                            https://partnernet.amazon.de/help/operating/agreement
                        </a>
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-4">7. Ihre Rechte</h2>
                    <p class="text-gray-300 mb-4">
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
                        deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder 
                        Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich 
                        jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
                    <p class="text-gray-300 mb-4">
                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
                    <p class="text-gray-300 mb-4">
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                        automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                        aushändigen zu lassen.
                    </p>

                    <h3 class="text-xl font-semibold mb-3 mt-6">Widerspruch gegen Werbe-E-Mails</h3>
                    <p class="text-gray-300">
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht 
                        ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
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
  title: 'Datenschutzerklärung',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung und Informationen zur Datenverarbeitung der Content Creator Toolbox' }
  ]
});
</script>

<style scoped>
</style>

