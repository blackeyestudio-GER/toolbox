<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Theme Toggle -->
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme';

const { initTheme } = useTheme();

// Initialize theme on mount
if (process.client) {
  initTheme();
}
</script>
