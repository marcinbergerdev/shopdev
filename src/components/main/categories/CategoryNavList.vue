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
        @close="closeMenu"
      >
        <article class="categoriesListContainer">
          <header class="categoriesHeader" v-if="visibility.isMenuHidden">
            <h2 class="categoriesHeader__title">Category</h2>

            <button class="categoriesHeader__closeButton" @click="closeMenu">
              <Icon class="categoriesHeader__icon" icon="bi:x-lg" />
            </button>
          </header>

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

function closeMenu() {
  visibility.closeMenu();
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
      visibility.openMenu();
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 5rem 0;
  overflow: auto;
  overflow-x: hidden;
}
</style>
