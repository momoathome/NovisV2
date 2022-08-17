<template>
  <!-- prettier-ignore -->
  <div class="min-h-100vh font-sans flex flex-col text-dark-800 bg-base_light dark:( text-light-700 bg-base )">
    <header>
      <Navbar />
    </header>

    <div class="flex-grow">
      <slot />
    </div>

    <TheFooter />
  </div>
</template>

<script setup></script>
