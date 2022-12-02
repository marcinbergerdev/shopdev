<template>
  <div class="dropMenu" :class="[mode, size]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { mode, size } = defineProps<{
  mode?: string;
  size?: string;
}>();
</script>

<style scoped lang="scss">
.dropMenu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  min-height: 100vh;
  background-color: var(--white);
}
.dropMenu {
  width: 85%;

  @media (min-width: 768px) {
    top: 100%;
    width: auto;
    min-height: auto;
    border-radius: 1rem;
    outline: 1px solid var(--primary-claret);
  }
}

.user {
  @media (min-width: 768px) {
    min-width: 18rem;
  }
}

.cart {
  @media (min-width: 768px) {
    min-width: 35rem;
  }
}


.left {
  @media (min-width: 768px) {
    left: 0;
    border-radius: 0 0.6rem 0.6rem 0.6rem;
  }
}
.right {
  @media (min-width: 768px) {
    right: 0;
    border-radius: 0.6rem 0 0.6rem 0.6rem;
  }
}
</style>
