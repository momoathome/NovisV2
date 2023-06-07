<script setup lang="ts">
const { data: faq }: any = await useFetch(() => '/api/faq')
</script>

<template>
  <div class="flex h-100vh w-full justify-center">
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
        <div class="flex flex-col gap-2.5">
          <FaqAccordionItem v-for="(item, index) in faq" :key="index" :faq="item" />
        </div>
      </div>
    </div>
  </div>
</template>
