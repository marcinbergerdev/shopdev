<template>
  <form>
    <input
      type="text"
      placeholder="Wyszukaj..."
      v-model="productName"
      @input="openSearchingList"
      @blur="closeSearchingList"
    />
  </form>

  <ul class="searchingList" v-if="isSearchingList" @mouseleave="closeSearchingList">
    <BaseProduct
      view="searchedProduct"
      v-for="(sortedProduct, id) in productSorting"
      :key="id"
      :id="sortedProduct.id"
      :img="sortedProduct.image"
      :title="sortedProduct.title"
      :price="sortedProduct.price"
      :description="sortedProduct.description"
    >
    </BaseProduct>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useProducts } from "../../../stores/products/products";

const searchedProduct = useProducts();
const productName = ref<string>("");
const isSearchingList = ref<boolean>(false);

const productSorting = computed(() => {
  if (productName.value === "") return;

  const sortedProducts = searchedProduct.products.filter((product) =>
    product.title.includes(productName.value)
  );

  return sortedProducts;
});

function openSearchingList() {
  isSearchingList.value = true;
}
function closeSearchingList() {
  isSearchingList.value = false;
}
</script>

<style scoped lang="scss">
form {
  width: 80%;
}

input {
  padding: 0.5rem;
  width: 100%;
  border-radius: 10px;
  border: 3px solid var(--primary-claret);
  outline: none;
  color: var(--primary-greyDark);
}

input:focus {
  transition: 0.15s ease-in-out;
  border: 3px solid var(--primary-greyDark);
}

.searchingList {
  position: absolute;
  top: 5.2rem;
  z-index: 100;
  width: 100%;
  height: auto;
  max-height: 35rem;
  overflow: auto;
  background-color: var(--white);
  outline: 1px solid var(--primary-claret);

  @media (min-width: 768px) {
    max-height: 60rem;
  }
}
</style>
