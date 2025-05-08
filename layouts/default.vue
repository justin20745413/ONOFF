<template>
  <div class="mx-10">
    <Navbar />
    <div class="mx-12">
      <slot />
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue';
</script>
