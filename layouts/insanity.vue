<script setup></script>

<script setup>
mode.value = 'insanity'
</script>

<template>
  <div class="flex flex-col text-primary_light min-h-100vh">
    <InsanityTheHeader />
    <TemplateChange />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- <TheFooter /> -->
    <InsanityTheFooter />
  </div>
</template>
