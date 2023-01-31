<template>
  <header :class="mode">
    <h2>Twoje zamówienie</h2>
    <span>(3)</span>
    <BaseButton :mode="editButton" link to="/shop/order1">Edytuj</BaseButton>
    <BaseButton mode="deleteProduct" v-if="deleteAll">
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
ver
<style scoped lang="scss">
.orderHeaderHover {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 0 1rem;

  h2 {
    font-size: 1.3rem;
  }

  span {
    font-size: 1.4rem;
  }
}
</style>
