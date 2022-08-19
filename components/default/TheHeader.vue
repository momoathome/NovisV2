<template>
  <header class="w-full h-28 flex bg-base/85 fixed top-0 right-0 px-4 lg:px-16 shadow-lg">
    <div class="flex justify-between items-center w-full">
      <!-- Logo  -->
      <div class="text-3xl text-white font-semibold">NovisV2</div>

      <DefaultNavbar />

      <div class="flex items-center gap-3 lg:gap-6">
        <DefaultButtonRegister />

        <!-- Account Panel -->
        <div i-teenyicons-user-circle-solid class="icon-btn text-xl"></div>
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
