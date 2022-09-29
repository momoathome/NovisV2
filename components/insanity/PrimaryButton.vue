<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="btn cursor-pointer no-underline font-sans uppercase inline-block px-6 py-2 rounded-2xl text-white text-sm shadow-black/20 shadow-lg border-none transition-all transition-duration-300 hover:bg-secondary/70">
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

<style scoped lang="scss">
.btn {
  background: var(--background-gradient);
}
</style>
