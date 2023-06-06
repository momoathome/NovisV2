<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <button
    class="transition-duration-900 icon-btn hover:( rotate-720 text-hex-5865F2 ) "
    :class="open ? 'rotate-720 !text-hex-5865F2' : ''"
    i-fa-brands-discord
  />
</template>

<style scoped></style>
