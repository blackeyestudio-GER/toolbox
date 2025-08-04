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
useHead({
  titleTemplate: (title) => title ? `${title} - template` : 'template',
})
</script>
<style scoped>

</style>