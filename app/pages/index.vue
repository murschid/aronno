<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <BentoGrid />
      <KeyboardShowcase />
    </main>
    <AppFooter />
  </div>
</template>
