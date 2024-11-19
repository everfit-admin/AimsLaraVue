<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">


    <main class="flex-grow">
      <RouterView />
    </main>
  </div>

</template>

<style scoped>
</style>
