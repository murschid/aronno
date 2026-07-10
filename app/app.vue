<script setup lang="ts">
const { locale } = useI18n()

useHead({
  title: 'Aronno Keyboard',
  meta: [
    { name: 'description', content: 'The most advanced Bengali keyboard for Android.' }
  ]
})
</script>

<template>
  <div class="min-h-screen selection:bg-bgreen-500/30">
    <NuxtPage />
  </div>
</template>
