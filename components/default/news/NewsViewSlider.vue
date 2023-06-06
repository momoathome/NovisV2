<script setup lang="ts">
defineProps({
  currentSlide: Number,
})
</script>

<template>
  <div class="h-67% w-full relative">
    <slot :current-slide="currentSlide" />
  </div>
</template>

<style scoped></style>
