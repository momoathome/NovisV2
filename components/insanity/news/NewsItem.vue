<template>
  <!--   <div
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
  </div> -->

  <div
    class="newsItemContainer bg-base rounded-10px shadow-black/20 shadow-md flex cursor-pointer hover:( bg-base_light/15 ) transition transition-duration-200">
    <div class="max-h-152px">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-150px h-full object-cover rounded-10px" />
    </div>
    <div class="p-4">
      <div class="flex">
        <div i-tabler-clock class="me-1" />
        <p class="uppercase font-bold font-sans text-xs m-0">26.09.2022 at 21:00</p>
      </div>
      <div>
        <h3 class="text-base_light uppercase m-block-2">Headline</h3>
        <p class="font-sans text-sm leading-5.5 max-w-50ch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora rem
          corrupti inventore aperiam eos
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  newsItem: Object,
})
</script>

<style lang="scss" scoped>
.active.newsItemContainer {
  background-color: rgb(var(--base), 85);
}
</style>
