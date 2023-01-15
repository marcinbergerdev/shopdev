<template>
  <AppHeader></AppHeader>
  <main>
    <AdsSlider />
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import AdsSlider from "../../components/main/ads/AdsSliderList.vue";
import AppHeader from "../../components/header/AppHeader.vue";
import AppFooter from "../../components/footer/AppFooter.vue";
</script>

<style scoped lang="scss"></style>
