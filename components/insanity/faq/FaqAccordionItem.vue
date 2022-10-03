<template>
  <button
    type="button"
    class="accordion relative z-0 bg-base_light text-white uppercase cursor-pointer p-4 w-full border-none font-sans font-bold text-sm transition-all transition-duration-300"
    @click="openItem"
    :class="isActive ? 'rounded-t-10px open' : 'rounded-10px'">
    {{ faq.question }}
    <div class="float-right">
      <span
        class="z-0 !border-none"
        :class="
          isActive ? 'i-fa6-solid-minus bg-white ' : 'i-fa6-solid-plus bg-secondary '
        "></span>
    </div>
  </button>
  <div
    class="bg-base_dark px-4 max-h-0 mt--2 overflow-hidden transition-max-height transition-duration-200 transition-ease-out rounded-b-10px"
    ref="target"
    v-html="faq.answer"></div>
</template>

<script setup lang="ts">
defineProps({
  faq: Object,
})

const isActive = ref(false)
const target = ref(null)

const openItem = () => {
  isActive.value = !isActive.value

  if (target.value.style.maxHeight) {
    target.value.style.maxHeight = null
    return
  }
  target.value.style.maxHeight = target.value.scrollHeight + 'px'
}
</script>

<style scoped lang="scss">
.accordion:hover {
  &::after {
    opacity: 1;
  }
}

.open::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all;
  transition-duration: 300ms;
  z-index: -1;
  opacity: 1;
  margin: 0;
  border-radius: 10px 10px 0 0;
  background: var(--background-gradient);
}

.accordion::after {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all;
  transition-duration: 300ms;
  z-index: -1;
  opacity: 0;
  margin: 0;
  border-radius: 10px;
  background: var(--background-gradient);
}
</style>
