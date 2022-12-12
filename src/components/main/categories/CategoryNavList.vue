<template>
  <Teleport :to="path" v-if="isOnMounted">
    <Transition name="test" mode="out-in">
      <BaseMenu
        :view="visibility.isMenuHidden"
        position="left"
        v-if="visibility.isMenuHidden || showMenu"
        @close="closeMenu"
      >
        <article>
          <header>
            <button class="menuHeader__closeButton" @click="closeMenu">
              <Icon class="menuHeader__closeButton-icon" icon="bi:x-lg" />
            </button>
          </header>

          <ul>
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

function watchUserWidth() {
  if (innerWidth < 768 && showMenu && route.path === "/shop") {
    path.value = "body";
    showMenu.value = false;
    visibility.closeMenu();

    return;
  }

  if (innerWidth < 768 && showMenu && route.path !== "/shop") {
    path.value = "body";
    showMenu.value = false;
    setTimeout(() => {
      isOnMounted.value = true;
    }, 10);
  }

  if (innerWidth >= 768 && route.path !== "/shop") {
    showMenu.value = false;
    visibility.closeMenu();
    isOnMounted.value = false;
  }

  if (innerWidth >= 768 && route.path === "/shop") {
    path.value = ".navigationContainer";
    showMenu.value = true;
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

  if (innerWidth >= 768 && route.path !== "/shop") {
    visibility.closeMenu();
    showMenu.value = false;
    isOnMounted.value = false;
  }

  if (innerWidth >= 768 && rout.path === "/shop") {
    path.value = ".navigationContainer";
    setTimeout(() => {
      isOnMounted.value = true;
    }, 10);
    visibility.openMenu();
    showMenu.value = true;
  }
});

onMounted(() => {
  if (innerWidth < 768 && (route.path === "/shop" || route.path !== "/shop")) {
    path.value = "body";
    isOnMounted.value = true;
  }

  if (innerWidth >= 768 && route.path === "/shop") {
    showMenu.value = true;
    isOnMounted.value = true;
  }

  window.addEventListener("resize", watchUserWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", watchUserWidth);
});
</script>

<style scoped>
.test-enter-from,
.test-leave-to {
  transform: translateX(-100%);
}
.test-enter-active,
.test-leave-active {
  transition: all 0.4s ease-out;
}
.test-enter-to,
.test-leave-from {
  transform: translateX(0%);
}

article {
  min-height: 100vh;
}
</style>
