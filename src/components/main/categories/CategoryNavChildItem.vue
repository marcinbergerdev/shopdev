<template>
  <li class="underOption" @click="closeCategoryMenu">
    <BaseButton
      link
      :to="underCategory"
      class="underOption__name"
      @click="showAllProductInUnderCategory"
      >{{ title }}</BaseButton
    >
    <span class="underOption__amount">({{ amount }})</span>
  </li>
</template>

<script setup lang="ts">
import { useMenuVisibility } from "../../../stores/navigation/menuVisibility";
import { useUserCategories } from "../../../stores/navigation/userCategories";
import { useProducts } from "../../../stores/products/products";
import { computed } from "vue";

const props = defineProps<{
  underCategoryLink: string;
  title: string;
  amount: number;
  categoryLink?: string;
}>();

const { underCategoryLink, categoryLink, title, amount } = props;

const underCategory = computed(() => {
  return `/shop/categories/${categoryLink}/${underCategoryLink}`;
});

const categories = useMenuVisibility();
function closeCategoryMenu() {
  if (innerWidth < 768) {
    underCategories.hideBackIcon();
    categories.closeMenu();
  }
}

// get examples of products only for project
const testProductsLinkApi = "/category/electronics";
const setProducts = useProducts();
const underCategories = useUserCategories();

async function showAllProductInUnderCategory() {
  await setProducts.clearProductList();
  await setProducts.fetchProducts(testProductsLinkApi);
}
</script>

<style scoped lang="scss">
.underOption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
  color: var(--primary-greyDark);

  &__name {
    width: 100%;
    font-size: 1.7rem;
    color: var(--primary-greyDark);

    @media (min-width: 768px) {
      font-size: 1.4rem;
      &:hover {
        color: var(--primary-claret);
      }
    }
  }

  &__amount {
    color: var(--primary-claret);
    font-weight: 700;
  }

  @media (min-width: 768px) {
    margin: 0;
    padding: 1rem 0;
  }
}
</style>
