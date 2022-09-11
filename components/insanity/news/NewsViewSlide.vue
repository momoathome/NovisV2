<template>
  <transition name="slide">
    <slot />
  </transition>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}
.slide-enter-from {
  transform: translateX(1200px);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0px);
}
.slide-leave-to {
  transform: translateX(-1200px);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
