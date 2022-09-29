<template>
  <header class="w-full h-14 flex bg-base_dark/95 fixed top-0 right-0 px-4 lg:px-16 z-20">
    <div class="flex justify-center items-center w-full">
      <!-- Logo  -->
      <InsanityTheNavbar />

      <div class="flex items-center gap-3 lg:gap-6">
        <!-- sign up -->
        <div class="flex gap-4 items-center cursor-pointer p-2 lg:py-4.75 group">
          <div
            class="w-22px h-22px bg-hex-262626 border-1 border-base/5 flex items-center justify-center rotate-45">
            <div i-heroicons-lock-closed-solid class="bg-primary rotate--45 text-sm" />
          </div>
          <span
            class="uppercase font-sans text-white text-sm group-hover:text-primary transition transition-duration-200 whitespace-nowrap">
            Sign Up
          </span>
        </div>

        <!-- sign in -->
        <InsanityPrimaryButton>Login</InsanityPrimaryButton>
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
