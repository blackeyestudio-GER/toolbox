<template>
    <ClientOnly>
        <div class="w-full flex justify-center mt-8 min-h-32 min-w-full">
            <ins class="adsbygoogle"
                style="display:block;width:728px;height:90px"
                data-ad-client="ca-pub-4277903766631766"
                data-ad-slot="5443827893"
                data-ad-format="auto"></ins>
        </div>
    </ClientOnly>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    const adEl = document.querySelector('.adsbygoogle');
    console.log('AdSense selector after timeout:', adEl);
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
