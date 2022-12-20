<template>
  <li class="underOption">
    <a class="underOption__name" :href="link">{{ title }}</a>
    <span class="underOption__amount">({{ amount }})</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  title: string;
  amount: number;
}>();

const { link, title, amount } = props;
</script>

<style scoped lang="scss">
.underOption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
  color: var(--primary-greyDark);

  &__name {
    font-size: 1.7rem;
    color: var(--primary-greyDark);
  }

  &__amount {
  }
}
</style>
