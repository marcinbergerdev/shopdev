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

    <ProductFilters></ProductFilters>

    <ProductList></ProductList>

    <ProductPagination></ProductPagination>
  </section>
</template>

<script setup lang="ts">
import CategoryNavChildItem from "../categories/CategoryNavChildItem.vue";
import ProductList from "./ProductList.vue";
import ProductFilters from "./ProductFilters.vue";
import ProductPagination from "./ProductPagination.vue";
import { useUserCategories } from "../../../stores/navigation/userCategories";
import { ref, onMounted } from "vue";

const props = defineProps<{
  category?: any;
  underCategory?: any;
}>();
const { category, underCategory } = props;

interface UnderCategories {
  link: string;
  title: string;
  amount: number;
}

const categories = useUserCategories();
const selectedUnderCategories = ref<Array<UnderCategories>>([]);

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

onMounted(() => {
  selectCategories(category, underCategory);
});
</script>

<style scoped lang="scss">
.productListContainer {
  display: grid;
  grid-template-areas:
    "filters filters"
    "productsList productsList"
    "pagination pagination";
  margin-top: 5rem;
  min-height: 100rem;
  grid-template-rows: 8rem 1fr 7rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "categoryList filters ."
      "categoryList productsList spinner"
      "categoryList pagination .";
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
