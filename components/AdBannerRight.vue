<template>
  <ClientOnly>
    <div class="w-80 md:block addRightHeight min-w-48 flex justify-center items-start">
      <ins ref="adElement" class="adsbygoogle ad-banner-right"
        style="display:block;width:300px;height:600px"
        data-ad-client="ca-pub-4277903766631766"
        data-ad-slot="1244038755"
        data-ad-format="auto"></ins>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const adElement = ref(null);

const initializeAd = () => {
  if (adElement.value && window.adsbygoogle) {
    try {
      // Check if ad hasn't been pushed yet
      if (!adElement.value.getAttribute('data-ad-status')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('AdSense Right Banner initialized successfully');
        
        // Debug: Check ad status after 2 seconds
        setTimeout(() => {
          const status = adElement.value?.getAttribute('data-ad-status');
          console.log('Right Ad Status:', status);
          if (status === 'unfilled') {
            console.warn('Right ad slot is unfilled - no ads available to show');
          }
        }, 2000);
      }
    } catch (e) {
      console.error('Error initializing right ad:', e);
    }
  } else {
    // Retry after a short delay if script not loaded yet
    setTimeout(initializeAd, 100);
  }
};

onMounted(() => {
  // Wait for AdSense script to load
  const checkAdSense = setInterval(() => {
    if (window.adsbygoogle !== undefined) {
      clearInterval(checkAdSense);
      initializeAd();
    }
  }, 100);
  
  // Timeout after 10 seconds
  setTimeout(() => clearInterval(checkAdSense), 10000);
});
</script>

<style scoped>
.addRightHeight {
  min-height: calc(100vh - 80px);
}
</style>