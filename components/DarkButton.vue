<script setup lang="ts">
import { useIsdark } from '~/stores/isdark'

const dark = useIsdark()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const prefferdDark = usePreferredDark()

/* onBeforeMount(() => {
  prefferdDark ? toggleDark() : ''
}) */
</script>

<template>
  <button
    class="icon-btn"
    dark:i-carbon-moon
    i-carbon-sun
    @click="toggleDark()"
    @click.prevent="dark.change"
  />
</template>
