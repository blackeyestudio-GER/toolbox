<template>
    <nav class="w-full mb-8 bg-eerie-black rounded-lg p-4">
        <div class="flex justify-center gap-8 text-base flex-wrap">
            <NuxtLink 
                to="/" 
                :class="isActive('/') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                🏠 Home
            </NuxtLink>
            <NuxtLink 
                to="/obs-guide" 
                :class="isActive('/obs-guide') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                📖 OBS Guide
            </NuxtLink>
            <NuxtLink 
                to="/hardware" 
                :class="isActive('/hardware') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                🔧 Hardware
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const isActive = (path) => {
    return computed(() => route.path === path).value;
};
</script>

<style scoped>
/* Kann hier zusätzliche Styles hinzufügen falls nötig */
</style>
