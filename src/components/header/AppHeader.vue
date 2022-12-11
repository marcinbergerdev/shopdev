<template>
  <header>
    <router-link class="logoLink" to="/">Shopex</router-link>
    <SearchContainer></SearchContainer>
    <NavigationList></NavigationList>
  </header>

  <CategoryNavList />
</template>

<script setup lang="ts">
import NavigationList from "./nav/NavigationList.vue";
import SearchContainer from "./search/SearchContainer.vue";
import CategoryNavList from "../main/categories/CategoryNavList.vue";
</script>

<style scoped lang="scss">
@mixin flexDefault {
  display: flex;
  align-items: center;
}

header {
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-areas:
    "link"
    "nav"
    "search";
  grid-template-columns: 1fr;
  gap: 2rem 0;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.26);

  @media (min-width: 290px) {
    grid-template-areas:
      "link nav"
      "search search";
  }

  @media (min-width: 768px) {
    gap: normal;
    @include flexDefault;
    justify-content: space-between;
  }
}
.logoLink {
  grid-area: link;
  color: var(--primary-claret);
  font-weight: 700;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}
</style>
