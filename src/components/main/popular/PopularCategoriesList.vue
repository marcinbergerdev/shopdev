<template>
  <section class="popularCategoriesContainer">
    <header class="popularCategoriesHeader">
      <h3>Most searched and popular</h3>
    </header>

    <ul class="popularCategoriesList">
      <PopularCategoriesItem
        v-for="(category, id) in popularCategory"
        :key="id"
        :img="category.img"
        :name="category.name"
        :to="category.to"
      ></PopularCategoriesItem>
    </ul>
  </section>
</template>

<script setup lang="ts">
import PopularCategoriesItem from "./PopularCategoriesItem.vue";
import { ref } from "vue";

const popularCategory = ref([
  {
    img: "/assets/zdj1.jpg",
    name: "Home and Garden",
    to: "home",
  },
  {
    img: "/assets/zdj2.jpg",
    name: "Electronics",
    to: "electronics",
  },
  {
    img: "/assets/zdj3.jpg",
    name: "Automotive",
    to: "automotive",
  },
  {
    img: "/assets/zdj4.jpg",
    name: "Beauty",
    to: "beauty",
  },
  {
    img: "/assets/psp.jpg",
    name: "Fashion",
    to: "fashion",
  },
]);
</script>

<style scoped lang="scss">
.popularCategoriesContainer {
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
}

.popularCategoriesHeader {
  margin: 4rem 2rem;
  font-size: 1.6rem;
  @media (min-width: 768px) {
    margin: 0 0 3rem 2rem;
  }
}

.popularCategoriesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  margin-bottom: 20rem;
  font-size: 2rem;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around;
    margin-bottom: 0;
    gap: 5rem 3rem;
  }
}
</style>
