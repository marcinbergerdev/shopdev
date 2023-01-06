<template>
  <section class="searchedContainer">
    <AdsImage></AdsImage>
    <!-- <AdsImage></AdsImage> -->

    <article class="lastSearchingWrapper">
      <h2 class="lastSearchingWrapper__title">Ostatnio wyszukiwane</h2>

      <ul class="searchedList">
        <BaseProduct
          v-for="product in searchedProduct"
          view="lastSearchingSize"
          :key="product.id"
          :id="product.id"
          :category="product.category"
          :img="product.img"
          :price="product.price"
          :favorite="product.favorite"
          :title="product.title"
          :description="product.description"
          :promotion="product.promotion"
          :product-available="product.productAvailable"
          :product-inaccessible="product.productInaccessible"
          :cart-icon="product.cartIcon"
        ></BaseProduct>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import AdsImage from "../ads/AdsImage.vue";
import { ref } from "vue";

const searchedProduct = ref([
  {
    id: 1,
    category: "all",
    img: "/src/assets/zdj1.jpg",
    price: 43.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 2,
    category: "all",
    img: "/src/assets/zdj2.jpg",
    price: 56.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 3,
    category: "all",
    img: "/src/assets/zdj3.jpg",
    price: 76.55,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 4,
    category: "all",
    img: "/src/assets/zdj3.jpg",
    price: 76.55,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
]);
</script>

<style scoped lang="scss">
.searchedContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.lastSearchingWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10rem;

  &__title {
    width: 70%;
    margin: 0 auto;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--primary-claret);
    border: 2px solid var(--primary-claret);

    @media (min-width: 768px) {
      width: auto;
      margin: 0 0 0 10rem;
      border: 0;
      text-align: start;
      font-size: 2.8rem;
      color: var(--black);
    }
  }
  @media (min-width: 768px) {
    margin: 0;
  }
}

.searchedList {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 2rem;
    flex-direction: row;
    justify-content: center;
    gap: 0 10rem;
  }
}
</style>
