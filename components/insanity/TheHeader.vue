<script setup lang="ts">
import { useModal } from '~/stores/modal'

/* Discord Modal */
const modal = useModal() // modal store
const isOpen = ref(false) // isModal open
function toggleModal() {
  isOpen.value = !isOpen.value
}

modal.$subscribe((mutation, state) => {
  if (state.state === true && isOpen.value === false)
    toggleModal()
  else if (state.state === false && isOpen.value === true)
    toggleModal()
})
</script>

<template>
  <header class="flex bg-base_dark/95 h-14 w-full px-4 top-0 right-0 z-20 fixed lg:px-16">
    <div class="flex w-full items-center lg:justify-center">
      <!-- Logo  -->
      <InsanityTheNavbar />

      <div class="flex gap-3 items-center lg:gap-6">
        <!-- sign up -->
        <div class="cursor-pointer flex p-2 gap-4 items-center group lg:py-4.75">
          <div
            class="flex bg-hex-262626 border-1 border-base/5 h-22px w-22px rotate-45 items-center justify-center"
          >
            <div i-heroicons-lock-closed-solid class="bg-primary text-sm rotate--45" />
          </div>
          <span
            class="font-sans text-white text-sm transition transition-duration-200 uppercase whitespace-nowrap group-hover:text-primary"
          >
            Sign Up
          </span>
        </div>

        <!-- sign in -->
        <InsanityPrimaryButton>Login</InsanityPrimaryButton>
        <!-- Discord component -->
        <DiscordButton class="text-xl" :open="isOpen" @click="modal.show()" />
        <!-- Darkmode Component - Button -->
        <DarkButton class="text-xl" />
        <!-- Multilanguage -->
        <div i-twemoji-flag-united-kingdom class="text-xl icon-btn" />
      </div>
    </div>

    <DiscordModal v-show="isOpen" :open="isOpen" @click="modal.hide" />
  </header>
</template>

<style scoped></style>
