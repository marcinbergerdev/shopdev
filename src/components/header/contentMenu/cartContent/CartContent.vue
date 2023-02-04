<template>
  <CartOrderHeader
    mode="orderHeaderHover"
    edit-button-style="productsEditHover"
    :is-edit-button="true"
    :is-delete-button="false"
  ></CartOrderHeader>

  <ul class="orderListContainer">
    <BaseOrder
      display="orderWrapperHover"
      mode="orderDataHover"
      v-for="order in orders.userOrders"
      :key="order.id"
      :id="order.id"
      :img="order.img"
      :name="order.name"
      :amount="order.amount"
      :price="order.price"
      :delete-button="order.deleteButton"
    ></BaseOrder>
  </ul>

  <CartOrderPrice
    mode="orderAmountHoverContainer"
    content="orderAmountHover"
  ></CartOrderPrice>
</template>

<script setup lang="ts">
import CartOrderHeader from "./CartOrderHeader.vue";
import CartOrderPrice from "./CartOrderPrice.vue";

import { ref } from "vue";
import { useUserOrders } from "../../../../stores/navigation/userOrders";
const orders = useUserOrders();
</script>

<style scoped lang="scss">
.orderHeader {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 0 1rem;

  &__title {
    font-size: 1.3rem;
  }

  &__quantity {
    font-size: 1.4rem;
  }
}

.orderListContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  padding: 2rem 1rem;
  overflow: auto;
  box-shadow: inset 0px 12px 11px -10px #ccc, inset 0px -12px 11px -10px #ccc;

  @media (min-width: 330px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 768px) {
    flex: auto;
    height: 40rem;
  }
}
</style>