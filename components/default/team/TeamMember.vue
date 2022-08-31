<template>
  <div
    class="bg-base_dark relative m-auto max-w-450px rounded-10px flex flex-col justify-center items-center p-10 shadow-black/20 shadow-md"
  >
    <div
      class="absolute top--60px left-50% translate-x--50% rounded-full p-3px shadow-black/20 shadow-md wrapper"
    >
      <img
        src="/img/owl_logo.png"
        alt=""
        width="120"
        height="120"
        class="rounded-inherit"
      />
    </div>
    <h2 class="text-white text-2xl mt-12 mb-0">Snowowl</h2>
    <p class="text-sm font-bold font-sans m-0" :class="setRoleColor('gamemaster')">
      Developer
    </p>
    <p class="text-center font-sans leading-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, corporis optio
      minus harum quo laudantium odit. Architecto optio
    </p>
  </div>
</template>

<script setup lang="ts">
const setRoleColor = (role) => {
  switch (role) {
    case 'admin':
      return 'text-primary'
    case 'developer':
      return 'text-secondary'
    case 'gamemaster':
      return 'text-tertiary'
    case 'support':
      return
    case 'mapper':
      return 'text-primary_light'

    default:
      return 'text-primary'
  }
}
</script>

<style scoped>
.wrapper {
  background: var(--background-gradient);
}
</style>
