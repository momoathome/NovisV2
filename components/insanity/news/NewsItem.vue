<template>
  <div
    class="newsItemContainer group max-w-25% px-2 flex flex-grow-0 basis-25% flex-shrink-0 flex-col justify-center text-center transition transition-duration-350 cursor-pointer"
  >
    <img
      :src="`/img/${newsItem.img}.webp`"
      class="rounded-full w-min self-center transition transition-duration-350 border-2 border-transparent group-hover:border-primary shadow-black/15 shadow-sm"
      alt=""
    />
    <h3
      class="text-white text-2xl mt-6 mb-0 uppercase transition transition-duration-350 group-hover:text-primary"
    >
      {{ newsItem.short_title }}
    </h3>
    <p class="m-0 text-sm font-bold uppercase font-sans">{{ newsItem.date }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  newsItem: Object,
})
</script>

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
