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

<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="border-none cursor-pointer font-sans rounded-2xl shadow-lg text-white text-sm py-2 px-6 transition-all shadow-black/20 transition-duration-300 btn no-underline uppercase inline-block hover:bg-secondary/70"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.btn {
  background: var(--background-gradient);
}
</style>
