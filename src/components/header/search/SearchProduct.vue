<template>
  <form>
    <input
      type="text"
      placeholder="Search..."
      v-model="productName"
      @input="openSearchingList"
    />
  </form>

  <ul
    ref="outside"
    class="searchingList"
    v-show="isSearchingList"
    @mouseleave="closeSearchingList"
  >
    <BaseProduct
      view="searchedProduct"
      v-for="(sortedProduct, id) in productSorting"
      :key="id"
      :id="sortedProduct.id"
      :img="sortedProduct.image"
      :title="sortedProduct.title"
      :price="sortedProduct.price"
      :description="sortedProduct.description"
      @show-list="openSearchingList"
    >
    </BaseProduct>

    <li v-if="isEmpty" class="elementEmpty">
      <div>
        <p>No search results</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useProducts } from "../../../stores/products/products";

const searchedProduct = useProducts();

const outside = ref<HTMLDivElement | null>(null);
const productName = ref<string>("");
const isSearchingList = ref<boolean>(false);
const isEmpty = ref<boolean>(false);

const productSorting = computed(() => {
  if (productName.value === "") return;

  const sortedProducts = searchedProduct.products.filter((product) =>
    product.title.includes(productName.value)
  );

  return sortedProducts;
});

function openSearchingList() {
  if (productName.value === "") return (isSearchingList.value = false);

  productSorting.value?.length === 0 ? (isEmpty.value = true) : (isEmpty.value = false);

  isSearchingList.value = true;
}
function closeSearchingList() {
  isSearchingList.value = false;
}

const handleClickOutside = (e: MouseEvent) => {
  if (
    outside.value &&
    !outside.value.contains(e.target as HTMLElement) &&
    !(e.target as HTMLElement).id
  ) {
    closeSearchingList();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
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

.elementEmpty {
  text-align: center;
  padding: 4rem 0;
  font-size: 1.4rem;
}
</style>
