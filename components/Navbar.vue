<script setup lang="ts">
import {useModal} from '~/stores/modal'

/* Mobile Menu */
const isActive = ref(false)
const showMenu = () => {
  isActive.value = !isActive.value
}

/* Dropdown Menu */
const isDDMDown = ref(false)
const target = ref()
const showDDM = () => {
  isDDMDown.value = !isDDMDown.value
}
onClickOutside(target, (e) => (isDDMDown.value = false))

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

<template>
  <!-- prettier-ignore -->
  <nav class="m-auto w-full flex py-2 lg:py-0 px-6 b-b-1px b-base/15 dark:b-base_light/10" >
    <div class="flex justify-between items-center w-full">
      <!-- Logo  -->
      <!-- prettier-ignore -->
      <NuxtLink to="" class="text-2xl font-semibold whitespace-nowrap no-underline dark:text-white">NovisV2</NuxtLink>

      <!-- Navigation links -->
      <div
        class="fixed left--100% top-12 flex-col w-full h-screen py-2 px-6 z-10 transition-left flex bg-base_light dark:bg-base md:( border-r-1 border-t-1 border-base dark:border-base_light w-30% h-full ) lg:( border-none static flex-row w-auto h-auto py-0 m-0 )"
        :class="[isActive ? 'left-0' : '']"
      >
          <NuxtLink to="/" class="nav-item-link"> News </NuxtLink>
          <NuxtLink to="/downloads" class="nav-item-link"> Downloads </NuxtLink>
          <NuxtLink to="/rankings" class="nav-item-link"> Rankings </NuxtLink>

        <!-- Dropdown item -->
        <div class="nav-item-link relative cursor-pointer">
          <div class="flex" @click="showDDM()">
            <span>Informations</span>
            <div i-fa6-solid-sort-down class="ms-1 lg:mt-0.5" />
          </div>

          <!-- Dropdown menu -->
          <div
            class="transition lg:( origin-top-right absolute right-0 left--1 mt-3 w-40 rounded-md shadow-lg bg-base_light dark:bg-base ring-1 ring-base dark:ring-base_light )"
            :class="[isDDMDown ? 'block' : 'hidden']"
            @click="showDDM"
            ref="target"
          >
            <div class="py-1">
              <NuxtLink to="/features" class="dropDown-item"> Features </NuxtLink>
              <NuxtLink to="/guides" class="dropDown-item"> Guides </NuxtLink>
              <NuxtLink to="/faq" class="dropDown-item"> FAQ </NuxtLink>
              <NuxtLink to="/rules" class="dropDown-item"> Rules </NuxtLink>
            </div>
          </div>
        </div>

          <!-- Navigation links -->
          <NuxtLink to="/login" class="nav-item-link"> Login </NuxtLink>
          <NuxtLink to="/register" class="nav-item-link"> Register </NuxtLink>
      </div>

      <!-- Mobile button -->
      <div
        class="mobil-button block lg:hidden px-6px cursor-pointer"
        @click="showMenu()"
      >
        <span class="bar" :class="[isActive ? 'translate-y-8px rotate-45' : '']"></span>
        <span class="bar" :class="[isActive ? 'opacity-0' : '']"></span>
        <span class="bar" :class="[isActive ? 'translate-y--8px rotate--45' : '']"></span>
      </div>
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

  </nav>
</template>

<style lang="scss" scoped>
.dark .router-link-exact-active {
  color: white;
}
</style>
