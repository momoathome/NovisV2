<template>
  <div class="w-full">
    <div class="h-350px w-full bg-base_dark flex flex-col justify-center items-center">
      <h1 class="text-white mt-30 uppercase">Rules</h1>
      <p class="m-0">Here you can find all our Rules</p>
    </div>

    <div class="container max-w-768px m-auto p-block-20 px-8 lg:px-0">
      <insanityRulesItem v-for="(item, index) in rules" :key="index" :rule="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const {data: rules, pending}: any = await useFetch(() => `/api/rules`)
</script>

<style scoped></style>
