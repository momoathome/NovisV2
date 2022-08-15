<template>
  <button
    class="icon-btn transition-duration-900 text-dark-800 dark:text-light-900 hover:( rotate-720 text-hex-5865F2 )"
    :class="open ? 'rotate-720 !text-hex-5865F2' : ''"
    i-fa-brands-discord
  />
</template>

<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped></style>
