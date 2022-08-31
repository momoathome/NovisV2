<template>
  <div class="w-full">
    <div class="h-350px w-full bg-base_dark flex flex-col justify-center items-center">
      <h1 class="text-white mt-30 uppercase">Team</h1>
      <p class="m-0">Here you can find information about our Team</p>
    </div>

    <div class="container m-auto max-w-1024px p-block-35 px-8 lg:px-0">
      <div class="grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] gap-x-12 gap-y-32">
        <DefaultTeamMember :teamRole="'admin'" />
        <DefaultTeamMember :teamRole="'developer'" />
        <DefaultTeamMember :teamRole="'gamemaster'" />
        <DefaultTeamMember :teamRole="'support'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
