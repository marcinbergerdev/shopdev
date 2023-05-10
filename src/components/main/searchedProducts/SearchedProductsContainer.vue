<template>
  <section class="searchedContainer">
    <AdsImage></AdsImage>

    <article class="lastSearchingWrapper">
      <h2 class="lastSearchingWrapper__title">Recently searched</h2>

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
    img: "/assets/zdj1.jpg",
    price: 43.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP with warranty + headset and charger cheap, not used un-smudged, recommend!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 2,
    category: "all",
    img: "/assets/zdj2.jpg",
    price: 56.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP with warranty + headset and charger cheap, not used un-smudged, recommend!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 3,
    category: "all",
    img: "/assets/zdj3.jpg",
    price: 76.55,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP with warranty + headset and charger cheap, not used un-smudged, recommend!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
  {
    id: 4,
    category: "all",
    img: "/assets/zdj4.jpg",
    price: 76.55,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP with warranty + headset and charger cheap, not used un-smudged, recommend!",
    promotion: false,
    productAvailable: false,
    productInaccessible: false,
    cartIcon: false,
  },
]);
</script>

<style scoped lang="scss">
.searchedContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0;
  padding-bottom: 5rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1px;
    background-color: var(--primary-greyDark);
  }

  @media (min-width: 1000px) {
    flex-direction: row;
  }
}

.lastSearchingWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7rem;

  &__title {
    width: 70%;
    margin: 7rem auto;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--primary-claret);
    border: 2px solid var(--primary-claret);

    @media (min-width: 768px) {
      width: auto;
      border: 0;
      font-size: 2.8rem;
      color: var(--black);
    }

    @media (min-width: 1000px) {
      margin: 0 0 0 10rem;
      text-align: start;
    }
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
}

.searchedList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;

  @media (min-width: 1000px) {
    margin: 2rem 2rem 0 2rem;
    justify-content: center;
    flex-flow: row wrap;
    gap: 5rem 10rem;
  }
}
</style>
