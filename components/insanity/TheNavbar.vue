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
      <NuxtLink to="/insanity" @click="showMenu" class="insanity-nav-item-link">
        HOME
      </NuxtLink>
      <NuxtLink to="/insanity" @click="showMenu" class="insanity-nav-item-link"
        >ITEM MALL</NuxtLink
      >
      <NuxtLink to="/insanity/downloads" @click="showMenu" class="insanity-nav-item-link"
        >DOWNLAODS</NuxtLink
      >
      <NuxtLink to="/insanity/rankings" @click="showMenu" class="insanity-nav-item-link"
        >RANKINGS</NuxtLink
      >
      <NuxtLink to="/insanity" @click="showMenu" class="insanity-nav-item-link"
        >FORUM</NuxtLink
      >
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
