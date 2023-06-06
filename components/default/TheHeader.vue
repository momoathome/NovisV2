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
  <header
    class="flex bg-base/85 h-28 shadow-lg w-full px-4 top-0 right-0 shadow-black/20 z-20 fixed lg:px-16"
  >
    <div class="flex w-full justify-between items-center">
      <!-- Logo  -->
      <div class="font-semibold text-white text-3xl">
        NovisV2
      </div>

      <TheNavbar />

      <div class="flex gap-3 items-center lg:gap-6">
        <PrimaryButton>Join us Now</PrimaryButton>

        <!-- Account Panel -->
        <UserPanelButton class="text-lg" />
        <!-- Discord component -->
        <DiscordButton class="text-xl" :open="isOpen" @click="modal.show()" />
        <!-- Darkmode Component - Button -->
        <!-- <DarkButton class="text-xl" /> -->
      </div>
    </div>

    <DiscordModal v-show="isOpen" :open="isOpen" @click="modal.hide" />
  </header>
</template>

<style scoped></style>
