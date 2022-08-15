<script setup lang="ts">
const isActive = ref(false)
const isDDMDown = ref(false)

const showMenu = () => {
  isActive.value = !isActive.value
}
const showDDM = () => {
  isDDMDown.value = !isDDMDown.value
}
</script>

<template>
  <!-- prettier-ignore -->
  <nav class="m-auto w-full flex py-2 lg:py-0 px-6 b-b-1px b-primary/15 dark:b-light-900/10" >
    <div class="flex justify-between items-center w-full">
        <!-- prettier-ignore -->
        <!-- Logo  -->
      <NuxtLink to="/" class="text-2xl font-semibold whitespace-nowrap no-underline text-dark-800 dark:text-white">NovisV2</NuxtLink>

      <!-- Navigation links -->
      <div
        class="fixed left--100% top-12 flex-col w-full h-screen py-2 px-6 z-50 transition-left flex bg-light-900 dark:bg-primary md:( border-r-1 border-t-1 border-primary dark:border-light-900 w-30% h-full ) lg:( border-none static flex-row w-auto h-auto py-0 m-0 )"
        :class="{active: isActive}"
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
            class="transition lg:( origin-top-right absolute right-0 left--1 mt-3 w-40 rounded-md shadow-lg bg-light-900 dark:bg-primary ring-1 ring-primary dark:ring-light-900 )"
            :class="[isDDMDown ? 'block' : 'hidden']"
          >
            <div class="py-1">
              <NuxtLink to="/features" class="nav-item-link dropDown-item"> Features </NuxtLink>
              <NuxtLink to="/guides" class="nav-item-link dropDown-item"> Guides </NuxtLink>
              <NuxtLink to="/faq" class="nav-item-link dropDown-item"> FAQ </NuxtLink>
              <NuxtLink to="/rules" class="nav-item-link dropDown-item"> Rules </NuxtLink>
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
        :class="{active: isActive}"
        @click="showMenu()"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>

    <!-- Darkmode Component - Button -->
    <DarkButton class="text-2xl" />

    <!-- Gihub Button -->
    <NuxtLink
      to="https://github.com/momoathome"
      rel="noopener noreferrer"
      target="_blank"
      class="icon-btn self-center px-1.5 py-1 text-2xl"
    >
      <div i-carbon-logo-github />
    </NuxtLink>

  </nav>
</template>

<style lang="scss" scoped>
.active {
  left: 0;
}

.dark .router-link-exact-active {
  color: white;
}

.router-link-exact-active {
  color: #0d9488;
}

.mobil-button.active {
  .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .bar:nth-child(2) {
    opacity: 0;
  }
  .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
