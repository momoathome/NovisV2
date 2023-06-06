<script setup lang="ts">
defineProps({
  newsItem: Object,
})
</script>

<template>
  <!--   <div
    class="cursor-pointer flex flex-col flex-grow-0 flex-shrink-0 text-center max-w-25% px-2 transition transition-duration-350 newsItemContainer group justify-center basis-25%"
  >
    <img
      :src="`/img/${newsItem.img}.webp`"
      class="border-transparent rounded-full border-2 shadow-sm w-min transition shadow-black/15 transition-duration-350 self-center group-hover:border-primary"
      alt=""
    />
    <h3
      class="mt-6 text-white mb-0 transition text-2xl transition-duration-350 uppercase group-hover:text-primary"
    >
      {{ newsItem.short_title }}
    </h3>
    <p class="font-bold font-sans m-0 text-sm uppercase">{{ newsItem.date }}</p>
  </div> -->

  <div
    class="bg-base cursor-pointer flex rounded-10px shadow-md transition shadow-black/20 transition-duration-200 newsItemContainer hover:( bg-base_light/15 ) "
  >
    <div class="max-h-152px">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        class="h-full object-cover rounded-10px w-150px"
      >
    </div>
    <div class="p-4">
      <div class="flex">
        <div i-tabler-clock class="me-1" />
        <p class="font-bold font-sans m-0 text-xs uppercase">
          26.09.2022 at 21:00
        </p>
      </div>
      <div>
        <h3 class="m-block-2 text-base_light uppercase">
          Headline
        </h3>
        <p class="font-sans text-sm max-w-50ch leading-5.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora rem
          corrupti inventore aperiam eos
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active.newsItemContainer {
  background-color: rgb(var(--base), 85);
}
</style>
