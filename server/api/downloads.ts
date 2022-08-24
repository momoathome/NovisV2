export default defineEventHandler( async (event) => {
  const config = useRuntimeConfig()

  const newsItems = await $fetch(`${config.public.apiBase}/downloads`, {
    headers: {TOKEN: config.apiSecret},
  }) 
  return newsItems
})