<template>
  <div class="relative">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div
      v-if="navEnabled"
      class="px-4 w-full h-full absolute top-0 flex justify-center items-center"
    >
      <div class="flex flex-1">
        <div
          @click="prevSlide"
          i-fa6-solid-angle-left
          class="cursor-pointer flex items-center justify-center rounded-full w-40px h-40px bg-primary text-white"
        />
      </div>
      <div class="flex flex-1 justify-end">
        <div
          @click="nextSlide"
          i-fa6-solid-angle-right
          class="cursor-pointer flex items-center justify-center rounded-full w-40px h-40px bg-primary text-white"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="pagintationEnabled"
      class="absolute bottom-6 w-full flex gap-4 justify-center items-center"
    >
      <div
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        class="cursor-pointer w-20px h-20px rounded-full bg-white pagination"
        :class="{active: index + 1 === currentSlide}"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['startAutoPlay', 'timeout', 'navigation', 'pagination'])
const currentSlide = ref(1)
const getSlideCount = ref(null)

const autoPlayEnabled = ref(
  props.startAutoPlay === undefined ? true : props.startAutoPlay
)
const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout)
const pagintationEnabled = ref(props.pagination === undefined ? true : props.pagination)
const navEnabled = ref(props.navigation === undefined ? true : props.navigation)
// next slide
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
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
const goToSlide = (index) => {
  currentSlide.value = index + 1
}
// autoplay
const autoPlay = () => {
  setInterval(() => {
    nextSlide()
  }, timeoutDuration.value)
}
if (autoPlayEnabled.value) {
  autoPlay()
}
onMounted(() => {
  getSlideCount.value = 3
})
</script>

<style lang="scss">
.pagination {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.active {
  background-color: #6347c7;
}
</style>
