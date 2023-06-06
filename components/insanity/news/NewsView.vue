<script setup lang="ts">
defineProps({
  newsObject: Object,
})
</script>

<template>
  <div id="slider-1" class="h-full w-full top-0 left-0 absolute">
    <div
      class="bg-base_light rounded-xl flex h-max shadow-md w-full p-24 shadow-black/20 relative"
    >
      <div class="left-col">
        <div class="flex mb-2 justify-between">
          <div class="flex gap-4">
            <p
              v-for="(tag, index) in newsObject.tags"
              :key="index"
              class="font-bold font-sans m-0 text-sm text-primary uppercase"
            >
              {{ tag }}
            </p>
          </div>

          <div>
            <p class="font-bold m-0 text-sm tracking-1px uppercase">
              {{ newsObject.date }}
            </p>
          </div>
        </div>
        <h2 class="m-0 text-white max-w-34ch text-3xl uppercase">
          {{ newsObject.title }}
        </h2>
        <div
          class="max-w-65ch first: mt-8 children:( text-sm m-0 leading-6 font-sans mt-4 ) "
        >
          <p>{{ newsObject.content }}</p>
        </div>

        <insanityPrimaryButton class="mt-16" :to="`/news/${newsObject.news_id}`">
          Read More
        </insanityPrimaryButton>
      </div>
      <div class="top-50% right--15 z-10 translate-y--50% absolute">
        <img
          :src="newsObject.contentImg"
          alt=""
          class="rounded-10px shadow-md shadow-black/20"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
