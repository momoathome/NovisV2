<script setup lang="ts">
/* Mobile Menu */
const isActive = ref(false)
const showMenu = () => {
  if (isActive.value) {
    isActive.value = false
  } else isActive.value = !isActive.value
}

/* Dropdown Menu */
const isDDMDown = ref(false)
const target = ref()
const showDDM = () => {
  if (isDDMDown.value) {
    isDDMDown.value = false
  } else isDDMDown.value = !isDDMDown.value
}
onClickOutside(target, (e) => {
  if (isDDMDown.value) {
    isDDMDown.value = false
  }
})
</script>

<template>
  <div class="flex-grow-2">
    <nav
      class="fixed bg-base/85 left--100% top-28 flex-col w-full h-screen py-2 px-6 z-100 transition-left flex md:( w-30% h-full ) lg:( static bg-transparent flex-row justify-center me-3% w-full h-auto p-block-0 )"
      :class="[isActive ? 'left-0' : '']"
    >
      <!-- Navigation Links -->
      <NuxtLink to="/" @click="showMenu" class="nav-item-link"> News </NuxtLink>
      <!-- prettier-ignore -->
      <NuxtLink to="/downloads" @click="showMenu" class="nav-item-link">Downloads</NuxtLink>
      <NuxtLink to="/rankings" @click="showMenu" class="nav-item-link">Rankings</NuxtLink>

      <div class="nav-item-link relative cursor-pointer" @click="showDDM()" ref="target">
        <!-- Nav Item to trigger Dropdown Menu -->
        <div class="flex">
          <span>Informations</span>
          <div
            i-ph-caret-down-fill
            class="ms-1 align-middle transition-transform transition-duration-300"
            :class="[isDDMDown ? 'rotate-180' : '']"
          />
        </div>

        <!-- Dropdown menu -->
        <div
          class="transition transition-duration-300 lg:( origin-top-right absolute top-74px right-16px w-40 bg-base/85 z-20 rounded-b-md shadow-black/20 shadow-md )"
          :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
          @click="showDDM"
        >
          <!-- prettier-ignore -->
          <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
            <NuxtLink to="/features" @click="showMenu(); showDDM()" class="dropDown-item"> Features </NuxtLink>
            <NuxtLink to="/guides" @click="showMenu(); showDDM()" class="dropDown-item"> Guides </NuxtLink>
            <NuxtLink to="/faq" @click="showMenu(); showDDM()" class="dropDown-item"> FAQ </NuxtLink>
            <NuxtLink to="/team" @click="showMenu(); showDDM()" class="dropDown-item"> Team </NuxtLink>
            <NuxtLink to="/rules" @click="showMenu(); showDDM()" class="dropDown-item"> Rules </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile button -->
    <div class="block float-right me-8 lg:hidden p-3 cursor-pointer" @click="showMenu()">
      <span class="bar" :class="[isActive ? 'translate-y-8px rotate-45' : '']"></span>
      <span class="bar" :class="[isActive ? 'opacity-0' : '']"></span>
      <span class="bar" :class="[isActive ? 'translate-y--8px rotate--45' : '']"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark .router-link-exact-active {
  color: white;
}
</style>
