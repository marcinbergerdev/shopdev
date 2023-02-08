<template>
  <UserOrdersEmptyList v-if="orders.isEmpty"></UserOrdersEmptyList>

  <section class="userOrderDesctopContainer" v-else>
    <CartOrderHeader
      mode="orderHeaderDesctop"
      :is-edit-button="false"
      :is-delete-button="true"
      @show="showModal"
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

    <BaseButton link to="/shop" mode="filledLink onlyDesctop keepBuyingButton"
      >Przjedz do zakupów</BaseButton
    >

    <Teleport to="body">
      <BaseModal
        mode="deleteAllOrders"
        :isModal="isModal"
        :isHeaderCloseButton="false"
        :isInteraction="true"
      >
        <template #default>
          <h2 class="modalHeaderTitle">Wyczyścić koszyk?</h2>
        </template>

        <template #content>
          <p class="modalContentDescription">
            Usuwasz wszystkie produkty z koszyka, nie można tego cofnąć!
          </p>
        </template>

        <template #interactive>
          <BaseButton mode="clear" @click="closeModal">Anuluj</BaseButton>
          <BaseButton mode="border">Continue</BaseButton>
        </template>
      </BaseModal>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import CartOrderHeader from "../../header/contentMenu/cartContent/CartOrderHeader.vue";
import CartOrderPrice from "../../header/contentMenu/cartContent/CartOrderPrice.vue";
import UserOrdersEmptyList from "./UserOrdersEmptyList.vue";

import { ref, computed } from "vue";
import { useUserOrders } from "../../../stores/navigation/userOrders";
const orders = useUserOrders();

const isModal = ref(false);
function showModal() {
  isModal.value = true;
}

function closeModal() {
  isModal.value = false;
}
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
      "list amount"
      "buyMore .";
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

.keepBuyingButton {
  grid-area: buyMore;
  text-align: center;
  align-self: center;

  @media (min-width: 768px) {
    margin-top: 4rem;
    align-self: auto;
    justify-self: flex-end;
  }
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

.modalHeaderTitle {
  font-weight: 200;
}

.modalContentDescription {
  padding: 0 4rem;
  font-size: 1.2rem;
}
</style>
