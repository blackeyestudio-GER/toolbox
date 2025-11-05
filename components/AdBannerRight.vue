<template>
  <ClientOnly>
    <div class="w-80 md:block addRightHeight min-w-48 flex justify-center items-start">
      <ins class="adsbygoogle"
        style="display:block;width:300px;height:600px"
        data-ad-client="ca-pub-4277903766631766"
        data-ad-slot="1244038755"
        data-ad-format="auto"></ins>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    const adEl = document.querySelector('.addRightHeight .adsbygoogle');
    console.log('AdSense right selector after timeout:', adEl);
    if (window.adsbygoogle && adEl) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.log(e);
      }
    }
  }, 500);
});
</script>

<style scoped>
.addRightHeight {
  min-height: calc(100vh - 80px);
}
</style>