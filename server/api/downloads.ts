import getApiData from '~~/composables/getApiData'

export default defineEventHandler((event) => {
  return getApiData('downloads')
})
