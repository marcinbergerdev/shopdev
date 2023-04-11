<template>
  <UserOrdersEmptyList
    mode="emptyOrderListHoverContainer"
    description="Twój koszyk jest pusty!"
    v-if="orders.isEmpty"
    :isMobileButton="false"
  ></UserOrdersEmptyList>

  <div class="orderContainer" v-else>
    <CartOrderHeader
      mode="orderHeaderHover"
      title="Twoje zamówienie"
      edit-button-style="productsEditHover"
      :is-edit-button="true"
      :is-delete-button="false"
      :is-amount="true"
      @click="editCloseMenu"
    ></CartOrderHeader>

    <ul class="orderListContainer">
      <BaseOrder
        display="orderWrapperHover"
        mode="orderDataHover"
        v-for="(order, id) in orders.userOrders"
        :key="id"
        :productId="id"
        :id="order.id"
        :img="order.img"
        :category="order.categories"
        :name="order.name"
        :title="order.title"
        :description="order.description"
        :amount="order.amount"
        :price="order.price"
        :delete-button="order.deleteButton"
      ></BaseOrder>
    </ul>

    <CartOrderPrice
      mode="orderAmountHoverContainer"
      content="orderAmountHover"
    ></CartOrderPrice>
  </div>
</template>

<script setup lang="ts">
import UserOrdersEmptyList from "../../../main/userOrders/UserOrdersEmptyList.vue";
import CartOrderHeader from "./CartOrderHeader.vue";
import CartOrderPrice from "./CartOrderPrice.vue";
import { useUserOrders } from "../../../../stores/orders/userOrders";
import { inject, onMounted } from "vue";

import { getAuth } from "firebase/auth";

const orders = useUserOrders();
const { closeMenu } = inject("closeMenu") as any;

const editCloseMenu = (e: any) => {
  if (e.target.text === "Edytuj") {
    closeMenu();
    document.body.classList.remove("scrollHidden");
  }
};

const auth = getAuth();
onMounted(async () => {
  const user = auth.currentUser;

  if (user) {
    await orders.getUserCartProducts(user.uid);
  }
});
</script>

<style scoped lang="scss">
.orderContainer {
  display: flex;
  flex-direction: column;
  height: calc(100%);
}

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
  gap: 4rem;
  padding: 2rem 1rem;
  overflow: auto;
  box-shadow: inset 0px 12px 11px -10px #ccc, inset 0px -12px 11px -10px #ccc;

  li:last-child {
    border: 0;
  }

  @media (min-width: 330px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 768px) {
    flex: auto;
    height: 40rem;
  }
}
</style>
