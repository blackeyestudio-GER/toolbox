// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '/api/',
    }
  },
  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      title: 'Content Creator Toolbox - Kostenlose Tools für Streamer & Creator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kostenlose Tools, Guides und Ressourcen für Content Creator, Streamer und YouTuber. OBS Studio Anleitungen, Hardware-Empfehlungen und mehr.' },
        { name: 'keywords', content: 'Streaming, OBS Studio, Content Creator, Twitch, YouTube, Hardware Guide, Streaming Setup, Kostenlose Tools' },
        { name: 'author', content: 'Arthur Kielbasa - Blackeyestudio' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blackeyestudio.de/' },
        { property: 'og:title', content: 'Content Creator Toolbox - Kostenlose Tools für Streamer' },
        { property: 'og:description', content: 'Kostenlose Tools, Guides und Ressourcen für Content Creator. OBS Studio Anleitungen, Hardware-Empfehlungen und mehr.' },
        { property: 'og:image', content: 'https://blackeyestudio.de/og-image.png' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:site_name', content: 'Content Creator Toolbox' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://blackeyestudio.de/' },
        { name: 'twitter:title', content: 'Content Creator Toolbox - Kostenlose Tools für Streamer' },
        { name: 'twitter:description', content: 'Kostenlose Tools, Guides und Ressourcen für Content Creator. OBS Studio Anleitungen, Hardware-Empfehlungen und mehr.' },
        { name: 'twitter:image', content: 'https://blackeyestudio.de/og-image.png' },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#111212' }
      ],
      link: [
        { rel: 'canonical', href: 'https://blackeyestudio.de/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  routeRules: {
    '/api/**': { proxy: (process.env.API_HOST || 'http://localhost:8090') + '/**' },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint"
  ],
})