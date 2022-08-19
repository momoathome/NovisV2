<template>
  <div class="my-2">
    <div class="mb-4 text-center text-xl">
      Counter : {{ numberFormat(counter.count) }}
    </div>
    <div
      class="flex flex-col items-center justify-items-center space-y-2 md:(space-y-0 flex-row space-x-2)"
    >
      <button class="counter-btn" @click.prevent="counter.increment">increment</button>
      <button class="counter-btn" @click.prevent="counter.decrement">decrement</button>
      <button
        class="counter-btn disabled:(cursor-default bg-gray)"
        :disabled="isDisabled"
        @click.prevent="counter.increment2x"
      >
        counter x2
      </button>
      <button class="counter-btn" @click.prevent="counter.reset">reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCounter} from '~/stores/counter'
const counter = useCounter()
const isDisabled = ref(true)

counter.$subscribe((mutation, state) => {
  if (state.count !== 0 && isDisabled.value == true) {
    toggleDisabled()
  } else if (state.count === 0 && isDisabled.value == false) {
    toggleDisabled()
  }
})

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
</script>
