import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import { createHead } from "@vueuse/head";
import "@akrc/fish/fish.css";
import { createPinia } from "pinia";

const head = createHead();
const pinia = createPinia();

export const createApp = ViteSSG(App, { routes }, async (ctx) => {
  const { app, router, routes, isClient, initialState } = ctx;
  app.use(head);
  app.use(pinia);
});
