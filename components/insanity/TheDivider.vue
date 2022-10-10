<template>
  <div
    class="relative w-full h-2px top-5px my-8 divider before:( content-empty absolute top-0 left-5% right-5% w-90% h-2px ) after:( content-empty absolute z-0 top-0 left-50% bg-base w-22px h-2px )">
    <div
      i-ion-ios-arrow-down
      class="absolute text-center text-4xl leading-0 z-2 top--11px left-[calc(50%-7px)] bg-base_dark/90%" />
    <div class="divider-symbol" />
  </div>
</template>

<style scoped>
.divider::before {
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(var(--base-dark)),
    transparent
  );
}
</style>
