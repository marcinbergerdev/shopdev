<template>
  <RouterLink class="link" :class="mode" :to="isRouterLink" v-if="link">
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
  color: var(--white);
  background-color: var(--primary-claretDark);
  border-radius: 50px;
  border: 0;

  &:hover {
    background-color: var(--primary-claret);
    cursor: pointer;
    transition: 0.15s ease-in-out;
  }
}

.empty{
  padding: 2rem 0;
  color: var(--secondary-lightRed);
  background-color: transparent;
  border: 0;
  border-top: 1px solid var(--secondary-lightRed);

  @media (min-width: 768px) {
    padding: 1rem 0;
    border-radius: 0 0 0.6rem 0.6rem;

    &:hover{
      color: var(--white);
      background-color: var(--secondary-lightRed);
      transition: .150s ease-in-out;
      cursor: pointer;
    }
  }
}

.dectopOption{

  &:hover{
    color: red;
  }
}

</style>
