<script setup lang="ts"></script>

<template>
  <div class="flex flex-col mt-200px justify-center items-center">
    <NuxtLink to="/" class="text-white mb-20 text-3xl">
      <div i-fa6-solid-angles-left />
      Home
    </NuxtLink>
    <p class="m-0 text-white text-2xl">
      Route params: {{ $route.params.id }}
    </p>
  </div>
</template>

<style scoped></style>
