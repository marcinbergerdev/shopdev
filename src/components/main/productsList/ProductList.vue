<template>
  <div class="productsListContainer">
    <HalfCircleSpinner
      v-if="isLoadingSpinner"
      class="loadingSpinner"
      :animation-duration="1000"
      :size="60"
      color="var(--primary-claret)"
    />

    <ul class="productsList">
      <BaseProduct
        view="selectedProduct"
        v-for="product in products.products.slice(0, 12)"
        :key="product.id"
        :id="product.id"
        :category="product.category"
        :img="product.image"
        :price="product.price"
        :favorite="true"
        :title="product.title"
        :description="product.description"
        :promotion="false"
        s
        :productAvailable="true"
        :cartIcon="true"
      ></BaseProduct>
    </ul>

    <PaginationList @page-back="pageDiscount" @page-next="pageIncrease"></PaginationList>
  </div>
</template>

<script setup lang="ts">
import { HalfCircleSpinner } from "epic-spinners";
import PaginationList from "./PaginationList.vue";
import { useProducts } from "../../../stores/products/products";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const products = useProducts();
const isLoadingSpinner = ref(false);

function pageDiscount(page: number) {}

function pageIncrease(page: number) {}

// this Api products is fetched from Fake Store and it is only for examples
onMounted(async () => {
  isLoadingSpinner.value = true;

  if (route.params.category && route.params.underCategory) {
    await products.fetchProducts("/category/electronics");
    isLoadingSpinner.value = false;
    return;
  }

  await products.fetchProducts("?limit=20");
  isLoadingSpinner.value = false;
});
</script>

<style scoped lang="scss">
.productsListContainer {
  position: relative;
  grid-area: productsList;
  margin-top: 6rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }
}

.productsList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    gap: 5rem 10rem;
  }
}

.loadingSpinner {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-20%, -50%);
  grid-area: spinner;
}
</style>
