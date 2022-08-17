<template>
  <NuxtLink
    :to="link"
    rel="noopener noreferrer"
    target="_blank"
    class="icon-btn"
    i-carbon-logo-github
  >
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  link: String,
})
</script>
