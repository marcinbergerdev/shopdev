<template>
  <header class="categoriesHeader" v-if="visibility.isMenuHidden || isHeader">
    <span class="categoriesHeader__title">{{ title ? title : "Category" }}</span>

    <button class="categoriesHeader__closeButton" @click="emit('close')">
      <Icon class="categoriesHeader__icon" icon="bi:x-lg" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { useMenuVisibility } from "../../../stores/navigation/menuVisibility";
const visibility = useMenuVisibility();

const props = defineProps<{
  isHeader?: boolean;
  title?: string;
}>();
const { isHeader, title } = props;

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.categoriesHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: var(--primary-claretDark);

  &__title {
    color: var(--white);
    font-weight: 400;
    font-size: 1.8rem;
  }

  &__closeButton {
    display: grid;
    place-items: center;
    background-color: transparent;
    border: 0;
  }

  &__icon {
    font-size: 2rem;
    color: var(--white);
  }

  @media (min-width: 768px) {
    display: none;
  }
}
</style>
