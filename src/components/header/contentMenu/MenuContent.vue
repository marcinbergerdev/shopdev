<template>
  <header class="menuHeader" v-if="isMenuHeader">
    <span class="menuHeader__title"> {{ title }}</span>
    <button class="menuHeader__closeButton" @click="emit('close')">
      <Icon class="menuHeader__closeButton-icon" icon="bi:x-lg" />
    </button>
  </header>

  <article class="menuContainer">
    <UserContent v-if="menuName === 'user'"></UserContent>
    <CartContent v-if="menuName === 'cart'"></CartContent>
  </article>
</template>

<script setup lang="ts">
import UserContent from "./UserContent.vue";
import CartContent from "./CartContent.vue";

import { defineProps } from "vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const {} = defineProps<{
  title: string;
  menuName?: string;
  isMenuHeader: boolean;
}>();
</script>

<style scoped lang="scss">
.menuContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 4.3rem);
  @media (min-width: 768px) {
    height: auto;
  }
}


.menuHeader {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--primary-claretDark);

  &__title {
    font-size: 1.8rem;
    color: var(--white);
  }

  &__closeButton {
    background-color: transparent;
    border: 0;
    &-icon {
      font-size: 2rem;
      color: var(--white);
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
