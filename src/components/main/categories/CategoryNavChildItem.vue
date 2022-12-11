<template>
  <li>
    <a :href="link">{{ title }}</a>
    <span>({{ amount }})</span>
  </li>
</template>

<script setup lang="ts">

const { link, title, amount } = defineProps<{
  link: string;
  title: string;
  amount: number;
}>();
</script>

<style scoped></style>
