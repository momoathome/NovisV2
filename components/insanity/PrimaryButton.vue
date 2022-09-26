<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="cursor-pointer no-underline font-sans uppercase font-bold inline-block px-3.5 py-2 rounded-2xl bg-primary text-white shadow-black/20 shadow-lg border-none transition-all transition-duration-300 hover:bg-secondary"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
  },
  target: {
    type: String,
  },
})
</script>

<style scoped lang="scss"></style>
