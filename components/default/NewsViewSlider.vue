<template>
  <div class="relative h-67% w-full">
    <slot :currentSlide="slide" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  slide: Number,
})
</script>

<style scoped></style>
