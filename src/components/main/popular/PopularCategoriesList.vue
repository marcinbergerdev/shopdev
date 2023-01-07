<template>
  <section class="popularCategoriesContainer">
    <header class="popularCategoriesHeader">
      <h3>Najczęściej wyszukiwane i popularne</h3>
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
    img: "/src/assets/zdj1.jpg",
    name: "Dom i Ogród",
    to: "#",
  },
  {
    img: "/src/assets/zdj2.jpg",
    name: "Elektronika",
    to: "#",
  },
  {
    img: "/src/assets/zdj3.jpg",
    name: "Motoryzacja",
    to: "#",
  },
  {
    img: "/src/assets/zdj4.jpg",
    name: "Uroda",
    to: "#",
  },
  {
    img: "/src/assets/psp.jpg",
    name: "Moda",
    to: "#",
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
  font-size: 1.6rem;
}

.popularCategoriesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  font-size: 2rem;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 5rem 3rem;
  }
}
</style>
