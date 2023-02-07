<template>
  <section class="userOrderDesctopContainer">
    <CartOrderHeader
      mode="orderHeaderDesctop"
      :is-edit-button="false"
      :is-delete-button="true"
    ></CartOrderHeader>

    <ul class="userOrderListDesctop">
      <BaseOrder
        display="orderItemDesctop"
        mode="orderProductDesctop"
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
      mode="orderAmountDesctop"
      content="orderAmountContainerDesctop"
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
  margin-top: 7rem;
  border-top: 1px solid var(--primary-greyDark);

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "header amount"
      "list amount";
    padding: 5rem 2rem;
    grid-template-columns: 2fr 1fr;
    gap: 0 2rem;
  }

  @media (min-width: 1280px) {
    padding: 5rem 10rem;
  }
}

.orderHeaderDesctop {
  grid-area: header;
}
.orderAmountDesctop {
  grid-area: amount;
}

.userOrderListDesctop {
  grid-area: list;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 4rem 3rem;

    li:first-child {
      border: 0;
      padding-top: 0;
    }

    li:last-child {
      padding-bottom: 0;
    }

    border: 1px solid var(--primary-claret);
  }
}
</style>
