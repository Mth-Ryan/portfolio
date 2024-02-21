// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n"
  ]
})