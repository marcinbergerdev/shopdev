<template>
  <section class="returnInfoContainer">
    <article class="returnInfoBox">
      <h3 class="returnInfoBox__title">Questions about the order?</h3>
      <p class="returnInfoBox__description">
        If you have questions about your order call us or write to our e-mail:
      </p>

      <span class="returnInfoBox__contact">number: +00 123 456 789</span>
      <span class="returnInfoBox__contact">e-mail: test-test@test.test</span>
    </article>

    <article class="returnInfoBox">
      <h3 class="returnInfoBox__title">Complaint</h3>

      <p class="returnInfoBox__description">
        If you want to complain about your product because of: missing shipment, damaged
        package, damaged product, etc....
      </p>

      <span class="returnInfoBox__contact">number: +00 123 456 789</span>
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
  margin: 7rem 0;
  padding: 10rem 3rem;
  height: 55.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.returnInfoBox {
  width: min(50rem, 100%);
  padding: 2rem;
  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.35);
  border-radius: 2rem;

  &__title {
    font-size: 2.7rem;
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
