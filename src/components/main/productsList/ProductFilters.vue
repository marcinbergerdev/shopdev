<template>
  <article class="filtersContainer" @mouseleave="closeSortingHandler">
    <div class="filterBox">
      <BaseButton mode="filters" @mousemove="showSortingHandler">
        <Icon icon="icons8:alphabetical-sorting" />
        <span>Sorting</span>
      </BaseButton>

      <div class="filtersOptionBox" v-if="isSorting">
        <BaseButton
          mode="filterOption"
          @click="emit('productSortingHandler', 'alphabeticallyAZ')"
          >from A to Z</BaseButton
        >
        <BaseButton
          mode="filterOption"
          @click="emit('productSortingHandler', 'alphabeticallyZA')"
          >from Z to A</BaseButton
        >
        <BaseButton mode="filterOption" @click="emit('productSortingHandler', 'lowest')"
          >from the lowest</BaseButton
        >
        <BaseButton mode="filterOption" @click="emit('productSortingHandler', 'highest')"
          >from the highest</BaseButton
        >
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "productSortingHandler", value: string): void;
}>();

const isSorting = ref<boolean>(false);

function showSortingHandler() {
  isSorting.value = true;
}

function closeSortingHandler() {
  isSorting.value = false;
}
</script>

<style scoped lang="scss">
.filtersContainer {
  grid-area: filters;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--primary-claret);
  gap: 0 3rem;
  border-bottom: 1px solid var(--primary-claret);

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 0 5rem;
    padding-left: 5rem;
    border: 1px solid var(--primary-claret);
    border-radius: 10px;
  }
}

.filterBox {
  position: relative;
}

.filtersOptionBox {
  position: absolute;
  top: 5.5rem;
  left: -1.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 12rem;
  padding: 1rem;
  background-color: var(--white);
  border: 1px solid var(--primary-greyDark);

  @media (min-width: 768px) {
    top: 4rem;
    cursor: pointer;
  }
}

.filterOption {
  padding: 0.5rem 0;
  background-color: transparent;
  border: 0;

  &:hover {
    background-color: #e6e6e6;
  }
  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>
