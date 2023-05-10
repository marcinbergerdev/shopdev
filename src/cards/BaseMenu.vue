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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, computed } from "vue";

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
  return props.menuStyle ? "dropMenuMobile" : "categoriesDesktop";
});

const size = computed<string>(() => {
  if (
    props.size === "account" ||
    (props.size === "cart" && !!userId.value && !!tokenId.value)
  ) {
    return props.size;
  }

  return "defaultSize";
});

const userId = ref<string | null>(null);
const tokenId = ref<string | null>(null);

const auth = getAuth();
onAuthStateChanged(auth, (user: any) => {
  if (user) {
    userId.value = user.accessToken;
    tokenId.value = user.uid;
    return;
  }

  userId.value = null;
  tokenId.value = null;
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
  height: 100vh;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 109;
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
  z-index: 150;
  height: 100%;
  width: 85%;

  @media (min-width: 768px) {
    position: static;
    z-index: 0;
    top: auto;
    width: auto;
    margin-right: 2rem;
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
    height: auto;
    border-radius: 1rem;
    outline: 1px solid var(--primary-claret);
  }
}

.categoriesDesktop {
  @media (min-width: 768px) {
    width: 28rem;
    border: 1px solid var(--primary-greyDark);
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

.defaultSize {
  @media (min-width: 768px) {
    min-width: 22rem;
  }
}

.account {
  @media (min-width: 768px) {
    min-width: 23rem;
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
