<template>
  <article class="dropMenu" :class="mode">
    <header class="menuHeader">
      <span class="menuHeader__title"> {{ title }}</span>
      <button class="menuHeader__closeButton" @click="emit('close')">
        <Icon class="menuHeader__closeButton-icon" icon="bi:x-lg" />
      </button>
    </header>

    <section class="menuContent"></section>
  </article>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { title, mode } = defineProps<{
  title: string;
  mode?: string;
  display?: string;
}>();
</script>

<style scoped lang="scss">
.dropMenu {
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100vh;
}
.dropMenu {
  width: 85%;
  background-color: rgb(122, 109, 194);

  @media (min-width: 768px) {
    top: 100%;
    width: auto;
    min-width: 300%;
    min-height: auto;
  }
}

.left {
  @media (min-width: 768px) {
    left: 0;
  }
}
.right {
  @media (min-width: 768px) {
    right: 0;
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

.menuContent {
}
</style>
