<template>
  <UserOrdersEmptyList
    mode="emptyOrderListDesktopContainer"
    description="Your shopping cart is empty!"
    v-if="orders.isEmpty"
  ></UserOrdersEmptyList>

  <section class="userOrderDesktopContainer" v-else>
    <CartOrderHeader
      mode="orderHeaderDesktop"
      title="Your order"
      :product-amount="Object.keys(orders.userOrders).length"
      :is-edit-button="false"
      :is-delete-button="true"
      :is-amount="true"
      @show="showModal"
    ></CartOrderHeader>

    <ul class="userOrderListDesktop">
      <BaseOrder
        display="orderItemDesktop"
        mode="orderProductDesktop"
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
        :is-favorite="true"
        :is-cart="false"
        category-type="userCart"
      ></BaseOrder>
    </ul>

    <CartOrderPrice
      mode="orderAmountDesktop"
      content="orderAmountContainerDesktop"
    ></CartOrderPrice>

    <BaseButton
      link
      to="/shop"
      mode="filledLink onlyDesktop keepBuyingButton"
      @click="scrollPage"
      >Drive to shopping</BaseButton
    >

    <Teleport to="body">
      <BaseModal
        mode="deleteAllOrders"
        :isModal="isModal"
        :isHeaderCloseButton="false"
        :isInteraction="true"
      >
        <template #default>
          <h2 class="modalHeaderTitle">Clean out the basket?</h2>
        </template>

        <template #content>
          <p class="modalContentDescription">
            You remove all products from the cart, this cannot be undone!
          </p>
        </template>

        <template #interactive>
          <BaseButton mode="clear" @click="closeModal">Cancel</BaseButton>
          <BaseButton mode="border" @click="deleteAllOrdersProductHandler"
            >Continue</BaseButton
          >
        </template>
      </BaseModal>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import CartOrderHeader from "../../header/contentMenu/cartContent/CartOrderHeader.vue";
import CartOrderPrice from "../../header/contentMenu/cartContent/CartOrderPrice.vue";
import UserOrdersEmptyList from "./UserOrdersEmptyList.vue";
import { useUserOrders } from "../../../stores/orders/userOrders";
import { getAuth } from "firebase/auth";
import { ref, onMounted } from "vue";

const orders = useUserOrders();
const isModal = ref(false);

function showModal() {
  isModal.value = true;
}

function closeModal() {
  isModal.value = false;
}
function scrollPage() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

async function deleteAllOrdersProductHandler() {
  closeModal();
  const user = auth.currentUser;

  if (user) {
    await orders.removeAllFavoriteProducts(user.uid);
  }
}

const auth = getAuth();
onMounted(async () => {
  const user = auth.currentUser;

  if (user) {
    await orders.getUserCartProducts(user.uid);
  }
});
</script>

<style scoped lang="scss">
.userOrderDesktopContainer {
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

.orderHeaderDesktop {
  grid-area: header;
}
.orderAmountDesktop {
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

.userOrderListDesktop {
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
