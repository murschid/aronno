<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 border-t border-neutral-200 dark:border-white/5 bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-2">
        <div class="size-8 rounded-lg bg-bgreen-600 flex items-center justify-center text-white font-bold shadow-sm">অ</div>
        <span class="text-xl font-bold text-neutral-900 dark:text-neutral-200">Aronno</span>
      </div>

      <p class="text-neutral-500 dark:text-neutral-500 text-sm">
        &copy; {{ currentYear }} {{ t('brand.name') }} {{ t('brand.keyboard') }}. {{ t('footer.rights') }}
      </p>

      <div class="flex gap-4">
        <a href="#" class="text-neutral-500 hover:text-bgreen-600 dark:hover:text-bgreen-400 transition-colors">
          <Icon name="simple-icons:facebook" class="size-5" />
        </a>
        <a href="#" class="text-neutral-500 hover:text-bgreen-600 dark:hover:text-bgreen-400 transition-colors">
          <Icon name="simple-icons:twitter" class="size-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
