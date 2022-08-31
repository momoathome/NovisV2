<template>
  <div class="w-full">
    <div class="h-350px w-full bg-base_dark flex flex-col justify-center items-center">
      <h1 class="text-white mt-30 uppercase">Features</h1>
      <p class="m-0">Here you can find all our Features</p>
    </div>

    <div class="container max-w-1024px m-auto p-block-20 px-8 lg:px-0">
      <div class="flex flex-col gap-20">
        <DefaultFeaturesItem v-for="(feature, index) in 4" :key="index" :order="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
