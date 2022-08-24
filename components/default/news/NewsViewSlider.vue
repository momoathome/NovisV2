<template>
  <div class="relative h-67% w-full">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentSlide: Number,
})
</script>

<style scoped></style>
