<template>
  <div
    class="newsItemContainer flex flex-col justify-center text-center transition transition-duration-350 cursor-pointer"
  >
    <img
      :src="`/img/${newsItem.img}.webp`"
      class="rounded-full w-min self-center transition transition-duration-350 border-2 border-transparent img-shadow"
      alt=""
    />
    <h3
      class="text-white text-2xl mt-6 mb-0 uppercase transition transition-duration-350"
    >
      {{ newsItem.short_title }}
    </h3>
    <p class="m-0 text-sm font-bold uppercase font-sans">{{ newsItem.date }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
.newsItemContainer:hover {
  img {
    border-color: rgb(var(--primary));
  }
  h3 {
    color: rgb(var(--primary));
  }
}
.img-shadow {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}
</style>
