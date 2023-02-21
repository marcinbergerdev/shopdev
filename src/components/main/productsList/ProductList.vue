<template>
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
</template>

<script setup lang="ts">
import { useProducts } from "../../../stores/products/products";
import { onMounted } from "vue";

const products = useProducts();

onMounted(async () => {
  await products.clearProductList();
  await products.fetchProducts();
});
</script>

<style scoped lang="scss">
.productsList {
  grid-area: productsList;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 5rem;
    align-items: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    gap: 5rem 10rem;
  }
}
</style>
