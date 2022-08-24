<template>
  <div class="mt-200px flex flex-col justify-center items-center">
    <NuxtLink to="/" class="text-white text-3xl mb-20">
      <div i-fa6-solid-angles-left />
      Home
    </NuxtLink>
    <p class="text-2xl text-white m-0">Route params: {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
