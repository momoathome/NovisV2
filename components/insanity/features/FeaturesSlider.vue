<template>
  <div class="flex justify-center text-center">
    <div class="flex flex-col">
      <h2 class="text-3xl text-base_dark uppercase">
        Discover Our <span class="text-secondary">Features</span>
      </h2>
      <div class="flex gap-12 relative my-2">
        <div class="insanity-newsSliderNavigation left--7% prev-btn">
          <div i-la-angle-left class="bg-base_dark w-full h-full" />
        </div>

        <div class="insanity-newsSliderNavigation right--7% next-btn">
          <div i-la-angle-right class="bg-base_dark w-full h-full" />
        </div>

        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="w-300px h-200px object-cover rounded-10px" />
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="w-300px h-200px scale-110 shadow-black/60 shadow-lg object-cover rounded-10px" />
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="w-300px h-200px object-cover rounded-10px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
