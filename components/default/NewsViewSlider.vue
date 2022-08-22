<template>
  <div class="relative h-67% w-full">
    <DefaultNewsView v-for="(object, index) in news" :key="index" :newsObject="object" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  news: Array,
})
</script>

<style scoped></style>
