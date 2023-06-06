<template>
  <div
    class="h-2px my-8 w-full top-5px relative divider before:( content-empty absolute top-0 left-5% right-5% w-90% h-2px ) after:( content-empty absolute z-0 top-0 left-[calc(50%-14px)] bg-base w-27px h-2px ) "
  >
    <div
      i-la-angle-down
      class="bg-base_dark/90% text-center top--12px left-[calc(50%-18px)] text-4xl leading-0 z-2 absolute"
    />
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
