<template>
  <div>
    <button @click="switchTheme()" class="counter-btn">switchTheme: {{ mode }}</button>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    update: 'update',
    default: 'default',
  },
})

const switchTheme = () => {
  if (mode.value == 'update') {
    mode.value = 'default'
  } else mode.value = 'update'
}

mode.value = 'default'
</script>
