<template>
  <Transition name="fade" mode="out-in">
    <header class="header" :class="showHeader" :key="headerRemount">
      <router-link class="logoLink" to="/">Shopex</router-link>
      <SearchContainer></SearchContainer>
      <NavigationList></NavigationList>
    </header>
  </Transition>

  <CategoryNavList />
</template>

<script setup lang="ts">
import NavigationList from "./nav/NavigationList.vue";
import SearchContainer from "./search/SearchContainer.vue";
import CategoryNavList from "../main/categories/CategoryNavList.vue";

import { ref, computed, onMounted } from "vue";
const headerRemount = ref("mount");
const isHeader = ref(false);

const showHeader = computed(() => {
  return { showHeader: isHeader.value };
});

function userScroll() {
  if (window.pageYOffset <= 0) {
    headerRemount.value = "unMount";
    isHeader.value = false;
  }

  if (isHeader.value) return;
  isHeader.value = false;

  if (innerWidth < 768 && window.pageYOffset >= 300) {
    headerRemount.value = "mount";
    isHeader.value = true;
    return;
  }

  if (innerWidth >= 768 && window.pageYOffset >= 100) {
    headerRemount.value = "mount";
    isHeader.value = true;
    return;
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

.fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.fade-enter-active {
  transition: 150ms ease-in;
}

.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

// .fade-leave-from {
//   transform: translateY(-30px);
//   opacity: 0;
// }

// .fade-leave-active {
//   transition: 150ms ease-in;
// }

// .fade-leave-to {
//   transform: translateY(0);
//   opacity: 1;
// }

.header {
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

.showHeader {
  position: fixed;
  top: 0;
  z-index: 101;
  width: 100%;
}
</style>
