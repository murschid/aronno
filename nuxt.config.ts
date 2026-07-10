// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
    preference: 'system',
  },
  i18n: {
    locales: [
      { code: 'bn', name: 'বাংলা', file: 'bn.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'bn',
    langDir: 'locales',
    strategy: 'no_prefix',
  },
})
