<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const {data, refresh} = await useFetch(`${config.public.baseUrl}/news`, {
  headers: {TOKEN: config.apiToken},
})
</script>

<style scoped></style>
