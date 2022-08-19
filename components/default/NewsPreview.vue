<template>
  <div
    class="bg-base_light relative flex w-full h-max p-24 rounded-xl shadow-black/20 shadow-lg"
  >
    <div class="left-col">
      <div class="flex justify-between mb-2">
        <div class="flex gap-4">
          <p class="m-0 text-sm uppercase font-bold text-primary font-sans">Event</p>
          <p class="m-0 text-sm uppercase font-bold text-primary font-sans">Patchlog</p>
        </div>

        <div>
          <p class="uppercase font-bold text-sm m-0 tracking-1px">28. Mar 2022</p>
        </div>
      </div>
      <h2 class="text-white m-0 uppercase text-3xl">Sommer Event 2022 (Deutsch)</h2>
      <div class="max-w-65ch">
        <p class="text-sm m-0 mt-8 leading-6 font-sans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
          impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque dolor
          obcaecati cumque sint quod minus beatae.
        </p>
        <p class="text-sm m-0 mt-4 leading-6 font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ducimus, et
          soluta minus id quae dolorum. Voluptates ipsum, omnis ipsa fugit architecto
          dicta nisi voluptas voluptatem voluptatibus eius nostrum numquam culpa quasi
          accusamus...
        </p>
      </div>

      <DefaultPrimaryButton class="mt-16"> Read More </DefaultPrimaryButton>
    </div>
    <div class="absolute top-50% right--15 translate-y--50%">
      <img
        src="https://via.placeholder.com/575x450/7c3aed/808080?Text=Digital.com"
        alt=""
        class="rounded-10px img-shadow"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.img-shadow {
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
}
.outer-shadow {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}
</style>
