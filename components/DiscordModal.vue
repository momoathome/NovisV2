<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <Transition name="fade">
    <div v-show="open" class="h-full bg-black/50 w-full top-0 left-0 z-20 fixed">
      <!-- prettier-ignore -->
      <transition name="drop-in">
        <div
          v-show="open"
          class="shadow-md w-max transform top-1/2 left-1/2 shadow-black/20 z-30 -translate-x-1/2 -translate-y-1/2 fixed antialiased"
        >
          <iframe src="https://discord.com/widget?id=1062748088525131826&theme=dark" width="460" height="540" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
        </div>
      </transition>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(130%, -130%) scale(0.1);
}
</style>
