import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { defineNuxtConfig } from "nuxt/config";

// 定義海洋藍主題
const OceanBlueTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6", // 主要顏色
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A",
      950: "#172554",
    },
    secondary: {
      50: "#ECFDF5",
      100: "#D1FAE5",
      200: "#A7F3D0",
      300: "#6EE7B7",
      400: "#34D399",
      500: "#10B981", // 次要顏色
      600: "#059669",
      700: "#047857",
      800: "#065F46",
      900: "#064E3B",
      950: "#022C22",
    },
  },
});

// 定義日落橙主題
const SunsetOrangeTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      200: "#FED7AA",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#F97316", // 主要顏色
      600: "#EA580C",
      700: "#C2410C",
      800: "#9A3412",
      900: "#7C2D12",
      950: "#431407",
    },
    secondary: {
      50: "#EEF2FF",
      100: "#E0E7FF",
      200: "#C7D2FE",
      300: "#A5B4FC",
      400: "#818CF8",
      500: "#6366F1", // 次要顏色
      600: "#4F46E5",
      700: "#4338CA",
      800: "#3730A3",
      900: "#312E81",
      950: "#1E1B4B",
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura, // 默認主題
        options: {
          themes: [
            {
              name: "ocean-blue",
              preset: OceanBlueTheme,
            },
            {
              name: "sunset-orange",
              preset: SunsetOrangeTheme,
            },
          ],
        },
      },
    },
  },

  css: [
    "primeicons/primeicons.css",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
  ],

  build: {
    transpile: ["primevue"],
  },

  plugins: ["~/plugins/primevue.ts", "~/plugins/swiper.ts"],

  app: {
    head: {
      title: "ONOFF",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
