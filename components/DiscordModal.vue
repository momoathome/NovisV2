<template>
  <Transition name="fade">
    <div class="h-full w-full fixed top-0 left-0 z-20 bg-black/50" v-show="open">
      <!-- prettier-ignore -->
      <transition name="drop-in">
        <div 
          class="shadow-black/20 shadow-md w-max fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 antialiased" 
          v-show="open"
        >
          <iframe src="https://discord.com/widget?id=936744932629176392&theme=dark" width="460" height="540"></iframe>
        </div>
      </transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
</script>

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
