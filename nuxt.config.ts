// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" }
      ],
    }
  },
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-lucide-icons"
  ]
})