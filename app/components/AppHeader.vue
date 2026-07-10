<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  const newMode = isDark.value ? 'light' : 'dark'
  colorMode.preference = newMode
  console.log('Toggled theme to:', newMode, 'Current preference:', colorMode.preference)
}

const navLinks = [
  { key: 'features', label: 'Features', to: '/#features' },
  { key: 'showcase', label: 'Showcase', to: '/#showcase' },
  { key: 'download', label: 'Download', to: '/#download' },
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
    isScrolled
      ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-neutral-200 dark:border-white/10 shadow-sm py-2'
      : 'bg-transparent border-transparent py-4'
  ]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
          <div class="relative flex items-center justify-center size-12 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img src="/logo.webp" :alt="t('brand.name') + ' ' + t('brand.keyboard')" class="size-full object-cover" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-none">
              {{ t('brand.name') }}
            </span>
            <span class="text-xs font-medium text-bgreen-600 dark:text-bgreen-400 uppercase tracking-widest leading-none">
              {{ t('brand.keyboard') }}
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none">
          <NuxtLink v-for="link in navLinks" :key="link.key" :to="link.to" class="px-5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-bgreen-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all">
            {{ t(`nav.${link.key}`) }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Theme Switcher -->
          <ClientOnly>
            <button @click="toggleTheme" class="p-2 text-neutral-500 hover:text-bgreen-600 dark:text-neutral-400 dark:hover:text-white transition-colors" aria-label="Toggle Theme">
              <Icon :name="isDark ? 'lucide:moon' : 'lucide:sun'" class="size-5" />
            </button>
            <template #fallback>
              <div class="size-9 p-2">
                <div class="size-5 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
              </div>
            </template>
          </ClientOnly>

          <!-- Lang Switcher -->
          <button @click="setLocale(locale === 'bn' ? 'en' : 'bn')" class="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-bgreen-600 dark:hover:text-white transition-colors">
            {{ locale === 'bn' ? 'EN' : 'বাংলা' }}
          </button>

          <!-- CTA -->
          <button class="hidden sm:block px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-bgreen-500/20">
            {{ t('nav.cta') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any scoped styles if needed, mostly using Tailwind */
</style>
