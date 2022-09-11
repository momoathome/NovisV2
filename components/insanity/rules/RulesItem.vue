<template>
  <div>
    <h2>{{ rule.title }}</h2>
    <div
      v-html="rule.description"
      class="children:( children:( font-sans text-sm leading-6 ) )"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  rule: Object,
})
</script>

<style scoped></style>
