// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      appWriteProjectId: process.env.APP_WRITE_PROJECT_ID || '',
    },
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
  plugins: ['~/plugins/appwrite'],
});
