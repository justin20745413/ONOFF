<template>
  <div>
    <button
      @click="toggle"
      :class="[
        'text-white px-4 py-2 rounded-full text-sm font-medium transition duration-200',
        isOrange
          ? 'bg-orange-500 hover:bg-orange-600'
          : 'bg-blue-500 hover:bg-blue-600',
      ]"
    >
      {{ $t('nav.switchLang') }} / {{ $t('nav.switchTheme') }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
import { useNuxtApp } from '#app';

const emit = defineEmits(['theme-change']);
const { locale, setLocale } = useI18n();
const isOrange = ref(true);
const nuxtApp = useNuxtApp();

const toggle = async () => {
  // 切换主题
  isOrange.value = !isOrange.value;
  emit('theme-change', isOrange.value);

  // 切换语言
  const newLocale = locale.value === 'en' ? 'zh-tw' : 'en';

  try {
    await setLocale(newLocale);

    const event = new CustomEvent('language-changed', {
      detail: { locale: newLocale },
    });
    window.dispatchEvent(event);
  } catch (e) {
    console.error('切换语言失败:', e);
  }
};
</script>
