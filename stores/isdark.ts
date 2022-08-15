import {defineStore} from 'pinia'

const preffersDark = usePreferredDark()

export const useIsdark = defineStore('isdark', () => {
  const isdark = preffersDark

  function change() {
    isdark.value = !isdark.value
  }
  function update(value) {
    isdark.value = value
  }

  return {isdark, change, update}
})
