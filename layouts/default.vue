<template>
  <!-- prettier-ignore -->
  <div class="min-h-100vh flex flex-col text-primary_light">
    
    <DefaultTheHeader />
    <TemplateChangeButton />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
/* const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    novisV2: 'novisV2',
    update: 'update',
    default: 'default',
  },
})
mode.value = 'novisV2' */
</script>
