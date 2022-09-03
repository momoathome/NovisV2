<template>
  <div>
    <!-- <Hero /> -->
    <div class="w-full h-85vh relative flex flex-col gap-8 justify-center items-center">
      <img src="/img/hero.webp" alt="" class="absolute top-0 left-0 w-full h-full" />
      <div class="flex flex-col z-2">
        <h2 class="text-white tracking-wide text-center uppercase text-5xl m-0">
          Welcome to
        </h2>
        <h1 class="text-white tracking-wide text-center text-8xl mt-3 mb-0">
          NovisCMS V2
        </h1>
        <p class="text-2xl tracking-wide text-white mt-8">
          We deliver the fastest, the safest and the most beautiful Flyff websites on the
          market
        </p>
      </div>
    </div>
    <main class="bg-base flex flex-col justify-center pt-20">
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
