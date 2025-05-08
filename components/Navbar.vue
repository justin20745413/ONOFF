<template>
  <div class="mt-5">
    <nav
      class="bg-black text-white py-4 px-6 rounded-full transition-all duration-200"
    >
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div
            :class="[
              'w-8 h-8',
              'rounded-full flex items-center justify-center text-white font-bold',
              isOrange ? 'bg-orange-500' : 'bg-blue-500',
            ]"
          >
            J
          </div>
          <h1 class="text-xl font-semibold">{{ $t('nav.brandName') }}</h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-white transition duration-200"
            >{{ $t('nav.home') }}</NuxtLink
          >
          <NuxtLink
            to="/about"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-gray-400 transition duration-200"
            >{{ $t('nav.about') }}</NuxtLink
          >
          <NuxtLink
            to="/services"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-gray-400 transition duration-200"
            >{{ $t('nav.services') }}</NuxtLink
          >
          <NuxtLink
            to="/portfolio"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-gray-400 transition duration-200"
            >{{ $t('nav.portfolio') }}</NuxtLink
          >
          <NuxtLink
            to="/blog"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-gray-400 transition duration-200"
            >{{ $t('nav.blog') }}</NuxtLink
          >
          <NuxtLink
            to="/contact"
            :class="isOrange ? 'hover:text-orange-500' : 'hover:text-blue-500'"
            class="text-gray-400 transition duration-200"
            >{{ $t('nav.contact') }}</NuxtLink
          >
        </div>

        <!-- Theme & Language Toggle -->
        <div class="hidden md:flex items-center">
          <ThemeLanguageSwitcher @theme-change="updateTheme" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-white focus:outline-none"
          ></button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu with i18n translations -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-900 text-white">
      <!-- ... update mobile menu items with $t translations ... -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeLanguageSwitcher from './ThemeLanguageSwitcher.vue';

const { t, locale } = useI18n();
const mobileMenuOpen = ref(false);
const isOrange = ref(true);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const updateTheme = (themeIsOrange) => {
  isOrange.value = themeIsOrange;
};

const handleLanguageChange = (event) => {
  console.log('语言已切换到:', event.detail.locale);
};

onMounted(() => {
  window.addEventListener('language-changed', handleLanguageChange);
});

onBeforeUnmount(() => {
  window.removeEventListener('language-changed', handleLanguageChange);
});
</script>

<style lang="scss" scoped></style>
