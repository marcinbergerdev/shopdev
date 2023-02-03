<template>
  <section class="userOrderDesctopContainer">
    <CartOrderHeader
      mode="orderHeaderDesctop"
      edit-button="productsEditDesctop"
      :delete-all="true"
    ></CartOrderHeader>

    <ul class="userOrderDesctopList">
      <li>
        <BaseOrder
          display="sd"
          mode="d"
          v-for="order in orders.userOrders"
          :key="order.id"
          :id="order.id"
          :img="order.img"
          :name="order.name"
          :amount="order.amount"
          :price="order.price"
          :delete-button="order.deleteButton"
        ></BaseOrder>
      </li>
    </ul>

    <CartOrderPrice
      mode="orderAmountDesctopContainer"
      content="orderAmountDesctop"
    ></CartOrderPrice>
  </section>
</template>

<script setup lang="ts">
import CartOrderHeader from "../../header/contentMenu/cartContent/CartOrderHeader.vue";
import CartOrderPrice from "../../header/contentMenu/cartContent/CartOrderPrice.vue";

import { ref } from "vue";
import { useUserOrders } from "../../../stores/navigation/userOrders";
const orders = useUserOrders();
</script>

<style scoped lang="scss">
.userOrderDesctopContainer {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "header amount"
      "list amount";
  }
}

.orderHeaderDesctop {
  grid-area: header;
}

.userOrderDesctopList {
  grid-area: list;
}

.orderAmountDesctopContainer {
  grid-area: amount;
}
</style>
