<template>
  <div>
    <!-- <Hero /> -->
    <img src="/img/hero.webp" alt="" width="1920" height="800" />
    <main class="bg-base flex flex-col justify-center pt-8rem">
      <DefaultNews />

      <!-- <button @click="changeComp()">my Button</button>
      <component :is="asyncComponent" />
      <h1 class="text-5xl text-center m-0 pt-8rem h-1000px text-white">News</h1> -->
    </main>
  </div>
</template>

<script setup>
const template = ref('default')
const asyncComponent = shallowRef(null)

/* function setAsyncComponentValue() {
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
}) */
</script>

<style></style>
