<template>
  <article>
    <p>{{ underCategory }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  underCategory?: any;
}>();
</script>

<style scoped lang="scss"></style>
