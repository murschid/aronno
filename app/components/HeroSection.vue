<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center justify-center flex flex-col bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
    <!-- Background Effects -->
    <!-- Background Effects -->
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bgreen-100/40 dark:from-bgreen-900/20 via-white dark:via-neutral-950 to-white dark:to-neutral-950"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-bgreen-400/20 dark:bg-bgreen-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-[800px] h-[600px] bg-dred-400/10 dark:bg-dred-500/5 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-screen"></div>

    <div class="container mx-auto px-4 text-center z-10">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-bgreen-900/30 border border-bgreen-200 dark:border-bgreen-500/30 mb-8 animate-fade-in-up md:mb-12 shadow-sm dark:shadow-none">
        <span class="relative flex size-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-bgreen-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full size-2 bg-bgreen-500"></span>
        </span>
        <span class="text-xs font-medium text-bgreen-700 dark:text-bgreen-300 uppercase tracking-wider">{{ t('hero.badge') }}</span>
      </div>

      <!-- Heading -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up animation-delay-150 drop-shadow-sm dark:drop-shadow-2xl">
        <span class="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
          {{ t('hero.title') }}
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300 font-light leading-relaxed">
        {{ t('hero.subtitle') }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-450">
        <button class="relative group px-8 py-4 bg-bgreen-600 text-white rounded-2xl font-bold text-lg shadow-[0_20px_40px_-15px_rgba(0,103,71,0.3)] dark:shadow-[0_20px_50px_-15px_rgba(0,103,71,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(0,103,71,0.4)] hover:bg-bgreen-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-shimmer"></div>
          <span class="flex items-center gap-2 relative">
            <Icon name="lucide:download" class="w-5 h-5" />
            {{ t('hero.cta') }}
          </span>
        </button>

        <button class="px-8 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white rounded-2xl font-bold text-lg hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none hover:shadow-md">
          <Icon name="simple-icons:github" class="w-5 h-5" />
          {{ t('hero.github') }}
        </button>
      </div>

      <!-- Preview Image (Mockup) -->
      <div class="mt-20 relative z-10 animate-fade-in-up animation-delay-600">
        <div class="relative mx-auto w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-[2rem] border-8 border-white dark:border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-neutral-200 dark:ring-white/10">
          <img src="https://placehold.co/1200x800/171717/white?text=Aronno+Keyboard+Mockup" :alt="t('hero.alt_mockup')" class="w-full h-auto opacity-100 dark:opacity-90 transition-opacity" />
          <!-- Replaced glow with cleaner shadow for light mode -->
          <div class="absolute -inset-1 bg-gradient-to-b from-bgreen-500/20 to-transparent rounded-[2rem] -z-10 blur-xl opacity-0 dark:opacity-100"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-450 {
  animation-delay: 450ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
</style>
