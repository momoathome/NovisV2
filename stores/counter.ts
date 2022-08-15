import {defineStore} from 'pinia'

export const useCounter = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }
  function reset() {
    count.value = 0
  }
  function increment2x() {
    count.value *= 2
  }

  return {count, increment, decrement, reset, increment2x}
})
