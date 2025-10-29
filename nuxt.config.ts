// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "TravelHub", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Sansation",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
