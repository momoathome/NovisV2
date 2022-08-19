<template>
  <div class="flex justify-around m-block-20 w-full">
    <DefaultNewsItem v-for="(item, index) in newsItems" :key="index" :newsItem="item" />
  </div>
</template>

<script setup lang="ts">
const newsItems = [
  {
    title: 'Sommer Event 2022 (Deutsch)',
    date: '28. Mar 2022',
    img: 'News1',
  },
  {
    title: 'Patchlog #2',
    date: '26. Mar 2022',
    img: 'News2',
  },
  {
    title: 'Maintenance 25. Mar 2022',
    date: '20. Mar 2022',
    img: 'News3',
  },
  {
    title: 'Patchlog #1',
    date: '15. Mar 2022',
    img: 'News4',
  },
]
</script>

<style scoped></style>
