<template>
  <div class="w-full h-full overflow-x-hidden pt-20">
    <!-- <div v-if="pending" class="w-full h-40vh z-100 flex justify-center">
      <InsanityTheLoader />
    </div> -->
    <div class="container w-1140px m-auto pb-100px">
      <div class="grid grid-cols-2 gap-8">
        <!-- main News -->
        <div class="bg-base rounded-10px shadow-black/20 shadow-md">
          <div>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              class="w-full h-225px object-cover rounded-t-10px" />
          </div>
          <div class="pt-5 pb-10 px-10">
            <div class="flex">
              <div i-tabler-clock class="me-1" />
              <p class="uppercase font-bold font-sans text-xs m-0">26.09.2022 at 21:00</p>
            </div>
            <div>
              <h2 class="text-base_light uppercase m-block-2">Headline News Test</h2>
              <p class="font-sans text-sm leading-6 max-w-55ch">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit
                accusantium architecto, accusamus placeat quibusdam quis eos ipsam ratione
                est?
              </p>
              <InsanityPrimaryButton class="mt-4" :target="'_blank'">
                Read more
              </InsanityPrimaryButton>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="bg-base rounded-10px shadow-black/20 shadow-md flex">
            <div class="max-h-152px">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                class="w-150px h-full object-cover rounded-10px" />
            </div>
            <div class="p-4">
              <div class="flex">
                <div i-tabler-clock class="me-1" />
                <p class="uppercase font-bold font-sans text-xs m-0">
                  26.09.2022 at 21:00
                </p>
              </div>
              <div>
                <h3 class="text-base_light uppercase m-block-2">Headline</h3>
                <p class="font-sans text-sm leading-5.5 max-w-50ch">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
                  rem corrupti inventore aperiam eos
                </p>
              </div>
            </div>
          </div>
          <div class="bg-base rounded-10px shadow-black/20 shadow-md flex">
            <div class="max-h-152px">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                class="w-150px h-full object-cover rounded-10px" />
            </div>
            <div class="p-4">
              <div class="flex">
                <div i-tabler-clock class="me-1" />
                <p class="uppercase font-bold font-sans text-xs m-0">
                  26.09.2022 at 21:00
                </p>
              </div>
              <div>
                <h3 class="text-base_light uppercase m-block-2">Headline</h3>
                <p class="font-sans text-sm leading-5.5 max-w-50ch">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
                  rem corrupti inventore aperiam eos
                </p>
              </div>
            </div>
          </div>
          <div class="bg-base rounded-10px shadow-black/20 shadow-md flex">
            <div class="max-h-152px">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                class="w-150px h-full object-cover rounded-10px" />
            </div>
            <div class="p-4">
              <div class="flex">
                <div i-tabler-clock class="me-1" />
                <p class="uppercase font-bold font-sans text-xs m-0">
                  26.09.2022 at 21:00
                </p>
              </div>
              <div>
                <h3 class="text-base_light uppercase m-block-2">Headline</h3>
                <p class="font-sans text-sm leading-5.5 max-w-50ch">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
                  rem corrupti inventore aperiam eos
                </p>
              </div>
            </div>
          </div>
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
