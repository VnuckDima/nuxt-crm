<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { useNuxtApp } from '#app'
import type { Account } from "appwrite";

useSeoMeta({
  title: "Login",
});

const nuxtApp = useNuxtApp()
const account = nuxtApp.$appwriteAccount as Account

const nameRef = ref("");
const emailRef = ref("");
const passwordRef = ref("");

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();

const router = useRouter();

const login = async () => {
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value);
  const response = await account.get();
  if (response) {
    authStore.set({
      name: response.name,
      email: response.email,
      status: response.status,
    });
  }

  emailRef.value = "";
  passwordRef.value = "";
  nameRef.value = "";

  await router.push("/");

  isLoadingStore.set(false);
};

const register = async () => {
  await account.create(
    uuidv4(),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );

  /* await login(); */
};
</script>

<template>
  <div class="wrapper">
    <div class="login-wrapper">
      <h1 class="text-2xl font-bold text-white mb-[15px]">Login</h1>
      <form>
        <UiInput
          v-model="nameRef"
          placeholder="Name"
          type="text"
          class="input-style"
        />

        <UiInput
          v-model="emailRef"
          placeholder="Email"
          type="email"
          class="input-style"
        />

        <UiInput
          v-model="passwordRef"
          placeholder="Password"
          type="password"
          class="input-style"
        />

        <div class="w-full flex justify-between">
          <UiButton type="button" class="btn-style" @click="register"
            >Register</UiButton
          >
          <UiButton type="button" class="btn-style" @click="login"
            >Login</UiButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex items-center justify-center h-screen w-full bg-darkest;
}

.login-wrapper {
  @apply border-white border-2 rounded-lg w-[300px] p-[15px];
}

.input-style {
  @apply h-[30px] text-lg font-medium mb-[20px] rounded-full;
}

.btn-style {
  @apply cursor-pointer font-bold rounded-full hover:bg-darkest bg-dark hover:text-red hover:border-red border-white border-2;
}
</style>
