<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    key: 'privacy',
    icon: 'lucide:shield-check',
    colSpan: 'lg:col-span-2'
  },
  {
    key: 'typing',
    icon: 'lucide:zap',
    colSpan: 'lg:col-span-1'
  },
  {
    key: 'themes',
    icon: 'lucide:palette',
    colSpan: 'lg:col-span-1'
  },
  {
    key: 'voice',
    icon: 'lucide:mic',
    colSpan: 'lg:col-span-2'
  }
]
</script>

<template>
  <section id="features" class="py-24 bg-slate-50 dark:bg-neutral-950 px-4 transition-colors duration-300">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16 relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent mb-6 tracking-tight">
          {{ t('features.title') }}
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">{{ t('features.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <div v-for="(feature, index) in features" :key="feature.key" :class="['group relative p-8 rounded-3xl bg-white/40 dark:bg-neutral-900/40 border border-white/60 dark:border-white/5 hover:border-bgreen-500/30 dark:hover:border-bgreen-400/20 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-lg shadow-neutral-200/20 dark:shadow-none hover:shadow-xl dark:hover:shadow-bgreen-900/10 hover:-translate-y-1', feature.colSpan]">
          
          <!-- Hover Highlight -->
          <div class="absolute inset-0 bg-gradient-to-br from-bgreen-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 w-32 h-32 bg-bgreen-400/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

          <!-- Icon -->
          <div class="relative mb-6 inline-flex items-center justify-center size-14 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-white/10 text-bgreen-600 dark:text-bgreen-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <div class="absolute inset-0 bg-bgreen-100/50 dark:bg-bgreen-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Icon :name="feature.icon" class="size-6 relative z-10" />
          </div>

          <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">{{ t(`features.items.${feature.key}.title`) }}</h3>
          <p class="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors leading-relaxed">{{ t(`features.items.${feature.key}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
