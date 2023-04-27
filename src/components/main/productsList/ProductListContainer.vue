<template>
  <section class="productListContainer">
    <aside class="underCategoryAside">
      <ul class="underCategoryList">
        <CategoryNavChildItem
          v-for="(underCategory, id) in selectedUnderCategories"
          :key="id"
          :categoryId="id"
          :title="underCategory.title"
          :under-category-link="underCategory.link"
          :amount="underCategory.amount"
          :category-link="category"
        ></CategoryNavChildItem>
      </ul>
    </aside>

    <ProductFilters @product-sorting-handler="sortingProducts"></ProductFilters>

    <ProductList :product-sorted="sortingProduct"></ProductList>
  </section>
</template>

<script setup lang="ts">
import CategoryNavChildItem from "../categories/CategoryNavChildItem.vue";
import ProductList from "./ProductList.vue";
import ProductFilters from "./ProductFilters.vue";
import { useUserCategories } from "../../../stores/navigation/userCategories";
import UnderCategories from "../../../../types/underCategories";
import { ref, onMounted } from "vue";

const props = defineProps<{
  category?: any;
  underCategory?: any;
}>();
const { category, underCategory } = props;

const categories = useUserCategories();
const selectedUnderCategories = ref<UnderCategories[]>([]);
const sortingProduct = ref<string>("all");

function selectCategories(categoryName: string, underCategoryName: string) {
  selectedUnderCategories.value = [];
  if ((!!categoryName && !underCategoryName) || (!!categoryName && !!underCategoryName)) {
    const checkCategories = categories.getCategories;
    const selectedCategory = checkCategories.filter(
      (option) => option.link === categoryName
    );
    selectedUnderCategories.value = selectedCategory[0].underCategories;
  }
}

function sortingProducts(sortStatus: string) {
  sortingProduct.value = sortStatus;
}

onMounted(() => {
  selectCategories(category, underCategory);
});
</script>

<style scoped lang="scss">
.productListContainer {
  display: grid;
  grid-template-areas:
    "filters filters"
    "productsList productsList";
  margin-top: 5rem;
  min-height: 100rem;
  grid-template-rows: 8rem 1fr;

  @media (min-width: 768px) {
    grid-template-areas:
      "categoryList filters ."
      "categoryList productsList spinner"
      "categoryList productsList .";
    grid-template-columns: 27rem 1fr;
    grid-template-rows: 5rem 1fr 7rem;
  }
}

.underCategoryAside {
  display: none;

  @media (min-width: 768px) {
    display: block;
    grid-area: categoryList;
  }
}

.underCategoryList {
  @media (min-width: 768px) {
    height: 100%;
    margin: 0 2rem 0 1rem;
    padding: 2rem 1rem;
    border: 1px solid var(--primary-greyDark);
  }
}
</style>
