<template>
  <header class="dropMenuHeaderMobile" @click="underCategories.hideBackIcon">
    <span class="dropMenuHeaderMobile__title">{{ title ? title : "Category" }}</span>

    <button
      class="dropMenuHeaderMobile__closeButton"
      @click="emit('close')"
      v-if="!underCategories.getBackIcon"
    >
      <Icon class="dropMenuHeaderMobile__icon" icon="bi:x-lg" />
    </button>

    <button class="dropMenuHeaderMobile__closeButton" v-else>
      <Icon class="dropMenuHeaderMobile__icon" icon="akar-icons:arrow-left" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { useUserCategories } from "../../../stores/navigation/userCategories";
const underCategories = useUserCategories();

const props = defineProps<{
  title?: string;
}>();
const { title } = props;

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped lang="scss">
.dropMenuHeaderMobile {
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
}
</style>
