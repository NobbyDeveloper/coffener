// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', "@nuxt/image"],
  app: {
    head: {
      title: 'Coffener: Buy a Coffee!',

    }
  },
  components: [
    '~/components',
    '~/components/assets',
  ],
})