<template>
  <main>
    <AdsSlider/>
    <CategoryContainer/>
    <SearchedProductsContainer/>
    <PopularCategoriesList></PopularCategoriesList>

  </main>
</template>

<script setup lang="ts">
import AdsSlider from './ads/AdsSliderList.vue';
import CategoryContainer from './categories/CategoryContainer.vue';
import SearchedProductsContainer from './searchedProducts/SearchedProductsContainer.vue';
import PopularCategoriesList from './popular/PopularCategoriesList.vue'
</script>

<style scoped lang="scss">

</style>