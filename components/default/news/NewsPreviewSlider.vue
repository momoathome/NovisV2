<script setup lang="ts">
const props = defineProps({
  news: Array,
  currentSlide: Number,
})

const sliderIndex = ref(0)

function prevSlide() {
  if (sliderIndex.value <= 0) {

  }
  else { sliderIndex.value = sliderIndex.value - 1 }
}

function nextSlide() {
  if (sliderIndex.value >= Math.floor(props.news.length / 4)) {

  }
  else { sliderIndex.value = sliderIndex.value + 1 }
}
</script>

<template>
  <div class="h-33% m-block-10 w-full px-6 relative overflow-x-hidden">
    <div class="left-0 newsSliderNavigation prev-btn" @click="prevSlide">
      <div i-fa6-solid-angle-left class="bg-primary h-full w-full" />
    </div>

    <div class="right-0 newsSliderNavigation next-btn" @click="nextSlide">
      <div i-fa6-solid-angle-right class="bg-primary h-full w-full" />
    </div>

    <div class="flex px-4 transition-transform transition-duration-600 newsItemSlider">
      <NewsItem
        v-for="(item, index) in news"
        :key="index"
        :news-item="item"
        class="z-1"
        :class="{ active: index + 1 === currentSlide }"
        @click="$emit('changeSlide', index)"
      />
    </div>
  </div>
</template>

<style scoped>
.newsItemSlider::-webkit-scrollbar {
  display: none;
}
.newsItemSlider {
  transform: translateX(calc(v-bind(sliderIndex) * -100%));
}
</style>
