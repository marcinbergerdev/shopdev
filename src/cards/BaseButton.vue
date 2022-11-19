<template>
  <RouterLink :to="isRouterLink" v-if="link">
    <slot></slot>
  </RouterLink>

  <button v-else>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const isRouterLink = computed(() => to === undefined ? '' : to);

const { to, link} = defineProps<{
  to?: string;
  link?: boolean;
}>();
</script>

<style scoped lang="scss"></style>
