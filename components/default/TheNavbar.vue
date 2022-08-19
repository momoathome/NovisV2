<script setup lang="ts">
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
onClickOutside(target, (e) => {
  if (isDDMDown.value === true) {
    isDDMDown.value = false
  } else return
})
</script>

<template>
  <div>
    <nav
      class="fixed bg-base/85 left--100% top-28 flex-col w-full h-screen py-2 px-6 z-100 transition-left flex md:( w-30% h-full ) lg:( static bg-transparent flex-row w-auto h-auto p-block-0 )"
      :class="[isActive ? 'left-0' : '']"
    >
      <!-- Navigation Links -->
      <NuxtLink to="/" class="nav-item-link"> News </NuxtLink>
      <NuxtLink to="/downloads" class="nav-item-link"> Downloads </NuxtLink>
      <NuxtLink to="/rankings" class="nav-item-link"> Rankings </NuxtLink>

      <div class="nav-item-link relative cursor-pointer" @click="showDDM()">
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
          class="transition transition-duration-300 lg:( origin-top-right absolute top-74px right-16px w-40 bg-base/85 z-20 rounded-b-md shadow-md )"
          :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
          @click="showDDM"
          ref="target"
        >
          <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
            <NuxtLink to="/features" class="dropDown-item"> Features </NuxtLink>
            <NuxtLink to="/guides" class="dropDown-item"> Guides </NuxtLink>
            <NuxtLink to="/faq" class="dropDown-item"> FAQ </NuxtLink>
            <NuxtLink to="/rules" class="dropDown-item"> Rules </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile button -->
    <div class="mobil-button block lg:hidden px-3 cursor-pointer" @click="showMenu()">
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
