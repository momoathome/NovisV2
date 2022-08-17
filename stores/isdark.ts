import {defineStore} from 'pinia'

export const useIsdark = defineStore('isdark', () => {
  const isdark = usePreferredDark()

  function change() {
    isdark.value = !isdark.value
  }
  function update(value) {
    isdark.value = value
  }

  return {isdark, change, update}
})
