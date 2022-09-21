<template>
  <nav>
    <router-link to="/">
      <h1>{{config.name}} </h1>
    </router-link>
    <ul v-for="item in nav">
      <li>
        <router-link v-if="item.link.startsWith('/')" :to="item.link">{{(item as page).name}}</router-link>
        <a v-else :href="item.link" target="_blank">{{(item as page).name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from "../config"
import { page } from "../config"

const config = useStore()
const { nav } = config
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  padding: 0.75em;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: var(--nav-color);
}

nav>*:first-child {
  margin-right: auto;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  color: inherit;
}

a::after {
  display: none;
}

a[target="_blank"]::after {
  display: inherit;
}

h1 {
  margin: 0;
  margin-left: 2px;
  font-size: 20px;
}

h1+ul {
  margin-left: 1em;
}

li {
  margin-left: 0.75em;
  margin-right: 0.75em;
}

@media screen and (min-device-width: 768px) {
  nav {
    z-index: 200;
  }
}

@media (prefers-color-scheme: dark) {
  nav {
    border-color: #000;
  }
}
</style>