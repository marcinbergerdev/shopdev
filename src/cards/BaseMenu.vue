<template>
  <div class="dropMenu" :class="mode">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

const { mode } = defineProps<{
  mode?: string;
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
</style>
