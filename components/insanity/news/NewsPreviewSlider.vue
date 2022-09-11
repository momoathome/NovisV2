<template>
  <div class="relative w-full h-33% m-block-10 px-6 overflow-x-hidden">
    <div class="newsSliderNavigation left-0 prev-btn" @click="prevSlide">
      <div i-fa6-solid-angle-left class="bg-primary w-full h-full" />
    </div>

    <div class="newsSliderNavigation right-0 next-btn" @click="nextSlide">
      <div i-fa6-solid-angle-right class="bg-primary w-full h-full" />
    </div>

    <div class="flex px-4 newsItemSlider transition-transform transition-duration-600">
      <insanityNewsItem
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

const sliderIndex = ref(0)

const prevSlide = () => {
  if (sliderIndex.value <= 0) {
    return
  } else sliderIndex.value = sliderIndex.value - 1
}

const nextSlide = () => {
  if (sliderIndex.value >= Math.floor(props.news.length / 4)) {
    return
  } else sliderIndex.value = sliderIndex.value + 1
}
</script>

<style scoped>
.newsItemSlider::-webkit-scrollbar {
  display: none;
}
.newsItemSlider {
  transform: translateX(calc(v-bind(sliderIndex) * -100%));
}
</style>
