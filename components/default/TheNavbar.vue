<script setup lang="ts">
/* Mobile Menu */
const isActive = ref(false)
function showMenu() {
  if (isActive.value)
    isActive.value = false
  else isActive.value = !isActive.value
}

/* Dropdown Menu */
const isDDMDown = ref(false)
const target = ref()
function showDDM() {
  if (isDDMDown.value)
    isDDMDown.value = false
  else isDDMDown.value = !isDDMDown.value
}
onClickOutside(target, () => {
  if (isDDMDown.value)
    isDDMDown.value = false
})
</script>

<template>
  <div class="flex-grow-2">
    <nav
      class="flex-col flex h-screen bg-base/85 w-full py-2 px-6 transition-left top-28 left--100% z-100 fixed md:( w-30% h-full ) lg:( static bg-transparent flex-row justify-center me-3% w-full h-auto p-block-0 ) "
      :class="[isActive ? 'left-0' : '']"
    >
      <!-- Navigation Links -->
      <NuxtLink to="/" class="nav-item-link" @click="showMenu">
        News
      </NuxtLink>
      <!-- prettier-ignore -->
      <NuxtLink to="/downloads" class="nav-item-link" @click="showMenu">
        Downloads
      </NuxtLink>
      <NuxtLink to="/rankings" class="nav-item-link" @click="showMenu">
        Rankings
      </NuxtLink>
      <NuxtLink to="/shop" class="nav-item-link" @click="showMenu">
        Shop
      </NuxtLink>

      <div ref="target" class="cursor-pointer nav-item-link relative" @click="showDDM()">
        <!-- Nav Item to trigger Dropdown Menu -->
        <div class="flex">
          <span>Informations</span>
          <div
            i-ph-caret-down-fill
            class="transition-transform transition-duration-300 align-middle ms-1"
            :class="[isDDMDown ? 'rotate-180' : '']"
          />
        </div>

        <!-- Dropdown menu -->
        <div
          class="transition transition-duration-300 lg:( origin-top-right absolute top-74px right-16px w-40 bg-base/85 z-20 rounded-b-md shadow-black/20 shadow-md ) "
          :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
          @click="showDDM"
        >
          <!-- prettier-ignore -->
          <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
            <NuxtLink to="/features" class="dropDown-item" @click="showMenu(); showDDM()">
              Features
            </NuxtLink>
            <NuxtLink to="/guides" class="dropDown-item" @click="showMenu(); showDDM()">
              Guides
            </NuxtLink>
            <NuxtLink to="/faq" class="dropDown-item" @click="showMenu(); showDDM()">
              FAQ
            </NuxtLink>
            <NuxtLink to="/team" class="dropDown-item" @click="showMenu(); showDDM()">
              Team
            </NuxtLink>
            <NuxtLink to="/rules" class="dropDown-item" @click="showMenu(); showDDM()">
              Rules
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile button -->
    <div class="cursor-pointer p-3 block float-right me-8 lg:hidden" @click="showMenu()">
      <span class="bar" :class="[isActive ? 'translate-y-8px rotate-45' : '']" />
      <span class="bar" :class="[isActive ? 'opacity-0' : '']" />
      <span class="bar" :class="[isActive ? 'translate-y--8px rotate--45' : '']" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark .router-link-exact-active {
  color: white;
}
</style>
