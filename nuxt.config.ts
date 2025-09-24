// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  nitro: {
    preset: "netlify", // 👈 ensures SSR is packaged for Netlify Functions
  },
});
