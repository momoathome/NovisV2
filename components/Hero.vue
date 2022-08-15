<script setup lang="ts"></script>

<template>
  <section class="w-full relative z-5 min-h-60vh">
    <!-- Layer 1 -->
    <!-- change ### top-px ### to increase or decrease thickness of arrow -->
    <div
      class="hero-clip absolute w-full h-[calc(100%+2px)] top-2px left-0 z-0 bg-primary dark:bg-light-700"
    />
    <!-- Layer 2 -->
    <div
      class="hero-clip absolute w-[calc(100%)] h-[calc(100%+2px)] top-0 left-0 z-1 bg-light-900 dark:bg-primary"
    />

    <!-- Heading -->
    <div class="flex items-center justify-center w-full h-full text-center">
      <div class="max-w-30ch md:max-w-55ch xl:max-w-75ch z-5 mt-10">
        <h1
          class="text-3rem md:text-4.5rem xl:text-6rem leading-none font-bold transition text-primary dark:text-white"
        >
          Snow0wl's Nuxt Starter
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-clip {
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>
