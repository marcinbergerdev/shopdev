<template>
  <article class="filtersContainer">
    <BaseButton mode="filters">
      <Icon icon="icons8:alphabetical-sorting" />
      <span>Sortuj</span>
    </BaseButton>

    <BaseButton mode="filters">
      <Icon icon="cil:list-filter" />
      <span>Filtry</span>
    </BaseButton>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.filtersContainer {
  grid-area: filters;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 3rem;
  border-top: 1px solid var(--primary-claret);
  border-bottom: 1px solid var(--primary-claret);

  @media (min-width: 768px) {
    justify-content: space-around;
    margin: 0 5rem;
    border: 1px solid var(--primary-claret);
    border-radius: 10px;
  }
}
</style>
