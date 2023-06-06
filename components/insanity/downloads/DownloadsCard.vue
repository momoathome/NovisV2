<script setup lang="ts">
defineProps({
  data: Object,
})
</script>

<template>
  <div class="bg-base_light rounded-10px shadow-md p-10 shadow-black/20">
    <div class="flex justify-between">
      <p class="font-bold font-sans m-0 text-primary text-sm uppercase">
        {{ data.host }}
      </p>
      <p class="font-bold m-0 text-sm tracking-1px uppercase">
        {{ data.date }}
      </p>
    </div>
    <div class="text-center">
      <h2 class="m-block-4 text-white tracking-1px uppercase">
        {{ data.title }}
      </h2>
      <p class="font-sans m-auto text-sm max-w-35ch leading-6">
        {{ data.content }}
      </p>
      <insanityPrimaryButton class="mt-4" :to="data.link" target="_blank">
        Download
      </insanityPrimaryButton>
    </div>
  </div>
</template>

<style scoped></style>
