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
  display: flex;
  justify-content: space-between;

}
</style>
