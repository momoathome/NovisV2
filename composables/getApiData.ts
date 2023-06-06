export default async function (link: String) {
  const config = useRuntimeConfig()

  const data = await $fetch(`${config.public.apiBase}/${link}`, {
    headers: { TOKEN: config.apiSecret },
  })

  return data
}
