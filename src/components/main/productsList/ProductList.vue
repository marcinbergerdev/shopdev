<template>
  <ul class="productsList">
    <ProductItem v-for="product in products" :key="1"></ProductItem>
  </ul>
</template>

<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import { ref } from "vue";

const products = ref([1, 2, 3, 4]);
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
