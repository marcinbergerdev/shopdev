<template>
  <section class="favoriteContainer">
    <CartOrderHeader
      mode="orderHeaderDesctop"
      title="Ulubione"
      :is-edit-button="false"
      :is-delete-button="true"
      :is-amount="false"
      @show="showModal"
    ></CartOrderHeader>

    <UserOrdersEmptyList
      mode="emptyOrderListDesctopContainer"
      description="Twój lista ulubionych jest pusta!"
      v-if="favorites.isEmpty"
    ></UserOrdersEmptyList>

    <ul class="favoriteList">
      <BaseOrder
        display="orderItemDesctop"
        mode="orderProductDesctop"
        v-for="(favorite, id) in favorites.userFavorite"
        :key="id"
        :product-id="id"
        :id="favorite.id"
        :img="favorite.img"
        :category="favorite.categories"
        :title="favorite.title"
        :description="favorite.description"
        :amount="false"
        :price="favorite.price"
        :delete-button="favorite.deleteButton"
        :is-cart="true"
        category-type="favoriteProduct"
      ></BaseOrder>
    </ul>
  </section>

  <Teleport to="body">
    <BaseModal
      mode="deleteAllOrders"
      :isModal="isModal"
      :isHeaderCloseButton="false"
      :isInteraction="true"
    >
      <template #default>
        <h2 class="modalHeaderTitle">Wyczyścić ulubione?</h2>
      </template>

      <template #content>
        <p class="modalContentDescription">
          Usuwasz wszystkie produkty z listy ulubionych, nie można tego cofnąć!
        </p>
      </template>

      <template #interactive>
        <BaseButton mode="clear" @click="closeModal">Anuluj</BaseButton>
        <BaseButton mode="border">Continue</BaseButton>
      </template>
    </BaseModal>
  </Teleport>
</template>

<script setup lang="ts">
import UserOrdersEmptyList from "../userOrders/UserOrdersEmptyList.vue";
import CartOrderHeader from "../../header/contentMenu/cartContent/CartOrderHeader.vue";
import { useUserFavorite } from "../../../stores/orders/userFavorite";
import { onMounted, ref } from "vue";

import { getAuth } from "firebase/auth";

const auth = getAuth();
const favorites = useUserFavorite();
const isModal = ref(false);

function showModal() {
  isModal.value = true;
}

function closeModal() {
  isModal.value = false;
}

onMounted(async () => {
  const user = auth.currentUser;

  if (user) {
    await favorites.getUserFavoriteProducts(user.uid);
  }
});
</script>

<style scoped lang="scss">
.favoriteContainer {
  padding: 2rem 0;
  width: min(100%, 75rem);
  margin: 10rem auto 5rem auto;

  @media (min-width: 768px) {
    padding: 2rem;
    border: 2px solid var(--primary-claret);
  }
}

.favoriteList {
  margin-top: 3rem;
}

.deleteAll {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid var(--secondary-lightRed);
  border-radius: 5px;
}
</style>
