<template setup lang="ts">
defineProps({
  rule: Object,
})
</script>

<template>
  <div>
    <h2>{{ rule.title }}</h2>
    <div
      class="children:( children:( font-sans text-sm leading-6 ) ) "
      v-html="rule.description"
    />
  </div>
</template>

<style scoped></style>
