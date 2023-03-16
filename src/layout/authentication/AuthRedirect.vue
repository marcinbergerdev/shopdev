<template>
  <article class="redirectContainer">
    <header class="redirectHeader">
      <h3 class="redirectHeader__title">Witaj w Shopex!</h3>
    </header>

    <section class="redirectToAuth">
      <BaseButton link to="/login" mode="flat">Zaloguj</BaseButton>
      <p class="redirectToAuth__description">Jeszcze nie masz konta?</p>
      <BaseButton link to="/register" mode="border">Zarejestruj</BaseButton>
    </section>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.redirectContainer,
.redirectHeader,
.redirectToAuth {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.redirectContainer {
  padding: 3rem 0;
  flex: 1;
  overflow: auto;
}

.redirectHeader {
  &__title {
    font-size: 2rem;
  }
}

.redirectToAuth {
  width: 100%;
  justify-content: center;
  flex: 1;
  gap: 1.5rem;
  margin-top: 1rem;

  &__description {
    margin-top: 3rem;
    font-size: 1.2rem;
    font-weight: 700;

    @media (min-width: 768px) {
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    gap: 1rem;
  }
}

.flat,
.border {
  padding: 1rem 1.5rem;
  width: min(25rem, 100%);
  text-align: center;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    padding: 0.7rem 1rem;
    width: min(15rem, 100%);
    font-size: 1.2rem;
  }
}
</style>
