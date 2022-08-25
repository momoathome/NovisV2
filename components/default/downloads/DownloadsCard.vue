<template>
  <div class="bg-base_light rounded-10px p-10">
    <div class="flex justify-between">
      <p class="text-primary uppercase font-bold font-sans text-sm m-0">
        {{ data.host }}
      </p>
      <p class="uppercase font-bold text-sm m-0 tracking-1px">{{ data.date }}</p>
    </div>
    <div class="text-center">
      <h2 class="text-white uppercase m-block-4 tracking-1px">{{ data.title }}</h2>
      <p class="font-sans text-sm leading-6 m-auto max-w-35ch">
        {{ data.content }}
      </p>
      <DefaultPrimaryButton class="mt-4" :to="data.link" :target="'_blank'"
        >Download</DefaultPrimaryButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: Object,
})
</script>

<style scoped></style>
