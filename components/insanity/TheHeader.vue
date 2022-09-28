<template>
  <header class="w-full h-14 flex bg-base_dark/95 fixed top-0 right-0 px-4 lg:px-16 z-20">
    <div class="flex justify-center items-center w-full">
      <!-- Logo  -->
      <InsanityTheNavbar />

      <div class="flex items-center gap-3 lg:gap-6">
        <!-- Discord component -->
        <DiscordButton class="text-xl" :open="isOpen" @click="modal.show()" />
        <!-- Darkmode Component - Button -->
        <DarkButton class="text-xl" />
      </div>
    </div>

    <DiscordModal v-show="isOpen" :open="isOpen" @click="modal.hide" />
  </header>
</template>

<script setup lang="ts">
import {useModal} from '~/stores/modal'

/* Discord Modal */
const modal = useModal() // modal store
const isOpen = ref(false) // isModal open
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
