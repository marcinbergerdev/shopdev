<template>
  <RouterLink class="link" :to="isRouterLink" v-if="link">
    <slot></slot>
  </RouterLink>

  <button :class="mode" v-else>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const isRouterLink = computed(() => (to === undefined ? "" : to));

const { to, link, mode } = defineProps<{
  to?: string;
  link?: boolean;
  mode?: string;
}>();
</script>

<style scoped lang="scss">
.link,
button {
  color: var(--primary-greyDark);
}

.link{
  &:hover,&.router-link-active {
    color: var(--primary-claretDark);
  }
}

.flat {
  padding: 0.7rem 1.5rem;
  background-color: var(--primary-claretDark);
  color: var(--white);
  border-radius: 50px;
  border: 0;

  &:hover {
    transition: 0.15s ease-in-out;
    background-color: var(--primary-claret);
    cursor: pointer;
  }
}
</style>
