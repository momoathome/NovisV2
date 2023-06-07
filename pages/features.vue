<script setup lang="ts"></script>

<template>
  <div class="flex h-100vh w-full justify-center">
    <div class="w-full">
      <div class="bg-base_dark flex flex-col h-350px w-full justify-center items-center">
        <h1 class="mt-30 text-white uppercase">
          Features
        </h1>
        <p class="m-0">
          Here you can find all our Features
        </p>
      </div>

      <div class="container m-auto max-w-1024px p-block-24 px-8 lg:px-0">
        <div class="flex flex-col gap-24">
          <FeaturesItem v-for="(feature, index) in 4" :key="index" :order="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
