import tailwindcss from '@tailwindcss/vite';
import Lara from '@primeuix/themes/lara';
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    'nuxt-swiper',
    '@nuxtjs/i18n',
  ],
  primevue: {
    autoImport: true,
    options: {
      ripple: false,
      unstyled: false, // ✅ 使用官方主題樣式時請設 false（預設值)
      theme: {
        preset: Aura,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    langDir: 'i18n/locales',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.ts',
      },
      {
        code: 'zh-tw',
        language: 'zh-TW',
        file: 'zh-tw.ts',
      },
    ],
    defaultLocale: 'zh-tw',
    lazy: true,
    restructureDir: false,
  },
});
