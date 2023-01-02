<template>
  <section class="navigationContainer">
    <SaleList />
  </section>
</template>

<script setup lang="ts">
import SaleList from "../sale/SaleList.vue";
</script>

<style scoped lang="scss">
.navigationContainer {
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 0 1rem;
  }
}
</style>
