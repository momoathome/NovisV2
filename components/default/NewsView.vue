<template>
  <div id="slider-1" class="absolute top-0 left-0 w-full h-full">
    <div
      class="bg-base_light relative flex w-full h-max p-24 rounded-xl shadow-black/20 shadow-md"
    >
      <div class="left-col">
        <div class="flex justify-between mb-2">
          <div class="flex gap-4">
            <p
              class="m-0 text-sm uppercase font-bold text-primary font-sans"
              v-for="(tag, index) in newsObject.tags"
              :key="index"
            >
              {{ tag }}
            </p>
          </div>

          <div>
            <p class="uppercase font-bold text-sm m-0 tracking-1px">
              {{ newsObject.date }}
            </p>
          </div>
        </div>
        <h2 class="text-white m-0 uppercase text-3xl max-w-34ch">
          {{ newsObject.title }}
        </h2>
        <div
          class="max-w-65ch children:( text-sm m-0 leading-6 font-sans mt-4 ) first: ( mt-8 )"
          v-html="newsObject.content"
        ></div>

        <DefaultPrimaryButton class="mt-16"> Read More </DefaultPrimaryButton>
      </div>
      <div class="absolute top-50% right--15 translate-y--50% z-10">
        <img
          :src="newsObject.contentImg"
          alt=""
          class="rounded-10px shadow-lg shadow-black/20"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  newsObject: Object,
})
</script>

<style scoped>
.outer-shadow {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}
</style>
