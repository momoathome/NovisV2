export default defineEventHandler( async (event) => {
  const config = useRuntimeConfig()

  const data = await $fetch(`${config.public.apiBase}/news`, {
    headers: {TOKEN: config.apiSecret},
  }) 
  return data
})