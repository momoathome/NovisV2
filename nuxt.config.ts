import { defineNuxtConfig } from 'nuxt'
import Unocss from 'unocss/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: 'noMuciBcibFRCQDOfiiSdMb4tGQBVxELAzrP7hRBw5a9FSj6HI2rJdK9pADZKdRm', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: 'https://api.novis-cms.com/v1', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  
  // app
  app: {
    head: {
      title: 'NovisV2',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NovisV2 Template',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@unocss/nuxt'],
  css: ['~/assets/normalize.css', '~/assets/main.css', ],

   // https://v3.nuxtjs.org/api/configuration/nuxt.config#vite
   vite: {
    plugins: [
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      // see nuxt.config.ts "css" for css loading
      Unocss(),
    ],
  },
})
