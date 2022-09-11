<template>
  <div class="w-full">
    <div class="h-350px w-full bg-base_dark flex flex-col justify-center items-center">
      <h1 class="text-white mt-30 uppercase">FAQ</h1>
      <p class="m-0">Here you can find all the frequently asked Questions</p>
    </div>

    <div class="container max-w-768px m-auto p-block-20 px-8 lg:px-0">
      <insanityFaqAccordion :faq="faq" />
    </div>
  </div>
</template>

<script setup lang="ts">
const {data: faq, pending}: any = await useFetch(() => `/api/faq`)
</script>
