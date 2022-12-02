<template>
  <div :class="{ current: currentDot === currentSlide }"></div>
</template>

<script setup lang="ts">
const { currentDot, currentSlide } = defineProps<{
  currentDot: number;
  currentSlide: number;
}>();
</script>

<style scoped lang="scss">
div,
.current {
  border-radius: 5rem;
  background-color: var(--primary-greyDark);
}

div {
  width: 1rem;
  height: 1rem;
}

.current {
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--primary-claret);
}
</style>
