<template>
  <article class="menuContainer">
    <UserContent v-if="menuName === 'user'"></UserContent>
    <CartContent v-if="menuName === 'cart'"></CartContent>
  </article>
</template>

<script setup lang="ts">
import UserContent from "./UserContent.vue";
import CartContent from "./CartContent.vue";

import { defineProps } from "vue";

const props = defineProps<{
  menuName?: string;
}>();

const { menuName } = props;
</script>

<style scoped lang="scss">
.menuContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 4.3rem);
  @media (min-width: 768px) {
    height: auto;
  }
}
</style>
