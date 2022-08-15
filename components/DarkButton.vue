<script setup lang="ts">
const dark = usePinia()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    @click.prevent="dark.change"
    class="icon-btn bg-transparent"
  >
    <div dark:i-carbon-moon i-carbon-sun />
  </button>
</template>
