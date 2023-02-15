<template>
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
</template>

<script setup lang="ts">
import CategoryNavChildItem from "../categories/CategoryNavChildItem.vue";
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
.underCategoryAside {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

.underCategoryList {
}
</style>
