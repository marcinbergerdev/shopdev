<template>
  <Teleport :to="path" v-if="isOnMounted">
    <Transition
      name="categoriesAnimation"
      mode="out-in"
      :css="visibility.isMenuAnimation"
    >
      <BaseMenu
        :view="visibility.isMenuHidden"
        v-if="visibility.isMenuHidden || showMenu"
        :menu-style="isCategoriesForMobile"
      >
        <article class="categoriesListContainer">
          <ul class="categoriesList">
            <CategoryNavItem
              v-for="(category, id) in categories.getCategories"
              :key="id"
              :categoryId="id"
              :icon="category.icon"
              :title="category.title"
              :underCategory="category.underCategories"
            ></CategoryNavItem>
          </ul>
        </article>
      </BaseMenu>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import CategoryNavItem from "./CategoryNavItem.vue";
import { useUserCategories } from "../../../stores/navigation/userCategories";
import { useMenuVisibility } from "../../../stores/navigation/menuVisibility";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const categories = useUserCategories();
const visibility = useMenuVisibility();
const route = useRoute();

const path = ref(".navigationContainer");
const isOnMounted = ref(false);
const showMenu = ref(false);
const isCategoriesForMobile = ref(false);

function watchUserWidth() {
  if (innerWidth < 768 && showMenu) {
    path.value = "body";
    showMenu.value = false;
    isCategoriesForMobile.value = true;

    if (route.path === "/shop") {
      visibility.closeMenu();
      visibility.deactivateAnimation();
      return;
    }

    if (route.path !== "/shop") {
      setTimeout(() => {
        isOnMounted.value = true;
      }, 10);
      return;
    }
  }

  if (innerWidth >= 768) {
    isCategoriesForMobile.value = false;
    visibility.closeMenu();

    if (route.path !== "/shop") {
      isOnMounted.value = false;
      return;
    }

    if (route.path === "/shop") {
      setTimeout(() => {
        isOnMounted.value = true;
      }, 10);
      path.value = ".navigationContainer";
      showMenu.value = true;
      visibility.deactivateAnimation();
      return;
    }
  }
}

watch(route, (rout) => {
  if (innerWidth < 768 && route.path !== "/shop") {
    path.value = "body";
    isOnMounted.value = true;
  }

  if (innerWidth >= 768) {
    if (route.path !== "/shop") {
      visibility.closeMenu();
      showMenu.value = false;
      isOnMounted.value = false;
      return;
    }

    if (rout.path === "/shop") {
      setTimeout(() => {
        isOnMounted.value = true;
      }, 10);
      path.value = ".navigationContainer";
      showMenu.value = true;
      visibility.closeMenu();
      return;
    }
  }
});

onMounted(() => {
  if (innerWidth < 768 && (route.path === "/shop" || route.path !== "/shop")) {
    path.value = "body";
    isOnMounted.value = true;
    isCategoriesForMobile.value = true;
  }

  if (innerWidth >= 768 && route.path === "/shop") {
    showMenu.value = true;
    isOnMounted.value = true;
    isCategoriesForMobile.value = false;
  }

  window.addEventListener("resize", watchUserWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", watchUserWidth);
});
</script>

<style scoped lang="scss">
.categoriesAnimation-enter-from,
.categoriesAnimation-leave-to {
  transform: translateX(-100%);
}
.categoriesAnimation-enter-active,
.categoriesAnimation-leave-active {
  transition: all 0.4s ease-out;
}
.categoriesAnimation-enter-to,
.categoriesAnimation-leave-from {
  transform: translateX(0%);
}

.categoriesListContainer {
  height: calc(100vh - 4.5rem);
  position: relative;
  overflow-x: hidden;

  @media (min-width: 768px) {
    height: auto;
  }
}

.categoriesHeader {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: var(--primary-claretDark);

  &__title {
    color: var(--white);
    font-weight: 400;
  }

  &__closeButton {
    display: grid;
    place-items: center;
    background-color: transparent;
    border: 0;
  }

  &__icon {
    font-size: 2rem;
    color: var(--white);
  }
}

.categoriesList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 5rem 0;
  overflow: auto;
  overflow-x: hidden;
}
</style>
