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

<template>
  <div class="h-full w-full pt-20 overflow-x-hidden">
    <!-- <div v-if="pending" class="flex h-40vh w-full z-100 justify-center">
      <InsanityTheLoader />
    </div> -->
    <div class="container m-auto pb-100px w-1140px">
      <div class="grid gap-8 grid-cols-2">
        <!-- main News -->
        <div class="bg-base rounded-10px shadow-md shadow-black/20">
          <div>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              class="object-cover rounded-t-10px h-225px w-full"
            >
          </div>
          <div class="px-10 pt-5 pb-10">
            <div class="flex">
              <div i-tabler-clock class="me-1" />
              <p class="font-bold font-sans m-0 text-xs uppercase">
                26.09.2022 at 21:00
              </p>
            </div>
            <div>
              <h2 class="m-block-2 text-base_light uppercase">
                Headline News Test
              </h2>
              <p class="font-sans text-sm max-w-55ch leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit
                accusantium architecto, accusamus placeat quibusdam quis eos ipsam ratione
                est?
              </p>
              <InsanityPrimaryButton class="mt-4" target="_blank">
                Read more
              </InsanityPrimaryButton>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <InsanityNewsItem />
          <InsanityNewsItem />
          <InsanityNewsItem />
        </div>
      </div>
    </div>

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
</template>

<style scoped></style>
