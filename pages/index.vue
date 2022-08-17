<template>
  <div>
    <Hero />

    <section class="mt-10 flex justify-center">
      <Counter />
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true,
  },
})
</script>

<style></style>
