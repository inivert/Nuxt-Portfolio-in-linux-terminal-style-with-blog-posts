// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  googleFonts: {
    families: {
      'JetBrains+Mono': [400, 700],
      'Inter': [400, 500, 600, 700]
    },
    display: 'swap'
  },
  app: {
    head: {
      title: 'Linux & Network Security Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Network Security & Linux Professional Portfolio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
