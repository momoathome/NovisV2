<template>
  <button
    type="button"
    class="cursor-pointer font-sans tracking-1px uppercase font-bold relative inline-block z-0 px-4 py-2 text-xs whitespace-nowrap md:( px-8 py-3 text-sm ) xl:( px-12 py-4 ) rounded-lg shadow-xl border-none bg-transparent text-white transition-all transition-duration-300 before:( content-empty absolute z--1 inset-0 px-2px py-2px transition-all rounded-lg )"
  >
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button:hover {
  &::after {
    opacity: 1;
  }
}

button::before {
  background: var(--background-gradient);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

button::after {
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
