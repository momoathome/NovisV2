<template>
  <div
    class="fixed z-999 top-120px right-2 bg-white rounded-md p-3 group transition transition-duration-30 cursor-pointer"
    @click="showDDM()"
    ref="target"
  >
    <div class="relative">
      <!-- Nav Item to trigger Dropdown Menu -->
      <div class="flex">
        <div
          i-fa-solid-paint-brush
          class="align-middle transition transition-duration-300 bg-dark-600 group-hover:bg-secondary"
          :class="[isDDMDown ? 'bg-secondary' : '']"
        />
        <div
          i-ph-caret-down-fill
          class="ms-1 align-middle transition transition-duration-300 bg-dark-600 group-hover:bg-secondary"
          :class="[isDDMDown ? 'rotate-180 bg-secondary' : '']"
        />
      </div>

      <!-- Dropdown menu -->
      <div
        class="transition transition-duration-150 origin-top-right absolute top-8 right--2 w-min bg-white z-20 rounded-md shadow-black/20 shadow-md"
        :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
        @click="showDDM"
      >
        <!-- prettier-ignore -->
        <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
          <p class="cursor-default text-xs font-serif font-bold py-2 px-4 text-left w-max  text-dark-800/50 m-0 lg:( hover:bg-transparent )">Select Design</p>
          <NuxtLink to="/" @click="showDDM(); reload(); layout='default'" class="template-DropDown-Item"> Base </NuxtLink>
          <NuxtLink to="/insanity" @click="showDDM(); reload(); layout='insanity'" class="template-DropDown-Item"> Insanity </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Dropdown Menu */
const layout = ref('default')
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

function reload() {
  setTimeout(() => {
    location.reload()
    setLocalStorage('layout', layout.value)
  }, 20)
}
</script>

<style scoped></style>
