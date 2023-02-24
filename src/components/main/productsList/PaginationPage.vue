<template>
  <li>
    <BaseButton mode="test"> {{ pageAmount }}</BaseButton>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  pageAmount: number;
}>();
</script>

<style scoped lang="scss"></style>
