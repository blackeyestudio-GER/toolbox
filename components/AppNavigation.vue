<template>
    <nav class="w-full mb-6 md:mb-8 bg-eerie-black rounded-lg p-3 md:p-4">
        <div class="flex justify-center gap-3 md:gap-6 text-xs md:text-base flex-wrap">
            <NuxtLink 
                to="/" 
                :class="isActive('/') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                🏠 Home
            </NuxtLink>
            <NuxtLink 
                to="/" 
                :class="isActive('/') || isActive('/tools/') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                🛠️ Tools
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
            <NuxtLink 
                to="/software" 
                :class="isActive('/software') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                💻 Software
            </NuxtLink>
            <NuxtLink 
                to="/glossar" 
                :class="isActive('/glossar') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                📚 Glossar
            </NuxtLink>
            <NuxtLink 
                to="/ueber-uns" 
                :class="isActive('/ueber-uns') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                ℹ️ Über uns
            </NuxtLink>
            <NuxtLink 
                to="/kontakt" 
                :class="isActive('/kontakt') ? 'text-white font-semibold' : 'text-gray-300 hover:text-blue-400'"
                class="transition font-medium">
                📧 Kontakt
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
