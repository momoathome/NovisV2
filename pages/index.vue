<template>
  <div>
    <!-- <Hero /> -->
    <img src="/img/hero.webp" alt="" width="1920" height="800" />
    <main class="bg-base flex flex-col justify-center pt-8rem">
      <DefaultNews />

      <!-- <div class="flex justify-center">
        <DefaultNewsCarousel
          :navigation="true"
          :pagination="true"
          :startAutoPlay="false"
          :timeout="5000"
          v-slot="{currentSlide}"
        >
          <DefaultNewsCarouselSlide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1">
              <img
                src="https://via.placeholder.com/575x450/7c3aed/808080?Text=Digital.com"
                alt=""
              />
            </div>
          </DefaultNewsCarouselSlide>
        </DefaultNewsCarousel>
      </div> -->

      <!-- <button @click="changeComp()">my Button</button>
      <component :is="asyncComponent" />
      <h1 class="text-5xl text-center m-0 pt-8rem h-1000px text-white">News</h1> -->
    </main>
  </div>
</template>

<script setup>
const carouselSlides = ['bg-1', 'bg-2', 'bg-3'] // Carousel

const template = ref('default')
const asyncComponent = shallowRef(null)

function setAsyncComponentValue() {
  asyncComponent.value = defineAsyncComponent(() => {
    return import(`~/components/${template.value}/Tester.vue`) // works
  })
}

function changeComp() {
  if (template.value === 'default') {
    template.value = 'testComp'
  } else template.value = 'default'

  setAsyncComponentValue()
}

onMounted(() => {
  setAsyncComponentValue()
})
</script>

<style></style>
