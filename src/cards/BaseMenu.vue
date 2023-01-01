<template>
  <div class="dropContainer" :class="containerPosition">
    <Teleport to="body" v-if="view">
      <div class="backdrop" @click="closeMenu"></div>
    </Teleport>

    <div :class="[dropMenuStyle, hoverPosition, size]">
      <MenuHeader
        v-if="visibility.isMenuHidden || isHeader"
        :isHeader="isHeader"
        :title="title"
        @close="closeMenu"
      ></MenuHeader>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuHeader from "../components/header/contentMenu/MenuHeader.vue";
import { useMenuVisibility } from "../stores/navigation/menuVisibility";
import { useUserCategories } from "../stores/navigation/userCategories";
import { computed } from "vue";

const visibility = useMenuVisibility();
const underCategories = useUserCategories();

const props = defineProps<{
  view: boolean;
  menuStyle: boolean;
  hoverPosition?: string;
  containerPosition?: string;
  isHeader?: boolean;
  size?: string;
  title?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const dropMenuStyle = computed<string>(() => {
  return props.menuStyle ? "dropMenuMobile" : "categoriesDesctop";
});

function closeMenu() {
  visibility.closeMenu();
  underCategories.hideBackIcon();
  document.body.classList.remove("scrollHidden");
  emit("close");
}
</script>

<style scoped lang="scss">
@mixin dropPosition {
  position: fixed;
  top: 0;
  z-index: 100;
  height: 100vh;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background-color: grey;
  opacity: 0.26;

  @media (min-width: 768px) {
    display: none;
  }
}

.dropContainer {
  position: fixed;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 85%;

  @media (min-width: 768px) {
    position: static;
    top: auto;
    z-index: auto;
    width: auto;
    height: auto;
  }
}

.dropMenuMobile {
  position: absolute;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: var(--white);

  @media (min-width: 768px) {
    top: 100%;
    width: auto;
    height: auto;
    border-radius: 1rem;
    outline: 1px solid var(--primary-claret);
  }
}

.categoriesDesctop {
  @media (min-width: 768px) {
    background-color: rgb(228, 221, 221);
  }
}

.dropMenuRight {
  right: 0;
  @media (min-width: 768px) {
    right: auto;
  }
}

.dropMenuLeft {
  left: 0;
  @media (min-width: 768px) {
    left: auto;
  }
}

.user {
  @media (min-width: 768px) {
    min-width: 18rem;
  }
}

.cart {
  @media (min-width: 768px) {
    min-width: 35rem;
  }
}
.hoverRight {
  @media (min-width: 768px) {
    left: 0;
    border-radius: 0 0.6rem 0.6rem 0.6rem;
  }
}
.hoverLeft {
  @media (min-width: 768px) {
    right: 0;
    border-radius: 0.6rem 0 0.6rem 0.6rem;
  }
}
</style>
