import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "~pages";
import { createHead } from "@vueuse/head";
import "@akrc/fish/fish.css";

const head = createHead();

export let isSPA: boolean;

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  const { app, router, routes, isClient, initialState } = ctx;
  isSPA = isClient;
  app.use(head);
});
