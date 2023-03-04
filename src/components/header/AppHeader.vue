<template>
  <header class="header" :class="[headerPositionFixed, headerPositionRelative]">
    <router-link class="logoLink" to="/">Shopex</router-link>
    <SearchContainer></SearchContainer>
    <NavigationList></NavigationList>
  </header>

  <CategoryNavList />
</template>

<script setup lang="ts">
import NavigationList from "./nav/NavigationList.vue";
import SearchContainer from "./search/SearchContainer.vue";
import CategoryNavList from "../main/categories/CategoryNavList.vue";

import { ref, computed, onMounted } from "vue";

const emit = defineEmits<{
  (e: "setMainPositionIfHeaderFixed", value: boolean): void;
}>();

const isFixed = ref<boolean>(false);
const isRelative = ref<boolean>(false);

const headerPositionFixed = computed(() => {
  return { positionFixed: isFixed.value };
});

const headerPositionRelative = computed(() => {
  return { positionRelative: isRelative.value };
});

function userScroll() {
  if (window.pageYOffset <= 0) {
    isFixed.value = false;
    isRelative.value = false;
    emit("setMainPositionIfHeaderFixed", false);
    return;
  }
  if (isFixed.value) return;

  setScrollPositions();
}

function setScrollPositions() {
  if (window.pageYOffset < 200) {
    isRelative.value = false;
  } else {
    isRelative.value = true;
  }
  emit("setMainPositionIfHeaderFixed", isRelative.value);

  if (window.pageYOffset >= 400) {
    isFixed.value = true;
    emit("setMainPositionIfHeaderFixed", isFixed.value);
  }
}

onMounted(() => {
  window.addEventListener("scroll", userScroll);
});
</script>

<style scoped lang="scss">
@mixin flexDefault {
  display: flex;
  align-items: center;
}

.header {
  position: relative;
  padding: 1.5rem;
  display: grid;
  grid-template-areas:
    "link"
    "nav"
    "search";
  grid-template-columns: 1fr;
  gap: 2rem 0;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.3);

  @media (min-width: 290px) {
    grid-template-areas:
      "link nav"
      "search search";
  }

  @media (min-width: 768px) {
    gap: normal;
    @include flexDefault;
    justify-content: space-between;
  }
}
.logoLink {
  grid-area: link;
  color: var(--primary-claret);
  font-weight: 700;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

.positionFixed,
.positionRelative {
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: all 0.5s ease-out;
}

.positionRelative {
  top: -150px;
}

.positionFixed {
  top: 0;
}
</style>
