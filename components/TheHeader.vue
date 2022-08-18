<template>
  <!-- prettier-ignore -->
  <header class="m-auto w-full flex py-2 lg:py-0 px-6 b-b-1px b-base/15 dark:b-base_light/10" >
    <div class="flex justify-between items-center w-full">
      <!-- Logo  -->
      <div class="text-2xl font-semibold whitespace-nowrap no-underline dark:text-white">NovisV2</div>

      <Navbar />
      
    </div>

    <div class="flex gap-3 items-center">
      <!-- Discord component -->
      <DiscordButton class="text-xl" :open="isOpen" @click="modal.show()" />
      <!-- Darkmode Component - Button -->
      <DarkButton class="text-xl" />
      <!-- Gihub Button -->
     <GithubButton to="https://github.com/momoathome" class="text-xl" />
    </div>

    <DiscordModal v-show="isOpen" :open="isOpen" @click="modal.hide" />

  </header>
</template>

<script setup lang="ts">
import {useModal} from '~/stores/modal'

/* Discord Modal */
const modal = useModal() // modal store
const isOpen = ref(false)
const toggleModal = () => {
  isOpen.value = !isOpen.value
}

modal.$subscribe((mutation, state) => {
  if (state.state === true && isOpen.value === false) {
    toggleModal()
  } else if (state.state === false && isOpen.value == true) {
    toggleModal()
  }
})
</script>

<style scoped></style>
