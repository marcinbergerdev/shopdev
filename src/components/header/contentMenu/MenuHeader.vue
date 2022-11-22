<template>
  <header class="menuHeader">
    <span class="menuHeader__title"> {{ title }}</span>
    <button class="menuHeader__closeButton" @click="emit('close')">
      <Icon class="menuHeader__closeButton-icon" icon="bi:x-lg" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { defineEmits} from "vue";

const emit = defineEmits<{
  (e: 'close'): void
}>();

const { title } = defineProps<{
  title: string;
}>();




</script>

<style scoped lang="scss">
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
