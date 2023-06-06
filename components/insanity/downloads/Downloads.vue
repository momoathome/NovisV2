<script setup lang="ts">
const { data: downloadItems, pending }: any = await useFetch(() => '/api/downloads')
</script>

<template>
  <div class="w-full">
    <div class="bg-base_dark flex flex-col h-350px w-full justify-center items-center">
      <h1 class="mt-30 text-white uppercase">
        Downloads
      </h1>
      <p class="m-0">
        Here you can find the latest downloads
      </p>
    </div>

    <div class="container m-auto max-w-1140px p-block-20 px-8 lg:px-0">
      <div class="grid gap-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <insanityDownloadsCard
          v-for="item in downloadItems"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
