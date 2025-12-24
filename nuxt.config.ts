// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Scripts folder is for local development only and won't be deployed
  ignore: [
    'scripts/**/*',
    'tools/**/*'
  ],
  runtimeConfig: {
    public: {
      apiBase: '/api/',
    }
  },
  css: [
    '~/assets/css/main.css'
  ],

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