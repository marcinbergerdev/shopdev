<template>
  <li class="categoriesOption" @mouseover="showCategory" @mouseleave="closeCategory">
    <div class="optionBox">
      <Icon class="optionBox__icon" :icon="icon" />
      <button class="optionBox__title">{{ title }}</button>
    </div>

    <Icon class="categoriesOption__arrowIcon" icon="akar-icons:arrow-right" />

    <Transition name="underList" mode="out-in" :css="stopUnderListTransition">
      <ul class="underList" v-if="isUnderCategory">
        <CategoryNavChildItem
          v-for="(category, id) in underCategory"
          :key="id"
          v-show="isUnderCategory"
          :link="category.link"
          :title="category.title"
          :amount="category.amount"
        ></CategoryNavChildItem>
      </ul>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import CategoryNavChildItem from "./CategoryNavChildItem.vue";
import { useUserCategories } from "../../../stores/navigation/userCategories";

import { ref } from "vue";
const underCategories = useUserCategories();

const isUnderCategory = ref(false);
const stopUnderListTransition = ref(true);

const props = defineProps<{
  icon: string;
  title: string;
  underCategory: Array<{
    link: string;
    title: string;
    amount: number;
  }>;
}>();
const { icon, title, underCategory } = props;

const emit = defineEmits<{
  (e: "underCategory", value: object): void;
}>();

function showCategory() {
  if (innerWidth >= 768) {
    stopUnderListTransition.value = false;
    isUnderCategory.value = true;
    return;
  }
  stopUnderListTransition.value = true;
  isUnderCategory.value = true;
  underCategories.showBackIcon();
}

function closeCategory() {
  isUnderCategory.value = false;
}
</script>

<style scoped lang="scss">
.underList-enter-from,
.underList-leave-to {
  transform: translateX(100%);
}
.underList-enter-active,
.underList-leave-active {
  transition: all 0.4s ease-out;
}
.underList-enter-to,
.underList-leave-from {
  transform: translateX(0%);
}

.categoriesOption {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 1rem;
  &__arrowIcon {
    font-size: 1.5rem;
    color: var(--primary-greyDark);
  }

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
}

.optionBox {
  display: flex;
  align-items: center;
  gap: 0 2rem;
  color: var(--primary-greyDark);

  &__title {
    font-size: 1.7rem;
    color: var(--primary-greyDark);
    background-color: transparent;
    border: 0;
  }

  &__icon {
    font-size: 2rem;
  }
}

.underList {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--white);

  &__closeButton {
    display: flex;
    align-items: center;
    text-align: start;
    background-color: transparent;
    border: 0;
    margin: 1.5rem 1rem;
    &-icon {
      color: var(--primary-greyDark);
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    left: 100%;
    padding: 0;
    background-color: rgb(229, 196, 196);
    overflow: scroll;
  }
}
</style>
