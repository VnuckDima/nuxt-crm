<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";
import { useNuxtApp } from "#app";
import type { Account } from "appwrite";

const nuxtApp = useNuxtApp();
const account = nuxtApp.$appwriteAccount as Account;

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession("current");
  authStore.clear();
  await router.push("/login");
  isLoadingStore.set(false);
};

console.log(account);
</script>

<template>
  <aside class="px-5 py-8 bg-dark h-screen relative w-ful">
    <NuxtLink to="/" class="mb-10">
      <NuxtImg src="./logo.svg" alt="" width="200" class="mx-auto" />
    </NuxtLink>
    <Icon name="material-symbols:logout" class="logout-icon" @click="logout" />
    <LayoutMenu />
  </aside>
</template>

<style scoped>
.logout-icon {
  @apply absolute top-3 right-3 text-white cursor-pointer transition-colors hover:text-red text-2xl;
}
</style>
