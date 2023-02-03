<template>
  <section :class="mode">
    <div :class="content">
      <h3>Do zapłaty:</h3>
      <span class="orderAmount__pay">239,40 zł</span>
    </div>

    <BaseButton mode="payButtonMobileMenu">Przejdz do koszyka</BaseButton>
  </section>
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
</style>
