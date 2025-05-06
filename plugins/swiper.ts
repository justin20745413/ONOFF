import { defineNuxtPlugin } from "nuxt/app";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { App } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  const vueApp: App = nuxtApp.vueApp;

  vueApp.component("Swiper", Swiper);
  vueApp.component("SwiperSlide", SwiperSlide);
});
