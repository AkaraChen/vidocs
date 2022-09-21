import { createApp } from "vue";
import App from "./App.vue";
import routes from "~pages";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import "@akrc/fish/fish.css";

const head = createHead();
const pinia = createPinia();
const router = createRouter({ routes, history: createWebHistory() });

const app = createApp(App).use(head).use(pinia).use(router);
app.mount("#app");
