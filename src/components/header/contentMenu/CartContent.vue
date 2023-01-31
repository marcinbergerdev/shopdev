<template>
  <CartOrderHeader
    mode="orderHeaderHover"
    editButton="productsEditHover"
  ></CartOrderHeader>

  <ul class="orderListContainer">
    <li>
      <BaseOrder
        display="orderBoxHover"
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
    </li>
  </ul>

  <section class="orderAmountContainer">
    <div class="orderAmount">
      <h3>Do zapłaty:</h3>
      <span class="orderAmount__pay">239,40 zł</span>
    </div>

    <BaseButton mode="payButtonMobileMenu">Przejdz do koszyka</BaseButton>
  </section>
</template>

<script setup lang="ts">
import CartOrderHeader from "./CartOrderHeader.vue";

import { ref } from "vue";
import { useUserOrders } from "../../../stores/navigation/userOrders";
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
  padding: 3rem 2rem;
  overflow: auto;
  box-shadow: inset 0px 12px 11px -10px #ccc, inset 0px -12px 11px -10px #ccc;

  @media (min-width: 768px) {
    flex: auto;
    height: 40rem;
  }
}

// .orderProduct {
//   display: flex;
//   gap: 0 2rem;
//   padding: 2rem 0;
//   border-bottom: 1px solid var(--primary-claret);

//   &__img {
//     width: 6rem;
//     height: 6rem;
//   }
// }

// .orderData {
//   display: grid;
//   flex-direction: column;
//   align-items: center;
//   grid-template-areas:
//     "title title title"
//     "quantity price trash";
//   flex: 1;
//   gap: 2rem 0;

//   &__title {
//     text-align: start;
//     grid-area: title;
//   }

//   &__quantity {
//     grid: quantity;
//     @media (min-width: 768px) {
//       justify-self: flex-start;
//     }
//   }

//   &__price {
//     justify-self: flex-end;
//     grid-area: price;
//   }

//   &__icon {
//     font-size: 1.8rem;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }

// .orderAmountContainer {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem;
//   background-color: var(--primary-greyLight);
//   @media (min-width: 768px) {
//     border-radius: 0 0 0.6rem 0.6rem;
//   }
// }

// .orderAmount {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1.5rem;

//   &__pay {
//     font-weight: 700;
//   }
// }
</style>
