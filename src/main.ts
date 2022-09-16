import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import { createHead } from "@vueuse/head";
import "@akrc/fish/fish.css";

const head = createHead();

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  const { app, router, routes, isClient, initialState } = ctx;
  app.use(head);
});
