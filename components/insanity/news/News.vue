<template>
  <div class="w-full h-full overflow-x-hidden pt-20">
    <!-- <div v-if="pending" class="w-full h-40vh z-100 flex justify-center">
      <InsanityTheLoader />
    </div> -->
    <div class="container w-1140px m-auto pb-100px">
      <h1 class="text-4xl text-start m-0 text-base_dark/80 uppercase">
        Recent <span class="text-primary">News</span>
      </h1>

      <!-- <div class="flex flex-col h-100vh">
        <InsanityNewsPreviewSlider
          :news="newsItems"
          :currentSlide="currentSlide"
          @change-slide="goToSlide"
        />

        <InsanityNewsViewSlider :currentSlide="currentSlide" v-slot="{currentSlide}">
          <InsanityNewsViewSlide v-for="(slide, index) in newsItems || []" :key="index">
            <div v-show="currentSlide === index + 1">
              <InsanityNewsView :newsObject="slide" ref="target" />
            </div>
          </InsanityNewsViewSlide>
        </InsanityNewsViewSlider>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
/* const {data: newsItems, pending}: any = await useFetch(() => `/api/news`)

const currentSlide = ref(1)
const slideCount = ref(null)
const target = ref(null)

// goTo slide
const goToSlide = (index) => {
  currentSlide.value = index + 1
}

const getSlideCount = () => {
  slideCount.value = unrefElement(target).length
}

onMounted(() => {
  getSlideCount()
}) */
</script>

<style scoped></style>
