<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

const layout = ref('default')

if (route.fullPath.slice(1, 9) == 'insanity') {
  layout.value = 'insanity'
} else layout.value = 'default'
</script>
