import {useLocalStorage} from '@vueuse/core'
export const getCurrentTheme = () => {

const state = useLocalStorage('vueuse-color-scheme', 'default')
if (state.value == 'auto' || state.value == 'dark' || state.value == 'light') {
  mode.value = 'default'
}
if (state.value !== 'default' && mode.value !== 'default') {
  mode.value = state.value
} else mode.value = 'default'
}  

