<template>
  <!-- prettier-ignore -->
  <div class="min-h-100vh font-sans flex flex-col text-gray-400  ">
    
    <DefaultTheHeader />

    <div class="flex-grow">
      <slot />
    </div>

    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    novisV2: 'novisV2',
    update: 'update',
    default: 'default',
  },
})
mode.value = 'novisV2'
</script>
