<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";
import { useNuxtApp } from '#app'
import type { Account } from "appwrite";

const nuxtApp = useNuxtApp()
const account = nuxtApp.$appwriteAccount as Account

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  isLoadingStore.set(true);
  try {
    const user = await account.get();

    if (user) {
      authStore.set(user);
    }
  } catch (err) {
    router.push("/login");
    console.log("Not logged in", err);
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading" />
  <section v-else class="grid grid-cols-1 md:grid-cols-7">
    <LayoutSidebar class="md:col-span-1" />
    <div class="md:col-span-6">
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
