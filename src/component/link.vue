<template>
    <a v-if="!isSPA" :href="format(link)">{{text}}</a>
    <router-link :class="colorless&&'colorless'" :to="link">{{text}}</router-link>
</template>

<script lang="ts" setup>
import { isSPA } from '../main';

defineProps<{ text: string, link: string, colorless?: boolean }>()
const format = (text: string) => {
    if (text.endsWith("/")) return text
    return `${text}.html`
}
</script>

<style scoped>
.colorless {
    color: inherit !important;
}

.colorless::after {
    display: none;
}
</style>