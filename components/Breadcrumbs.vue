<template>
    <nav aria-label="Breadcrumb" class="mb-4 text-sm">
        <ol class="flex items-center flex-wrap gap-2 text-gray-400">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
                <NuxtLink 
                    v-if="index < breadcrumbs.length - 1" 
                    :to="crumb.path"
                    class="hover:text-white transition"
                >
                    {{ crumb.name }}
                </NuxtLink>
                <span v-else class="text-white font-semibold">
                    {{ crumb.name }}
                </span>
                <span v-if="index < breadcrumbs.length - 1" class="mx-2 text-gray-600">›</span>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pageNames = {
    '/': 'Home',
    '/obs-guide': 'OBS Guide',
    '/hardware': 'Hardware Guide',
    '/software': 'Software',
    '/glossar': 'Glossar',
    '/impressum': 'Impressum',
    '/datenschutz': 'Datenschutz'
};

const breadcrumbs = computed(() => {
    const path = route.path;
    const crumbs = [{ name: 'Home', path: '/' }];
    
    if (path !== '/') {
        const pageName = pageNames[path] || path.replace('/', '').replace('-', ' ');
        crumbs.push({ name: pageName, path: path });
    }
    
    return crumbs;
});
</script>

<style scoped>
</style>

