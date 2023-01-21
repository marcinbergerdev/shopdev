<template>
  <section class="returnInfoContainer">
    <article class="returnInfoBox">
      <h3 class="returnInfoBox__title">Pytania do zamówienia?</h3>
      <p class="returnInfoBox__description">
        Jeżeli masz pytania do swojego zamówienia zadzown do nas lub napisz na nasz
        e-mail:
      </p>

      <span class="returnInfoBox__contact">numer: +00 123 456 789</span>
      <span class="returnInfoBox__contact">e-mail: test-test@test.test</span>
    </article>

    <article class="returnInfoBox">
      <h3 class="returnInfoBox__title">Reklamacja</h3>

      <p class="returnInfoBox__description">
        Jeżeli chcesz złożyć reklamacje swojego produktu z powodu: braku przesyłki,
        uszkodzonej paczki, uszkodzonego produktu, itp...
      </p>

      <span class="returnInfoBox__contact">numer: +00 123 456 789</span>
      <span class="returnInfoBox__contact">e-mail: test-test@test.test</span>
    </article>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.returnInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin: 5rem 0;
  padding: 10rem 3rem;
  height: 55.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.returnInfoBox {
  width: min(50rem, 100%);
  padding: 2rem 1rem;
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.3);

  &__title {
    font-size: 1.6rem;
  }

  &__description {
    margin: 1.5rem 0 5rem 0;
    font-size: 1.3rem;
    color: var(--primary-greyDarker);
  }

  &__contact {
    display: block;
    margin-top: 1rem;
    color: var(--primary-claret);
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem 9rem 2rem;
  }
}
</style>
