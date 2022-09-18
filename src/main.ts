import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "~pages";
import { createHead } from "@vueuse/head";
import "@akrc/fish/fish.css";
import { createPinia } from "pinia";

const head = createHead();
const pinia = createPinia();
const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App).use(head).use(pinia).use(router);
app.mount("#app");
