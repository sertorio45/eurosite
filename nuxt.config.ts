export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/image', 
    '@nuxtjs/google-fonts', 
    'nuxt-mail'
  ],

  nitro: {
    preset: 'netlify'
  },

  runtimeConfig: {
    DB_SERVERNAME: process.env.DB_SERVERNAME,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    public: {
      apiBase: '/api/'
    }
  },

  app: {
    baseURL: '/euro',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descrição da GS Studio, uma agência especializada em design, marketing e tecnologia.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'design, marketing, tecnologia, agência, GS Studio' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'GS Studio' },
        { property: 'og:title', content: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia' },
        { property: 'og:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://www.gsstudio.com.br' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia' },
        { property: 'twitter:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  },

  mail: {
    message: {
      from: 'Lead Site <naoresponda@euroanglocursos.com.br>',
      to: 'giovannistr@gmail.com',
    },
    smtp: {
      host: 'mail.euroanglocursos.com.br',
      port: 587,
      auth: {
        user: 'naoresponda@euroanglocursos.com.br',
        pass: 'jcki6*L0$!ET',
      },
    },
  },


  build: {
    transpile: [], // Remover a transpilação do Boxicons
  },

  googleFonts: {
    families: {
      'Josefin': [400, 700],
      'Poppins': [400, 700],
    },
    download: false,
  },

  css: [
    'animate.css/animate.min.css',
    '@/assets/scss/custom.scss',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  image: {
    domains: [
      's3.gsstudio.com.br', 
      'placeholder.com', 
      'gsstudio.com.br',
      'euroanglocursos.com.br'
    ],
    quality: 75,
    format: ['webp', 'avif'], // Melhorando a compatibilidade de imagens
    dir: 'assets/img',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true, 
        },
      },
    },
  },

  compatibilityDate: '2024-09-06',

  devtools: {
    enabled: true,
  },
});
