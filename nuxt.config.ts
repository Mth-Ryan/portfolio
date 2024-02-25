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
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-lucide-icons", "@vueuse/nuxt", "@vueuse/motion/nuxt"]
})