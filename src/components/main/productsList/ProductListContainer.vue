<template>
  <section>
    <ul class="test">
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
  </section>

  <section>
  <p>ddds</p>
  </section>
</template>

<script setup lang="ts">
import CategoryNavChildItem from "../categories/CategoryNavChildItem.vue";
import { useUserCategories } from "../../../stores/navigation/userCategories";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const categories = useUserCategories();

const props = defineProps<{
  category?: any;
  underCategory?: any;
}>();
const { category, underCategory } = props;

const route = useRoute();
const router = useRouter();
const test = ref<any>([]);

interface UnderCategories {
  link: string;
  title: string;
  amount: number;
}

const selectedUnderCategories = ref<Array<UnderCategories>>([]);

onMounted(() => {
  if ((!!category && !underCategory) || (!!categories && !!underCategory)) {
    const checkCategories = categories.getCategories;
    const selectedCategory = checkCategories.filter((option) => option.link === category);
    selectedUnderCategories.value = selectedCategory[0].underCategories;
  }
});
</script>

<style scoped lang="scss">
.test {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}
</style>
