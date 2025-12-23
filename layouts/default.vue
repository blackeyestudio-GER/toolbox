<template>
  <div class="flex flex-col min-h-screen">
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    
    <!-- Main content area with proper flex layout -->
    <div class="flex-1 flex flex-row max-w-screen-2xl mx-auto w-full">
      <!-- Main content -->
      <div class="flex-1 mx-2 my-2">
        <slot />
      </div>
      
      <!-- Right sidebar ad - only on desktop, hidden on mobile/tablet -->
      <div class="hidden xl:block sticky top-2 h-fit mt-2 mr-2">
        <AdBannerRight />
      </div>
    </div>
    
    <AppFooter />
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