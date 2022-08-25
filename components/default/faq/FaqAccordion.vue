<template>
  <div class="flex flex-col gap-2.5">
    <DefaultFaqAccordionItem v-for="(item, index) in 3" :key="index" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
