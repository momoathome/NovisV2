<template>
  <Carousel :items-to-show="4">
    <template #slides>
      <DefaultNewsItem
        v-for="(item, index) in news"
        :key="index"
        :newsItem="item"
        @click="$emit('changeSlide', index)"
        class="z-1"
        :class="{active: index + 1 === currentSlide}"
      />
    </template>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {Carousel, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
  news: Array,
  currentSlide: Number,
})
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
