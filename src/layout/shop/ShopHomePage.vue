<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import AppHeader from "../../components/header/AppHeader.vue";
import AppFooter from "../../components/footer/AppFooter.vue";
</script>

<style scoped lang="scss"></style>
