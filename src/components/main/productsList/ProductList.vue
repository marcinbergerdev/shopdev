<template>
  <div class="productsListContainer">
    <HalfCircleSpinner
      v-if="userProducts.isLoadingSpinner"
      class="loadingSpinner"
      :animation-duration="1000"
      :size="60"
      color="var(--primary-claret)"
    />

    <ul class="productsList">
      <BaseProduct
        view="selectedProduct"
        v-for="product in products"
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

    <PaginationList
      v-if="!userProducts.isLoadingSpinner"
      :number-of-buttons="buttonsPaginationAmount"
      :current-page="currentPage"
      @page-back="decreasePageHandler(productsAmount)"
      @page-next="increasePageHandler(productsAmount)"
    ></PaginationList>
  </div>
</template>

<script setup lang="ts">
import { HalfCircleSpinner } from "epic-spinners";
import PaginationList from "./PaginationList.vue";
import { useProducts } from "../../../stores/products/products";
import { ref, computed, onMounted, toRefs } from "vue";
import Product from "../../../../types/product";

const userProducts = useProducts();

const props = defineProps<{
  productSorted: string;
}>();
const { productSorted } = toRefs(props);

const buttonsPaginationAmount = ref<number>(0);
const currentPage = ref<number>(1);

const productsFrom = ref<number>(0);
const productsTo = ref<number>(12); // set number of products at your list
const productsAmount = productsTo.value;

const products = computed(() => {
  if (productSorted.value === "all") {
    return userProducts.products.slice(productsFrom.value, productsTo.value);
  } else if (productSorted.value === "alphabeticallyAZ") {
    const sortedAlphabetically = userProducts.products.sort((a: Product, b: Product) => {
      let titleA = a.title.toLocaleLowerCase();
      let titleB = b.title.toLocaleLowerCase();

      if (titleA > titleB) {
        return 1;
      }

      if (titleA < titleB) {
        return -1;
      }

      return 0;
    });

    return sortedAlphabetically.slice(productsFrom.value, productsTo.value);
  } else if (productSorted.value === "alphabeticallyZA") {
    const sortedAlphabetically = userProducts.products.sort((a: Product, b: Product) => {
      let titleA = a.title.toLocaleLowerCase();
      let titleB = b.title.toLocaleLowerCase();

      if (titleA < titleB) {
        return 1;
      }

      if (titleA > titleB) {
        return -1;
      }

      return 0;
    });

    return sortedAlphabetically.slice(productsFrom.value, productsTo.value);
  } else if (productSorted.value === "lowest") {
    const sortedAlphabetically = userProducts.products.sort((a: Product, b: Product) => {
      let titleA = a.price;
      let titleB = b.price;

      if (titleA > titleB) {
        return 1;
      }

      if (titleA < titleB) {
        return -1;
      }

      return 0;
    });
    return sortedAlphabetically.slice(productsFrom.value, productsTo.value);
  } else {
    const sortedAlphabetically = userProducts.products.sort((a: Product, b: Product) => {
      let titleA = a.price;
      let titleB = b.price;

      if (titleA < titleB) {
        return 1;
      }

      if (titleA > titleB) {
        return -1;
      }

      return 0;
    });
    return sortedAlphabetically.slice(productsFrom.value, productsTo.value);
  }
});

function setNumberOfButtons(amount: number) {
  const numberOfButtons = Math.ceil(Number(amount / productsTo.value));
  buttonsPaginationAmount.value = numberOfButtons;
}

function decreasePageHandler(amount: number) {
  if (productsFrom.value <= 0 && productsTo.value <= amount) return;
  productsFrom.value -= amount;
  productsTo.value -= amount;
  --currentPage.value;
}

function increasePageHandler(amount: number) {
  if (productsTo.value >= userProducts.products.length) return;
  productsFrom.value += amount;
  productsTo.value += amount;
  ++currentPage.value;
}

onMounted(async () => {
  setNumberOfButtons(userProducts.products.length);
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
