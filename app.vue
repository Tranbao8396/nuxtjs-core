<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()
var layout = 'default';

if (route.path == '/guest') {
    layout = "guest";
}
</script>

<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>