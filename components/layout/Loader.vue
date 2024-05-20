<template>
  <div class="spinner-wrapper">
    <NuxtImg src="../../loader.svg" alt="loader" width="70"/>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.spinner-wrapper {
  @apply bg-dark flex items-center justify-center w-screen h-screen;
}
</style>
