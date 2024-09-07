// nuxt.config.ts
export default defineNuxtConfig({
  // Configurações do aplicativo
  app: {
    baseURL: '/euro', // Defina o base URL corretamente dentro de app
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
        { property: 'og:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia, oferecendo soluções completas para empresas.' },
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


  // Arquivos CSS globais
  css: [
    'animate.css/animate.min.css',
    '@/assets/scss/custom.scss',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  // Configurações do Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true, // Silencia avisos de depreciação em dependências
        },
      },
    },
  },

  

  compatibilityDate: '2024-09-06',
  modules: ['@nuxt/image'],
});