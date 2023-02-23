<template>
  <div class="productsListContainer">
    <ul class="productsList">
      <BaseProduct
        view="selectedProduct"
        v-for="product in products.products"
        :key="product.id"
        :id="product.id"
        :category="product.category"
        :img="product.image"
        :price="product.price"
        :favorite="true"
        :title="product.title"
        :description="product.description"
        :promotion="false"
        :productAvailable="true"
        :cartIcon="true"
      ></BaseProduct>
    </ul>

    <HalfCircleSpinner
      v-if="isLoadingSpinner"
      class="loadingSpinner"
      :animation-duration="1000"
      :size="60"
      color="var(--primary-claret)"
    />
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "../../../stores/products/products";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { HalfCircleSpinner } from "epic-spinners";
import { ref } from "vue";

const route = useRoute();
const products = useProducts();
const isLoadingSpinner = ref(false);

// get examples of products only for project

onMounted(async () => {
  isLoadingSpinner.value = true;

  await products.clearProductList();
  if (route.params.category && route.params.underCategory) {
    await products.fetchProducts("/category/electronics?limit=20");
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
  margin: 6rem 0;
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
