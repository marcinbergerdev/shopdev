<template>
  <li :class="setCurrentPage">
    <BaseButton mode="pagination"> {{ pageAmount }}</BaseButton>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id: number;
  pageAmount: number;
  currentPage: number;
}>();

const setCurrentPage = computed(() => {
  return { currentPage: props.id === props.currentPage ? true : false };
});
</script>

<style scoped lang="scss">
.currentPage {
  .pagination {
    color: var(--primary-claret);
  }
}
</style>
