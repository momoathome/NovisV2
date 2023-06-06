<script setup lang="ts">
defineProps({
  teamRole: String,
})

function setRoleColor(role: string) {
  switch (role) {
    case 'admin':
      return 'text-primary'
    case 'developer':
      return 'text-secondary'
    case 'gamemaster':
      return 'text-tertiary'
    case 'support':
      return 'text-accent'
    case 'mapper':
      return 'text-primary_light'

    default:
      return 'text-primary'
  }
}
</script>

<template>
  <!-- prettier-ignore -->
  <div class="bg-base_dark flex flex-col m-auto rounded-10px shadow-md max-w-450px p-10 shadow-black/20 group relative justify-center items-center">
    <div class="rounded-full shadow-md p-4px transition-all top--60px left-50% shadow-black/20 translate-x--50% transition-duration-200 absolute wrapper group-hover:p-8px ">
      <img
        src="/img/owl_logo.png"
        alt=""
        width="120"
        height="120"
        class="rounded-inherit"
      >
    </div>

    <h2 class="mt-12 text-white mb-0 text-2xl">
      Snowowl
    </h2>
    <p class="font-bold font-sans m-0 text-sm uppercase" :class="setRoleColor(teamRole)">
      {{ teamRole }}
    </p>
    <p class="font-sans text-center leading-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, corporis optio
      minus harum quo laudantium odit. Architecto optio
    </p>

    <div v-if="teamRole == 'admin'" i-jam-crown-f class="bg-base_light h-24 top--2 right-2 w-24 absolute" />
    <div v-if="teamRole == 'developer'" i-bi-tools class="bg-base_light h-17 top-3 right-4 w-17 absolute" />
    <div v-if="teamRole == 'gamemaster'" i-eos-icons-admin-outlined class="bg-base_light h-22 top-1 right-3 w-22 absolute" />
    <div v-if="teamRole == 'support'" i-bx-support class="bg-base_light h-22 top-1 right-2 w-22 absolute" />
  </div>
</template>

<style scoped>
.wrapper {
  background: var(--background-gradient);
}
</style>
