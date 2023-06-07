<script setup lang="ts">
const { data: rules }: any = await useFetch(() => '/api/rules')
</script>

<template>
  <div class="flex h-100vh w-full justify-center">
    <div class="w-full">
      <div class="bg-base_dark flex flex-col h-350px w-full justify-center items-center">
        <h1 class="mt-30 text-white uppercase">
          Rules
        </h1>
        <p class="m-0">
          Here you can find all our Rules
        </p>
      </div>

      <div class="container m-auto max-w-768px p-block-20 px-8 lg:px-0">
        <RulesItem v-for="(item, index) in rules" :key="index" :rule="item" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
