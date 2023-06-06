<script setup></script>

<script setup>
mode.value = 'default'
</script>

<template>
  <div class="flex flex-col text-primary_light min-h-100vh">
    <TheHeader />
    <TemplateChange />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- <TheFooter /> -->
  </div>
</template>
