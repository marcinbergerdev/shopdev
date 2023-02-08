<template>
  <article :class="mode">
    <div :class="content">
      <h3 class="title">Do zapłaty:</h3>
      <span class="price">239,40 zł</span>
    </div>

    <BaseButton mode="payButtonMobileMenu">Zapłać</BaseButton>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  mode: string;
  content: string;
}>();
</script>

<style scoped lang="scss">
.orderAmountHoverContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: var(--primary-greyLight);

  @media (min-width: 768px) {
    border-radius: 0 0 0.6rem 0.6rem;
  }
}

.orderAmountHover {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  &__pay {
    font-weight: 700;
  }
}

.orderAmountDesctop {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-top: 2px solid var(--primary-claret);

  @media (min-width: 768px) {
    width: min(100%, 35rem);
    height: 13rem;
    justify-self: center;
    margin-top: 13.3rem;
    border: 2px solid var(--primary-claret);
    border-radius: 2.5rem;
  }
}

.orderAmountContainerDesctop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
}
</style>
