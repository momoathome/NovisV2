<script setup lang="ts"></script>

<template>
  <div class="flex text-center justify-center">
    <div class="flex flex-col">
      <h2 class="text-base_dark text-3xl uppercase">
        Discover Our <span class="text-secondary">Features</span>
      </h2>
      <div class="flex my-2 gap-12 relative">
        <div class="left--7% insanity-newsSliderNavigation prev-btn">
          <div i-la-angle-left class="bg-base_dark h-full w-full" />
        </div>

        <div class="right--7% insanity-newsSliderNavigation next-btn">
          <div i-la-angle-right class="bg-base_dark h-full w-full" />
        </div>

        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="object-cover rounded-10px h-200px w-300px"
        >
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="object-cover rounded-10px h-200px shadow-lg shadow-black/60 w-300px scale-110"
        >
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="object-cover rounded-10px h-200px w-300px"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
