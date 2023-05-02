<template>
  <section>
    <SearchProduct></SearchProduct>
    <HamburgerMenu></HamburgerMenu>
  </section>
</template>

<script setup lang="ts">
import HamburgerMenu from "../hamburger/HamburgerMenu.vue";
import SearchProduct from "./SearchProduct.vue";
</script>

<style scoped lang="scss">
@mixin flexDefault {
  display: flex;
  align-items: center;
}

section {
  position: relative;
  grid-area: search;
  padding-right: 1rem;
  grid-area: search;
  @include flexDefault;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 37%;
    justify-content: center;
  }
}
</style>
