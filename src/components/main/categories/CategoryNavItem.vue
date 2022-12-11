<template>
  <li class="test" @mouseover="showCategory" @mouseleave="closeCategory">
    <div>
      <Icon :icon="icon" />
      <button>{{ title }}</button>
    </div>
    <Icon icon="akar-icons:arrow-right" />

    <ul>
      <CategoryNavChildItem
        v-for="(category, id) in underCategory"
        :key="id"
        v-show="isUnderCategory"
        :link="category.link"
        :title="category.title"
        :amount="category.amount"
      ></CategoryNavChildItem>
    </ul>
  </li>
</template>

<script setup lang="ts">
import CategoryNavChildItem from "./CategoryNavChildItem.vue";
import { ref, onMounted } from "vue";

const isUnderCategory = ref(false);

const { icon, title, underCategory, categoryId } = defineProps<{
  categoryId: number;
  icon: string;
  title: string;
  underCategory: Array<{
    link: string;
    title: string;
    amount: number;
  }>;
}>();

function showCategory() {
  isUnderCategory.value = true;
}

function closeCategory() {
  isUnderCategory.value = false;
}

const emit = defineEmits<{
  (e: "underCategory", value: object): void;
}>();

onMounted(() => {
  // console.log(underCategory);

  emit("underCategory", underCategory);
});
</script>

<style scoped>
.test {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  background-color: rgb(202, 167, 167);
}
</style>
