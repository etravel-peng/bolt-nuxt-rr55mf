export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: '旅游直通车',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  experimental: {
    crossOriginPrefetch: false
  },
  nitro: {
    compressPublicAssets: true
  }
})