<script setup></script>

<template>
  <div class="min-h-100vh flex flex-col text-primary_light">
    <InsanityTheHeader />
    <TemplateChange />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- <TheFooter /> -->
    <InsanityTheFooter />
  </div>
</template>

<script setup>
mode.value = 'insanity'
</script>
