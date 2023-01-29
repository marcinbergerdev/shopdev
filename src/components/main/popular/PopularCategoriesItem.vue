<template>
  <li class="popularCategoriesItem">
    <BaseButton link :to="to">
      <img loading="lazy" class="popularCategoriesItem__img" :src="img" alt="category-image" />
      <span class="popularCategoriesItem__name"> {{ name }}</span>
    </BaseButton>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  name: string;
  to: string;
}>();
</script>

<style scoped lang="scss">
.popularCategoriesItem {
  width: 70%;
  text-align: center;
  padding: 0.5rem 0;
  border: 2px solid var(--primary-claret);

  &__img {
    display: none;

    @media (min-width: 768px) {
      display: block;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
  }

  &__name {
    color: var(--primary-claret);

    @media (min-width: 768px) {
      color: var(--black);
    }
  }

  @media (min-width: 768px) {
    width: auto;
    line-height: 3;
    border: 0;
  }
}
</style>
