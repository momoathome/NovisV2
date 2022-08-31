<template>
  <!-- prettier-ignore -->
  <div class="group bg-base_dark relative m-auto max-w-450px rounded-10px flex flex-col justify-center items-center p-10 shadow-black/20 shadow-md" >
    <div class="absolute top--60px left-50% translate-x--50% rounded-full p-4px shadow-black/20 shadow-md transition-all transition-duration-200 wrapper group-hover:p-8px ">
      <img
        src="/img/owl_logo.png"
        alt=""
        width="120"
        height="120"
        class="rounded-inherit"
      />
    </div>

    <h2 class="text-white text-2xl mt-12 mb-0">Snowowl</h2>
    <p class="text-sm font-bold font-sans m-0 uppercase" :class="setRoleColor(teamRole)" >
      {{ teamRole }} 
    </p>
    <p class="text-center font-sans leading-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, corporis optio
      minus harum quo laudantium odit. Architecto optio
    </p>

      <div v-if="teamRole == 'admin'" i-jam-crown-f class="absolute top--2 right-2 h-24 w-24 bg-base_light" />
      <div v-if="teamRole == 'developer'" i-bi-tools class="absolute top-3 right-3 h-17 w-17 bg-base_light" />
      <div v-if="teamRole == 'gamemaster'" i-eos-icons-admin-outlined class="absolute top-1 right-2 h-22 w-22 bg-base_light" />
      <div v-if="teamRole == 'support'" i-bx-support class="absolute top-1 right-2 h-22 w-22 bg-base_light" />

  </div>
</template>

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

<style scoped>
.wrapper {
  background: var(--background-gradient);
}
</style>
