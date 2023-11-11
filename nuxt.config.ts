// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt'
  ],
  app: {
    head: {
      title: 'Nuxt.js App'
    }
  }
})
