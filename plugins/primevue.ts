import { defineNuxtPlugin } from "nuxt/app";

import { ref } from "vue";

// 更新主題切換函數
export const activeThemeName = ref("aura");

export function switchPrimeTheme(themeName: string) {
  activeThemeName.value = themeName;
  // 在這裡可以添加更多主題切換的邏輯
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const savedTheme = localStorage.getItem("app-active-theme") || "aura";
    switchPrimeTheme(savedTheme);
  }
});
