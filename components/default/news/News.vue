<script setup lang="ts">
const { data: newsItems, pending }: any = await useFetch(() => '/api/news')

const currentSlide = ref(1)
const slideCount = ref(null)
const target = ref(null)

// goTo slide
function goToSlide(index: number) {
  currentSlide.value = index + 1
}

function getSlideCount() {
  slideCount.value = unrefElement(target).length
}

onMounted(() => {
  getSlideCount()
})
</script>

<template>
  <div class="h-full w-full pt-20 overflow-x-hidden">
    <div v-if="pending" class="flex h-40vh w-full z-100 justify-center">
      <TheLoader />
    </div>
    <div v-else class="container m-auto pb-100px w-1140px">
      <h1 class="m-0 text-center text-white text-5xl uppercase">
        News
      </h1>

      <div class="flex flex-col h-100vh">
        <NewsPreviewSlider
          :news="newsItems"
          :current-slide="currentSlide"
          @change-slide="goToSlide"
        />

        <NewsViewSlider v-slot="{ currentSlide }" :current-slide="currentSlide">
          <NewsViewSlide v-for="(slide, index) in newsItems || []" :key="index">
            <div v-show="currentSlide === index + 1">
              <NewsView ref="target" :news-object="slide" />
            </div>
          </NewsViewSlide>
        </NewsViewSlider>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
