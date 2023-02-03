<template>
  <header :class="mode">
    <h2 class="title">Twoje zamówienie</h2>
    <span class="amount">(3)</span>

    <BaseButton :mode="editButton" link to="/shop/order1">Edytuj</BaseButton>
    <BaseButton class="deleteAll" mode="deleteProduct" v-if="deleteAll">
      <Icon class="orderData__icon" icon="bi:trash" />
      <span>wyczyść koszyk</span>
    </BaseButton>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  mode: string;
  editButton: string;
  deleteAll?: boolean;
}>();
</script>
<style scoped lang="scss">
.orderHeaderHover {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 0 1rem;

  .title {
    font-size: 1.3rem;
  }

  .amount {
    font-size: 1.4rem;
  }
}
.orderHeaderDesctop {
  display: grid;
  align-items: center;
  grid-template-areas:
    "title amount"
    "edit deleteAll";

  .title {
    grid-area: title;
  }

  .amount {
    grid-area: amount;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
}

.productsEditDesctop {
  grid-area: edit;

  @media (min-width: 768px) {
    display: none;
  }
}

.deleteAll {
  grid-area: deleteAll;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    &:hover {
      background-color: transparent;
      color: var(--secondary-lightRed);
    }
  }
}
</style>
