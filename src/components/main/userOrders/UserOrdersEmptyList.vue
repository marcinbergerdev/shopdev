<template>
  <section class="emptyOrderListContainer">
    <Icon class="emptyOrderListContainer__icon" icon="fluent:error-circle-20-regular" />

    <p class="emptyOrderListContainer__description">Twój koszyk jest pusty!</p>

    <BaseButton link to="/shop" mode="filledLink">Przjedz do zakupów</BaseButton>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.emptyOrderListContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 15rem 0;
  padding-top: 10rem;

  text-align: center;
  border-top: 1px solid var(--primary-greyDark);
  &__icon {
    font-size: 5rem;
  }

  &__description {
    font-size: 2rem;
  }
}
</style>
