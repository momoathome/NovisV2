<script setup lang="ts">
defineProps({
  faq: Array,
})
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <FaqAccordionItem v-for="(item, index) in faq" :key="index" :faq="item" />
  </div>
</template>

<style scoped></style>
