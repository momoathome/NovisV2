<template>
  <div class="flex flex-col justify-center text-center">
    <img
      :src="`/img/${newsItem.img}.webp`"
      class="rounded-full w-min self-center img-shadow"
      alt=""
    />
    <h3 class="text-white text-2xl mt-6 mb-0 uppercase">{{ newsItem.title }}</h3>
    <p class="m-0 text-sm font-bold uppercase font-sans">{{ newsItem.date }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  newsItem: Object,
})
</script>

<style scoped>
.img-shadow {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}
</style>
