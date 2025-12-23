<template>
    <ClientOnly>
        <div class="w-full flex justify-center mt-8 min-h-32 min-w-full">
            <ins ref="adElement" class="adsbygoogle ad-banner-bottom"
                style="display:block;width:728px;height:90px"
                data-ad-client="ca-pub-4277903766631766"
                data-ad-slot="5443827893"
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
        console.log('AdSense Bottom Banner initialized successfully');
      }
    } catch (e) {
      console.error('Error initializing bottom ad:', e);
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
