<template>
  <div class="flex" :class="isOdd(order) ? 'flex-row-reverse' : ''">
    <img
      src="https://via.placeholder.com/300x300/8E28DE/808080?Text=Digital.com"
      alt=""
      class="shadow-black/20 shadow-md max-h-300px max-w-300px"
      :class="isOdd(order) ? 'ms-10' : 'me-10'"
    />
    <div>
      <h2 class="text-white text-3xl mt-0 flex">Feature Title</h2>
      <p class="font-sans text-sm leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae veniam ipsum
        quas, quia quam, maiores, nostrum odio ducimus et aliquid corrupti culpa at ex.
        Eius laborum amet vero neque atque saepe ullam quia distinctio dolor libero cumque
        nisi quae, quod earum, praesentium illo! Sapiente eos voluptatem molestias quam
        quae animi atque culpa error laudantium? Facilis consectetur laborum possimus.
        Nihil pariatur assumenda est ducimus illum architecto inventore dolore odio fugit
        adipisci.
      </p>
      <p class="font-sans text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit doloremque
        incidunt ex id neque hic, ullam aspernatur omnis, vel, illo ut facere eius
        dignissimos. Tempore porro totam ea, rerum consequatur dolore dolores vel expedita
        itaque modi beatae, fuga aut dignissimos.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  order: Number,
})

function isOdd(x: number) {
  return x & 1 ? true : false
}
</script>

<style scoped></style>
