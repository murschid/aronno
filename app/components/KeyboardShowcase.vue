<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="showcase" class="py-32 relative overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
    <!-- Background Decor -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-bgreen-100/30 dark:from-bgreen-900/10 to-transparent -z-10"></div>

    <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <!-- Text Content -->
      <div class="lg:w-1/2">
        <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
          {{ t('showcase.title_prefix') }} <span class="text-bgreen-600 dark:text-bgreen-400">{{ t('showcase.title_speed') }}</span> {{ t('showcase.title_and') }} <span class="text-dred-600 dark:text-dred-500">{{ t('showcase.title_precision') }}</span>
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          {{ t('showcase.description') }}
        </p>

        <ul class="space-y-4 mb-10">
          <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <div class="size-6 rounded-full bg-bgreen-500/20 flex items-center justify-center text-bgreen-400">
              <Icon name="lucide:check" class="size-4" />
            </div>
            {{ t('showcase.list.adaptive') }}
          </li>
          <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <div class="size-6 rounded-full bg-bgreen-500/20 flex items-center justify-center text-bgreen-400">
              <Icon name="lucide:check" class="size-4" />
            </div>
            {{ t('showcase.list.clipboard') }}
          </li>
          <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <div class="size-6 rounded-full bg-bgreen-500/20 flex items-center justify-center text-bgreen-400">
              <Icon name="lucide:check" class="size-4" />
            </div>
            {{ t('showcase.list.voice') }}
          </li>
        </ul>

        <button class="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-neutral-200 dark:shadow-none">
          {{ t('showcase.cta') }}
        </button>
      </div>

      <!-- Visual -->
      <div class="lg:w-1/2 relative group perspective-1000">
        <div class="relative transform group-hover:rotate-y-6 transition-transform duration-700 ease-out preserve-3d">
          <div class="absolute inset-0 bg-bgreen-500/20 blur-3xl -z-10 rounded-full"></div>

          <div class="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border-4 border-white dark:border-neutral-800 overflow-hidden relative z-10 ring-1 ring-neutral-200 dark:ring-white/10">
            <img src="https://placehold.co/800x600/171717/white?text=Aronno+Interface" :alt="t('showcase.alt_interface')" class="w-full h-auto opacity-100 dark:opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-10 -right-10 z-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl animate-float">
            <div class="flex items-center gap-3">
              <div class="size-10 bg-bgreen-500 rounded-full flex items-center justify-center text-white">
                <Icon name="lucide:zap" class="size-5" />
              </div>
              <div class="flex flex-col justify-center">
                <div class="text-xs text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wider mb-0.5">{{ t('showcase.stats.speed') }}</div>
                <div class="font-bold text-neutral-900 dark:text-white leading-none">{{ t('showcase.stats.wpm') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.rotate-y-6 {
  transform: rotateY(-6deg) rotateX(6deg);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
