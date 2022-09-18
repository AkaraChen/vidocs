import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import { createHead, useHead } from "@vueuse/head";
import "@akrc/fish/fish.css";
import { createPinia } from "pinia";
import { useStore } from "./config";

const head = createHead();
const pinia = createPinia();

export const createApp = ViteSSG(App, { routes }, async (ctx) => {
  const { app, router, routes, isClient, initialState } = ctx;
  app.use(head);
  app.use(pinia);
  useHead({
    title: useStore().name,
  });
});
