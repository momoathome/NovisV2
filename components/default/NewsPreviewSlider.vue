<template>
  <div class="relative w-full h-33% m-block-10 px-8">
    <div class="newsSliderNavigation left-0">
      <div
        @click="$emit('prevSlide')"
        i-fa6-solid-angle-left
        class="bg-primary w-full h-full"
      />
    </div>

    <div class="newsSliderNavigation right-0">
      <div
        @click="$emit('nextSlide')"
        i-fa6-solid-angle-right
        class="bg-primary w-full h-full"
      />
    </div>

    <div class="grid grid-cols-4 justify-around w-full h-full">
      <DefaultNewsItem
        v-for="(item, index) in news"
        :key="index"
        :newsItem="item"
        @click="$emit('changeSlide', index)"
        class="z-1"
        :class="{active: index + 1 === currentSlide}"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  news: Array,
  currentSlide: Number,
})
</script>

<style scoped></style>
