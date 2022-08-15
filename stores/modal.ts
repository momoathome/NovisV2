import {defineStore} from 'pinia'

export const useModal = defineStore('modal', () => {
  const state = ref(false)

  function show() {
    state.value = true
  }
  function hide() {
    state.value = false
  }

  return {state, show, hide }
})
