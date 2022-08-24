<template>
  <div class="relative w-full h-33% m-block-10 px-8 overflow-hidden">
    <div class="newsSliderNavigation left-0 prev-btn" @click="$emit('prevSlide')">
      <div i-fa6-solid-angle-left class="bg-primary w-full h-full" />
    </div>

    <div class="newsSliderNavigation right-0 next-btn" @click="$emit('nextSlide')">
      <div i-fa6-solid-angle-right class="bg-primary w-full h-full" />
    </div>

    <div class="flex px-4 overflow-x-auto newsItemWrapper">
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

<style scoped>
.newsItemWrapper::-webkit-scrollbar {
  display: none;
}
</style>
