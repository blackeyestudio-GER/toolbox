<template>
  <div class="relative">
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    <div class="mx-2 max-w-screen-2xl lg:mx-auto my-2">
      <!-- Navigation - Global für alle Seiten -->
      <AppNavigation />
      <slot />
    </div>
    <!-- Right Ad temporarily disabled - issue to fix -->
    <!-- <aside class="hidden xl:block flex-shrink-0 mt-6">
      <div class="sticky top-4">
        <AdBannerRight />
      </div>
    </aside> -->
    <AppFooter />
    
    <!-- Cookie Banner -->
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Toolbox` : 'Toolbox',
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4277903766631766',
      async: true,
      crossorigin: 'anonymous',
    }
  ]
});
</script>
<style scoped>

</style>