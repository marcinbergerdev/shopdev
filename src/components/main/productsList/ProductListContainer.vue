<template>
  <section>
    <p>{{ category }}</p>
    <ProductList :under-category="underCategory"></ProductList>
  </section>
</template>

<script setup lang="ts">
import ProductList from "./ProductList.vue";

defineProps<{
  category?: any;
  underCategory?: any;
}>();
</script>

<style scoped lang="scss"></style>
