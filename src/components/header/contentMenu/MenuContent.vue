<template>
  <article class="menuContainer">
    <UserContent v-if="menuName === 'account'"></UserContent>
    <CartContent v-else></CartContent>
  </article>
</template>

<script setup lang="ts">
import UserContent from "./userSettings/UserContent.vue";
import CartContent from "./cartContent/CartContent.vue";

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
