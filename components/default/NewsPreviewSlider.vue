<template>
  <div class="grid grid-cols-4 justify-around m-block-10 w-full h-33% overflow-hidden">
    <DefaultNewsItem
      v-for="(item, index) in news"
      :key="index"
      :newsItem="item"
      @click="$emit('changeSlide', index)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  news: Array,
})
</script>

<style scoped></style>
