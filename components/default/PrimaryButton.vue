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
    class="bg-transparent border-none rounded-lg cursor-pointer font-sans font-bold shadow-lg text-xs text-white py-2 px-4 transition-all shadow-black/20 tracking-1px z-0 transition-duration-300 btn no-underline uppercase relative inline-block whitespace-nowrap md:( px-8 py-3 text-sm ) xl:( px-12 py-4 ) before:( content-empty absolute z--1 inset-0 px-2px py-2px transition-all rounded-lg ) "
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.btn:hover {
  &::after {
    opacity: 1;
  }
}

.btn::before {
  background: var(--background-gradient);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.btn::after {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all;
  transition-duration: 300ms;
  z-index: -1;
  opacity: 0;
  border-radius: 0.5rem;
  background: var(--background-gradient);
}
</style>
