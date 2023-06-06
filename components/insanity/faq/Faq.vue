<script setup lang="ts">
const { data: faq, pending }: any = await useFetch(() => '/api/faq')
</script>

<template>
  <div class="w-full">
    <div class="bg-base_dark flex flex-col h-350px w-full justify-center items-center">
      <h1 class="mt-30 text-white uppercase">
        FAQ
      </h1>
      <p class="m-0">
        Here you can find all the frequently asked Questions
      </p>
    </div>

    <div class="container m-auto max-w-768px p-block-20 px-8 lg:px-0">
      <InsanityFaqAccordion :faq="faq" />
    </div>
  </div>
</template>
