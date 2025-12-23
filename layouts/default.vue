<template>
  <div>
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    <div class="mx-2 max-w-screen-2xl lg:mx-auto my-2">
      <slot />
    </div>
      <div class="absolute right-0 top-0">
          <AdBannerRight />
      </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
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