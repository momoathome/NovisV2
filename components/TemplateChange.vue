<script setup lang="ts">
/* Dropdown Menu */
const layout = ref('default')
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

function reload() {
  setTimeout(() => {
    location.reload()
    setLocalStorage('layout', layout.value)
  }, 20)
}
</script>

<template>
  <div
    ref="target"
    class="bg-white rounded-md cursor-pointer p-3 transition top-120px right-2 z-999 transition-duration-30 fixed group"
    @click="showDDM()"
  >
    <div class="relative">
      <!-- Nav Item to trigger Dropdown Menu -->
      <div class="flex">
        <div
          i-fa-solid-paint-brush
          class="bg-dark-600 transition transition-duration-300 align-middle group-hover:bg-secondary"
          :class="[isDDMDown ? 'bg-secondary' : '']"
        />
        <div
          i-ph-caret-down-fill
          class="bg-dark-600 transition transition-duration-300 align-middle ms-1 group-hover:bg-secondary"
          :class="[isDDMDown ? 'rotate-180 bg-secondary' : '']"
        />
      </div>

      <!-- Dropdown menu -->
      <div
        class="bg-white rounded-md shadow-md w-min origin-top-right transition top-8 right--2 shadow-black/20 z-20 transition-duration-150 absolute"
        :class="[isDDMDown ? 'opacity-100 ' : 'opacity-0']"
        @click="showDDM"
      >
        <!-- prettier-ignore -->
        <div class="py-2" :class="[isDDMDown ? 'block' : 'hidden']">
          <p class="cursor-default font-serif font-bold m-0 text-xs text-left w-max py-2  px-4 text-dark-800/50 lg:( hover:bg-transparent ) ">
            Select Design
          </p>
          <NuxtLink to="/" class="template-DropDown-Item" @click="showDDM(); reload(); layout = 'default'">
            Base
          </NuxtLink>
          <NuxtLink to="/insanity" class="template-DropDown-Item" @click="showDDM(); reload(); layout = 'insanity'">
            Insanity
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
