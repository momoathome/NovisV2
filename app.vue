<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
console.log('route name = ' + route.fullPath)

const layout = ref('default')

if (route.fullPath.slice(1, 9) == 'insanity') {
  layout.value = 'insanity'
} else layout.value = 'default'

console.log('layout value = ' + layout.value)
</script>
