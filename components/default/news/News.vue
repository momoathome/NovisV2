<script setup lang="ts">
const {data: newsItems, pending}: any = await useFetch(() => `/api/news`)
const currentSlide = ref(1)
const slideCount = ref(null)
const target = ref(null)

// next slide
const nextSlide = () => {
  if (currentSlide.value === slideCount.value) {
    currentSlide.value = 1
    return
  }
  currentSlide.value += 1
}
// prev slide
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1
    return
  }
  currentSlide.value -= 1
}
// goTo slide
const goToSlide = (index) => {
  currentSlide.value = index + 1
}

const getSlideCount = () => {
  slideCount.value = unrefElement(target).length
}

onMounted(() => {
  getSlideCount()
})
</script>

<template>
  <div class="w-full h-full overflow-x-hidden">
    <div v-if="pending" class="w-full h-40vh z-100 flex justify-center">
      <DefaultTheLoader />
    </div>
    <div v-else class="container w-1140px m-auto pb-100px">
      <h1 class="text-5xl text-center m-0 text-white uppercase">News</h1>

      <div class="flex flex-col h-100vh">
        <DefaultNewsPreviewSlider
          :news="newsItems"
          :currentSlide="currentSlide"
          @change-slide="goToSlide"
          @prev-slide="prevSlide"
          @next-slide="nextSlide"
        />

        <DefaultNewsViewSlider :currentSlide="currentSlide" v-slot="{currentSlide}">
          <DefaultNewsViewSlide v-for="(slide, index) in newsItems || []" :key="index">
            <div v-show="currentSlide === index + 1">
              <DefaultNewsView :newsObject="slide" ref="target" />
            </div>
          </DefaultNewsViewSlide>
        </DefaultNewsViewSlider>
      </div>

      <div class="mt-150px">
        <DefaultCarouselTest :news="newsItems" :currentSlide="currentSlide" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
