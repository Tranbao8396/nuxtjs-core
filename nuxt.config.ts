// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    devtools: { enabled: true }
  },
})
