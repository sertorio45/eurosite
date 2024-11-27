export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxt/image', 
    '@nuxtjs/google-fonts', 
    'nuxt-mail',
  ],

  plugins: [
    
  ],

  nitro: {
    preset: 'netlify_builder'
  },

    runtimeConfig: {
      // Variáveis privadas (disponíveis apenas no lado do servidor)
      NUXT_DB_SERVERNAME: process.env.NUXT_DB_SERVERNAME,
      NUXT_DB_USERNAME: process.env.NUXT_DB_USERNAME,
      NUXT_DB_PASSWORD: process.env.NUXT_DB_PASSWORD,
      NUXT_DB_DATABASE: process.env.NUXT_DB_DATABASE,

      apiSecret: '123',
  
      // Variáveis públicas (disponíveis no cliente)
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api/' // Use uma variável de ambiente, se aplicável
      }
    },
    
    routeRules: {
      // Generated at build time for SEO purpose
      '/': { prerender: true },
      },

  app: {
    baseURL: '/',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descrição da GS Studio, uma agência especializada em design, marketing e tecnologia.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'design, marketing, tecnologia, agência, GS Studio' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'GS Studio' },
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
    transpile: [], 
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
    format: ['webp', 'png', 'jpg', 'jpeg', 'svg'], // Melhorando a compatibilidade de imagens
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
    enabled: false,
  },
});
