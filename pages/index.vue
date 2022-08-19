<template>
  <div>
    <!-- <Hero /> -->
    <img src="/img/gaming-website-template.jpg" alt="" width="1920" height="700" />
    <main class="bg-base text-center">
      <button @click="changeComp()">my Button</button>
      <component :is="asyncComponent" />
      <h1 class="text-5xl text-center m-0 pt-8rem h-1000px text-white">News</h1>
    </main>
  </div>
</template>

<script setup>
const template = ref('default')
const asyncComponent = shallowRef(null)

function setAsyncComponentValue() {
  asyncComponent.value = defineAsyncComponent(() => {
    return import(`~/components/${template.value}/Tester.vue`) // works
  })
}

function changeComp() {
  if (template.value === 'default') {
    template.value = 'testComp'
  } else template.value = 'default'

  setAsyncComponentValue()
}

onMounted(() => {
  setAsyncComponentValue()
})
</script>

<style></style>
