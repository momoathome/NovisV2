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
onClickOutside(target, (e) => {
  if (isDDMDown.value)
    isDDMDown.value = false
})
</script>

<template>
  <div class="flex-grow-2 xl:ms-18%">
    <nav
      class="flex-col flex h-screen bg-base_dark/95 w-full py-2 px-6 transition-left top-14 left--100% z-100 fixed md:( w-30% h-full ) lg:( static bg-transparent flex-row justify-center me-3% w-full h-auto p-block-0 ) "
      :class="[isActive ? 'left-0' : '']"
    >
      <!-- Navigation Links -->
      <NuxtLink to="/insanity" class="insanity-nav-item-link" @click="showMenu">
        HOME
      </NuxtLink>
      <NuxtLink to="/insanity/shop" class="insanity-nav-item-link" @click="showMenu">
        ITEM MALL
      </NuxtLink>
      <NuxtLink to="/insanity/downloads" class="insanity-nav-item-link" @click="showMenu">
        DOWNLAODS
      </NuxtLink>
      <NuxtLink to="/insanity/rankings" class="insanity-nav-item-link" @click="showMenu">
        RANKINGS
      </NuxtLink>
      <NuxtLink to="/insanity/features" class="insanity-nav-item-link" @click="showMenu">
        FEATURES
      </NuxtLink>
      <div
        ref="target"
        class="cursor-pointer insanity-nav-item-link relative"
        @click="showDDM()"
      >
        <!-- Nav Item to trigger Dropdown Menu -->
        <div class="flex">
          <span>Support</span>
          <div
            i-ph-caret-down-fill
            class="transition-transform transition-duration-300 align-middle ms-1"
            :class="[isDDMDown ? 'rotate-180' : '']"
          />
        </div>

        <!-- Dropdown menu -->
        <div
          class="transition transition-duration-300 lg:( origin-top-right absolute top-55px right--30px w-42 bg-base_dark/95 z-20 rounded-b-md shadow-black/20 shadow-md ) "
          :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
          @click="showDDM"
        >
          <!-- prettier-ignore -->
          <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
            <NuxtLink to="/insanity/faq" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
              FAQ
            </NuxtLink>
            <NuxtLink to="/insanity/guides" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
              Guides
            </NuxtLink>
            <NuxtLink to="/insanity/tickets" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
              Ticket support
            </NuxtLink>
            <NuxtLink to="/insanity/#" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
              IPoints
            </NuxtLink>
            <NuxtLink to="/insanity/team" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
              Team
            </NuxtLink>
            <NuxtLink to="/insanity/rules" class="insanity-dropDown-item" @click="showMenu(); showDDM()">
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
