<template>
  <div class="flex flex-col gap-2.5">
    <DefaultFaqAccordionItem v-for="(item, index) in faq" :key="index" :faq="item" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  faq: Array,
})
</script>

<style scoped></style>
