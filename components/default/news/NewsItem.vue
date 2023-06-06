<script setup lang="ts">
defineProps({
  newsItem: Object,
})
</script>

<template>
  <div
    class="cursor-pointer flex flex-col flex-grow-0 flex-shrink-0 text-center max-w-25% px-2 transition transition-duration-350 newsItemContainer group justify-center basis-25%"
  >
    <img
      :src="`/img/${newsItem.img}.webp`"
      class="border-transparent rounded-full border-2 shadow-sm w-min transition shadow-black/15 transition-duration-350 self-center group-hover:border-primary"
      alt=""
    >
    <h3
      class="mt-6 text-white mb-0 transition text-2xl transition-duration-350 uppercase group-hover:text-primary"
    >
      {{ newsItem.short_title }}
    </h3>
    <p class="font-bold font-sans m-0 text-sm uppercase">
      {{ newsItem.date }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.active.newsItemContainer {
  img {
    border-color: rgb(var(--primary));
  }
  h3 {
    color: rgb(var(--primary));
  }
}
</style>
