<template>
  <AppHeader @set-main-position-if-header-fixed="mainPosition"></AppHeader>
  <main :class="headerPositionFixed">
    <AdsSlider />
    <router-view :key="$route.path"></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import AdsSlider from "../../components/main/ads/AdsSliderList.vue";
import AppHeader from "../../components/header/AppHeader.vue";
import AppFooter from "../../components/footer/AppFooter.vue";

import { ref, computed } from "vue";

const isHeaderFixed = ref<boolean>(false);

const headerPositionFixed = computed(() => {
  return { mainPosition: isHeaderFixed.value };
});

function mainPosition(isFixed: boolean) {
  isHeaderFixed.value = isFixed;
}
</script>

<style scoped lang="scss">
.mainPosition {
  position: relative;
  top: 12.9rem;
  z-index: 1;
  margin-bottom: 25rem;

  @media (min-width: 768px) {
    top: 7.3rem;
  }
}
</style>
