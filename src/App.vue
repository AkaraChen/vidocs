<template>
  <Nav />
  <div class="container-lg">
    <Sidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from './layout/nav.vue';
import Sidebar from './layout/sidebar.vue';
import { useStore } from "./config"
import { useHead } from "@vueuse/head"

useHead({
  title: useStore().name,
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

.container-lg {
  padding: 0 !important;
  scrollbar-width: 0;
}

.content {
  padding: 20px;
}

@media screen and (min-device-width: 768px) {
  .container-lg {
    display: flex;
    margin: auto;
  }

  .content {
    flex: 7;
    width: 100%;
  }
}

blockquote {
  margin-left: 0;
  margin-right: 0;
}

blockquote p {
  margin: 0;
}

.content {
  overflow: auto;
}

.content table {
  overflow-x: auto;
  display: block;
  width: fit-content;
  margin: 0.75em 0;
}

:root {
  --nav-color: white
}

@media (prefers-color-scheme: dark) {
  :root {
    --nav-color: #1b1b1b;
  }
}

.markdown-body li {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>