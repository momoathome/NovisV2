<script setup lang="ts"></script>

<template>
  <div class="w-full">
    <div class="bg-base_dark flex flex-col h-350px w-full justify-center items-center">
      <h1 class="mt-30 text-white uppercase">
        Team
      </h1>
      <p class="m-0">
        Here you can find information about our Team
      </p>
    </div>

    <div class="container m-auto max-w-1024px p-block-35 px-8 lg:px-0">
      <div class="grid gap-x-12 gap-y-32 grid-cols-[repeat(auto-fit,minmax(325px,1fr))]">
        <TeamMember team-role="admin" />
        <TeamMember team-role="developer" />
        <TeamMember team-role="gamemaster" />
        <TeamMember team-role="support" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
