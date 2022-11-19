<template>
  <li class="menuOption">
    <BaseButton v-if="isLink" link :to="path">
      <Icon class="menuOption__icon" :icon="icon" />
      <p class="menuOption__title">{{ title }}</p>
    </BaseButton>

    <BaseButton v-else :to="path" mode="flat">
      {{ title }}
    </BaseButton>
  </li>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

const { path, title, icon, isLink } = defineProps<{
  path: string;
  title: string;
  icon?: string;
  isLink: boolean;
}>();
</script>

<style scoped lang="scss">
li:nth-child(4) {
  padding-left: 4.5rem;
  border-left: 1px solid var(--primary-greyDark);
}

li:nth-child(4),
li:nth-child(5) {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

.menuOption {
  text-align: center;

  &__icon {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    font-size: 0.9rem;
    text-align: center;
  }
}
</style>
