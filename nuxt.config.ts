// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    viewer: true,
  },

  nitro: {
    routeRules: {
      '/**': { cache: { override: true } }
    }
  },

  compatibilityDate: '2024-11-23'
})