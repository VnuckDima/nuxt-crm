<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>

<template>
  <div>
    <NuxtLink
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
      class="menu-link"
    >
      <Icon :name="item.icon" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.menu-link {
  @apply text-white flex items-center gap-3 py-4 px-6 hover:text-red transition-all text-xl hover:bg-gray-300 rounded-full font-medium;
}
</style>
