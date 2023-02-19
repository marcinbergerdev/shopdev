<template>
  <ul class="productsList">
    <BaseProduct view="test" v-for="product in products.products" :key="1"></BaseProduct>
  </ul>
</template>

<script setup lang="ts">
import { useProducts } from "../../../stores/products/products";
const products = useProducts();
</script>

<style scoped lang="scss">
.productsList {
  grid-area: productsList;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 5rem;
    align-items: flex-start;
  }
}
</style>
