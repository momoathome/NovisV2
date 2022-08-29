<template>
  <div class="w-full">
    <div class="h-350px w-full bg-base_dark flex flex-col justify-center items-center">
      <h1 class="text-white mt-30 uppercase">Downloads</h1>
      <p class="m-0">Here you can find the latest downloads</p>
    </div>

    <div class="container m-auto max-w-1140px p-block-20 px-8 lg:px-0">
      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
        <DefaultDownloadsCard
          v-for="item in downloadItems"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data: downloadItems, pending}: any = await useFetch(() => `/api/downloads`)
</script>

<style scoped></style>
