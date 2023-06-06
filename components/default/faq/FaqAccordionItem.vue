<script setup lang="ts">
defineProps({
  faq: Object,
})

const isActive = ref(false)
const target = ref(null)

function openItem() {
  isActive.value = !isActive.value

  if (target.value.style.maxHeight) {
    target.value.style.maxHeight = null
    return
  }
  target.value.style.maxHeight = `${target.value.scrollHeight}px`
}
</script>

<template>
  <button
    type="button"
    class="bg-base_light border-none cursor-pointer font-sans font-bold text-white text-sm w-full p-4 transition-all z-0 transition-duration-300 accordion relative uppercase"
    :class="isActive ? 'rounded-t-10px open' : 'rounded-10px'"
    @click="openItem"
  >
    {{ faq.question }}
    <div class="float-right">
      <span
        class="z-0 !border-none"
        :class="
          isActive ? 'i-fa6-solid-minus bg-white ' : 'i-fa6-solid-plus bg-secondary '
        "
      />
    </div>
  </button>
  <div
    ref="target"
    class="bg-base_dark rounded-b-10px mt--2 max-h-0 px-4 transition-max-height transition-ease-out transition-duration-200 overflow-hidden"
    v-html="faq.answer"
  />
</template>

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
