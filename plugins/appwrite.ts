import { defineNuxtPlugin } from '#app'
import { Account, Client, Databases, Storage } from 'appwrite'
import { useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const client = new Client()

  const endPoint = 'https://cloud.appwrite.io/v1'
  const project = runtimeConfig.public?.APP_WRITE_PROJECT_ID ?? ''

  client
    .setEndpoint(endPoint)
    .setProject(String(project))

  nuxtApp.provide('appwriteClient', client)

  const account = new Account(client)
  const databases = new Databases(client)
  const storage = new Storage(client)

  nuxtApp.provide('appwriteAccount', account)
  nuxtApp.provide('appwriteDatabases', databases)
  nuxtApp.provide('appwriteStorage', storage)
})