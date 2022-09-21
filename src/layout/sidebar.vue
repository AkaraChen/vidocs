<template>
  <div class="btn-group">
    <button @click="toggle">📃 {{text.menu}}</button>
    <button @click="toTop">⏫ {{text.toTop}}</button>
  </div>
  <aside ref="aside" :class="status?'':'hide'">
    <div style="padding:10px 20px">
      <button @click="toggle" style="font-size: 24px;">╳</button>
      <ul>
        <li v-for="item in sidebar">
          <router-link @click="toggle" v-if="!('list' in item)" :to="(item as page).link">{{item.name}}
          </router-link>
          <div v-else>
            <p>{{item.name}}</p>
            <ul>
              <li v-for="innerItem in item.list" class="inner">
                <router-link @click="toggle" :to="innerItem.link">{{innerItem.name}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useStore } from "../config"
import { page } from "../config"

const config = useStore()
const { sidebar, text } = config;
const status = ref(false);
const toggle = () => {
  if (screen.width <= 768)
    status.value = !status.value
};

let toTop = () => { };

onMounted(() => {
  toTop = () => {
    const beginTime = Date.now()
    const beginValue = document.documentElement.scrollTop;
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
    const cubic = (value: number) => Math.pow(value, 2)
    const easeInOutCubic = (value: number) => value < 0.5
      ? cubic(value * 2) / 2
      : 1 - cubic((1 - value) * 2) / 2
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 150;
      if (progress < 1) {
        document.documentElement.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        document.documentElement.scrollTop = 0
      }
    }
    rAF(frameFunc)
  }
})

</script>

<style scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: var(--nav-color);
  width: calc(100vw - 64px);
  z-index: 300;
  transition: 0.125s ease-in;
  overflow: auto;
}

aside button {
  padding-left: 0;
}

.hide {
  width: 0;
}

.hide>* {
  display: none;
}

.btn-group {
  position: sticky;
  top: 55px;
  left: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: var(--nav-color);
  z-index: 100;
}

button {
  background-color: inherit;
  margin: 0;
  margin-right: auto;
  color: grey;
  font-size: 14px;
}

button:hover {
  background-color: inherit;
}

button+button {
  margin-right: 0;
}

ul {
  margin: 0;
  list-style: none;
}

li+li {
  margin-top: 20px;
}

@media screen and (min-device-width: 768px) {

  .btn-group,
  aside button {
    display: none;
  }

  aside.hide {
    position: sticky;
    flex: 2;
    height: fit-content;
    padding-top: 10px;
    background-color: transparent;
    top: 75px;
    z-index: 100;
  }

  aside.hide>* {
    display: block;

  }

  ul {
    width: fit-content;
  }

}

.inner {
  padding-left: 20px;
}
</style>