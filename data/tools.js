// Centralized tool data with detailed information
// Each tool should have a slug for URL generation

export const allTools = [
    {
        title: 'Crowd Control',
        slug: 'crowd-control',
        description: 'Alternative zu ChallengePicker: Lass deine Zuschauer direkt ins Spielgeschehen eingreifen. Die Community kann durch verschiedene Aktionen deinen Stream beeinflussen und für chaotische oder hilfreiche Momente sorgen.',
        detailedDescription: 'Crowd Control ist ein innovatives Tool, das es deinen Zuschauern ermöglicht, direkt in dein Spielgeschehen einzugreifen. Stell dir vor: Deine Community kann Items spawnen, Gegner beschwören, deine Gesundheit beeinflussen oder andere spielverändernde Aktionen auslösen – alles in Echtzeit während du streamst.',
        tags: ['Stream-Interaktion', 'Games'],
        link: 'https://crowdcontrol.live/',
        category: 'Stream-Interaktion',
        status: 'done',
        cost: 'Kostenlos',
        platform: 'Web-basiert',
        features: [
            'Echtzeit-Spiel-Interaktion',
            'Unterstützung für hunderte Spiele',
            'Einfache Integration mit OBS',
            'Community-Management Tools',
            'Pay-what-you-want Modell'
        ],
        pros: [
            'Komplett kostenlos nutzbar',
            'Sehr einfach einzurichten',
            'Große Spiele-Bibliothek',
            'Macht Streams interaktiver',
            'Gute Community-Unterstützung'
        ],
        cons: [
            'Nicht alle Spiele unterstützt',
            'Kann manchmal zu chaotisch werden',
            'Benötigt stabile Internetverbindung'
        ],
        useCases: [
            'Interaktive Gaming-Streams',
            'Community-Engagement steigern',
            'Spielerische Challenges mit Zuschauern',
            'Einzigartige Stream-Erlebnisse schaffen'
        ],
        howToUse: [
            'Registriere dich kostenlos auf crowdcontrol.live',
            'Verbinde deinen Twitch/YouTube Account',
            'Wähle das Spiel aus, das du streamst',
            'Installiere die Crowd Control Software',
            'Starte deinen Stream und lass deine Community loslegen!'
        ],
        tips: [
            'Beginne mit weniger aggressiven Aktionen, um dich einzugewöhnen',
            'Setze Limits für bestimmte Aktionen, damit es nicht zu chaotisch wird',
            'Nutze die Chat-Befehle, um deine Community zu informieren',
            'Teste das Tool vorher offline, bevor du es live nutzt'
        ]
    },
    {
        title: 'Thumbnail Previewer',
        slug: 'thumbnail-previewer',
        description: 'Sieh dir an, wie dein YouTube-Thumbnail im direkten Vergleich zu anderen Videos aussieht. Teste verschiedene Designs und optimiere die Klickrate deiner Videos bevor du sie hochlädst.',
        detailedDescription: 'Der Thumbnail Previewer ist ein unverzichtbares Tool für jeden YouTuber, der seine Klickrate optimieren will. Du kannst dein Thumbnail direkt im YouTube-Layout sehen und mit anderen Videos vergleichen, bevor du es hochlädst.',
        tags: ['Grafik', 'Utility'],
        link: 'https://thumbnail-preview.tebbe.dev/',
        category: 'Grafik',
        status: 'done',
        cost: 'Kostenlos',
        platform: 'Web-basiert',
        features: [
            'Echtes YouTube-Layout',
            'Vergleich mit anderen Videos',
            'Mobile und Desktop Preview',
            'Keine Anmeldung nötig'
        ],
        pros: [
            'Komplett kostenlos',
            'Sehr einfach zu nutzen',
            'Schnelle Ergebnisse',
            'Keine Installation nötig'
        ],
        cons: [
            'Nur für YouTube optimiert',
            'Keine Bearbeitungsfunktionen'
        ],
        useCases: [
            'Thumbnail-Design testen',
            'Klickrate optimieren',
            'Mit Konkurrenz vergleichen',
            'Mobile Ansicht prüfen'
        ],
        howToUse: [
            'Öffne thumbnail-preview.tebbe.dev',
            'Lade dein Thumbnail-Bild hoch',
            'Sieh dir die Preview an',
            'Vergleiche mit anderen Videos',
            'Passe dein Design an und teste erneut'
        ],
        tips: [
            'Teste verschiedene Designs bevor du hochlädst',
            'Achte auf die mobile Ansicht – die ist wichtig!',
            'Vergleiche mit erfolgreichen Videos in deiner Nische',
            'Nutze kontrastreiche Farben für bessere Sichtbarkeit'
        ]
    },
    {
        title: 'Todoist',
        slug: 'todoist',
        description: 'Eine übersichtliche und benutzerfreundliche To-Do-Listen App. Perfekt um deine Content-Planung, Upload-Zeitpläne und Stream-Vorbereitung zu organisieren. Funktioniert auf allen Geräten.',
        detailedDescription: 'Todoist ist meine persönliche Empfehlung für Content-Planung. Die App hilft dir dabei, alle deine Aufgaben im Blick zu behalten – von Video-Ideen über Upload-Zeitpläne bis hin zur Stream-Vorbereitung.',
        tags: ['Organisation'],
        link: 'https://www.todoist.com/de',
        category: 'Organisation',
        status: 'done',
        cost: 'Kostenlos (Premium optional)',
        platform: 'Web, iOS, Android, Desktop',
        features: [
            'Projekte und Unteraufgaben',
            'Wiederkehrende Aufgaben',
            'Prioritäten und Labels',
            'Kollaboration mit anderen',
            'Integration mit Kalendern'
        ],
        pros: [
            'Sehr intuitiv zu bedienen',
            'Funktioniert auf allen Geräten',
            'Kostenlose Version reicht für die meisten',
            'Schnelle Synchronisation',
            'Gute Filter-Funktionen'
        ],
        cons: [
            'Premium-Features kosten',
            'Kann bei vielen Projekten unübersichtlich werden'
        ],
        useCases: [
            'Content-Planung',
            'Upload-Zeitpläne verwalten',
            'Stream-Vorbereitung',
            'Ideen sammeln und organisieren'
        ],
        howToUse: [
            'Registriere dich kostenlos',
            'Erstelle Projekte für verschiedene Content-Bereiche',
            'Füge Aufgaben hinzu mit Fälligkeitsdaten',
            'Nutze Labels für bessere Organisation',
            'Synchronisiere über alle deine Geräte'
        ],
        tips: [
            'Nutze wiederkehrende Aufgaben für regelmäßige Uploads',
            'Erstelle separate Projekte für verschiedene Content-Typen',
            'Nutze die Prioritäten-Funktion für wichtige Aufgaben',
            'Die kostenlose Version reicht für die meisten Creator'
        ]
    },
    {
        title: 'DaVinci Resolve',
        slug: 'davinci-resolve',
        description: 'Professionelle Video-Editing-Software, die in Hollywood-Produktionen verwendet wird - komplett kostenlos. Inkl. Color Grading, Audio-Editing und VFX. Top-Empfehlung für professionelles Video-Editing!',
        detailedDescription: 'DaVinci Resolve ist die beste kostenlose Video-Editing-Software, die ich kenne. Sie wird tatsächlich in Hollywood-Produktionen verwendet und bietet Features, die sonst nur in teuren Abo-Software zu finden sind.',
        tags: ['Utility', 'Grafik'],
        link: 'https://www.blackmagicdesign.com/de/products/davinciresolve',
        category: 'Utility',
        status: 'done',
        cost: 'Kostenlos',
        platform: 'Windows, Mac, Linux',
        features: [
            'Professionelles Video-Editing',
            'Color Grading (Fusion)',
            'Audio-Editing',
            'VFX und Compositing',
            'Multi-Cam Editing'
        ],
        pros: [
            'Komplett kostenlos',
            'Keine Wasserzeichen',
            'Professionelle Features',
            'Regelmäßige Updates',
            'Sehr gute Performance'
        ],
        cons: [
            'Steile Lernkurve',
            'Benötigt viel RAM (16GB empfohlen)',
            'UI kann am Anfang überwältigend sein'
        ],
        useCases: [
            'YouTube-Videos schneiden',
            'Stream-Highlights erstellen',
            'Professionelle Video-Produktion',
            'Color Grading und Farbkorrektur'
        ],
        howToUse: [
            'Lade DaVinci Resolve von der offiziellen Website herunter',
            'Installiere die Software (kostenlos)',
            'Importiere deine Video-Clips',
            'Beginne mit dem Schnitt im Timeline',
            'Nutze die Color-Grading-Funktionen für professionelle Looks'
        ],
        tips: [
            'Fang mit einfachen Projekten an, um dich einzugewöhnen',
            'Nutze YouTube-Tutorials für die Basics',
            'Die kostenlose Version reicht für die meisten Creator',
            'Investiere in mehr RAM, wenn du mit 4K arbeitest'
        ]
    },
    {
        title: 'OBS Studio',
        slug: 'obs-studio',
        description: 'Der Standard! Open Source Streaming Software. Weit verbreitet bei professionellen Streamern. Unbegrenzte Möglichkeiten mit Plugins. Komplett kostenlos und sehr stabil.',
        detailedDescription: 'OBS Studio ist die Standard-Software für Streaming. Sie ist kostenlos, Open Source und wird von den meisten professionellen Streamern verwendet.',
        tags: ['Utility', 'Stream-Interaktion'],
        link: 'https://obsproject.com/',
        category: 'Utility',
        status: 'done',
        cost: 'Kostenlos',
        platform: 'Windows, Mac, Linux',
        features: [
            'Szenen und Quellen',
            'Filter und Effekte',
            'Plugin-Support',
            'Multi-Platform Streaming',
            'Aufnahme-Funktion'
        ],
        pros: [
            'Komplett kostenlos',
            'Sehr stabil',
            'Große Community',
            'Viele Plugins verfügbar',
            'Regelmäßige Updates'
        ],
        cons: [
            'Kann am Anfang kompliziert wirken',
            'Benötigt etwas Einarbeitungszeit'
        ],
        useCases: [
            'Twitch/YouTube Streaming',
            'Aufnahme von Gameplay',
            'Multi-Cam Setup',
            'Professionelle Streams'
        ],
        howToUse: [
            'Lade OBS Studio herunter',
            'Verbinde deinen Streaming-Account',
            'Erstelle Szenen für verschiedene Ansichten',
            'Füge Quellen hinzu (Spiel, Webcam, etc.)',
            'Starte deinen Stream!'
        ],
        tips: [
            'Nutze meinen OBS Guide für detaillierte Anleitungen',
            'Beginne mit einfachen Szenen',
            'Teste deine Einstellungen vor dem Stream',
            'Nutze Plugins für erweiterte Funktionen'
        ]
    }
];

// Helper function to generate slug from title
export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
