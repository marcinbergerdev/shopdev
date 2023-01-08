<template>
  <section class="navigationContainer">
    <SaleContainer />
  </section>
</template>

<script setup lang="ts">
import SaleContainer from "../sale/SaleContainer.vue";
</script>

<style scoped lang="scss">
.navigationContainer {
  margin-top: 8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 1rem;
  }
}
</style>
