<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const {data, refresh} = await useFetch(`https://api.novis-cms.com/v1/news`, {
  headers: {TOKEN: 'noMuciBcibFRCQDOfiiSdMb4tGQBVxELAzrP7hRBw5a9FSj6HI2rJdK9pADZKdRm'},
})
</script>

<style scoped></style>
