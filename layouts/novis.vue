<script setup></script>

<template>
  <!-- prettier-ignore -->
  <div class="min-h-100vh flex flex-col text-primary_light">
    
    <DefaultTheHeader />
    <TemplateChange />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
mode.value = 'default'
</script>
