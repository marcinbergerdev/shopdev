<template>
  <header class="header">
    <BaseButton link to="/shop" mode="logoButton">Shopex</BaseButton>

    <h2 class="header__title">Welcome</h2>

    <BaseButton link to="/shop" mode="backButton"
      ><Icon icon="ri:arrow-go-back-fill"
    /></BaseButton>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
}

.logoButton {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-claret);
}

.backButton {
  display: grid;
  place-items: center;
  font-size: 1.7rem;
  color: var(--black);
  padding: 0.5rem;
  border-radius: 50px-7;
  border: 1px solid var(--black);
}
</style>
