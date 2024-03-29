<template>
  <li
    :id="name"
    class="optionElement"
    :class="[optionHover, switchingPositionAfterRegistration]"
    @click="selectOption(isDropMenu)"
    @mouseover="hoverOption"
    @mouseleave="leaveOption"
    v-if="userActivity"
  >
    <BaseButton link :to="path" :mode="view" :isMobileDisabled="isMobileDisabled">
      <Icon class="optionElement__icon" v-if="!hideIcon" :icon="icon" />
      <p class="optionElement__title">{{ title }}</p>

      <span v-if="isAmount && productsAmount > 0" class="navProductAmount">{{
        productsAmount
      }}</span>
    </BaseButton>

    <Teleport :to="sendMenuTo">
      <Transition name="dropMenu" :css="isDropMenuAnimation">
        <BaseMenu
          v-if="dropMenuMobileActivity || dropMenuDesktopActivity"
          :view="dropMenuMobileActivity || !dropMenuDesktopActivity"
          :menu-style="true"
          :container-position="dropMenuPositionMobile"
          :hover-position="hoverMenuPositionDesktop"
          :size="name"
          :title="title"
          :is-header="dropMenuMobileActivity"
          @close="closeMenu"
        >
          <MenuContent :title="title" :menuName="name"></MenuContent>
        </BaseMenu>
      </Transition>
    </Teleport>
  </li>
</template>

<script setup lang="ts">
import MenuContent from "../contentMenu/MenuContent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useUserFavorite } from "../../../stores/orders/userFavorite";
import { useUserOrders } from "../../../stores/orders/userOrders";

import { ref, computed, provide, onMounted, onUnmounted } from "vue";
import router from "../../../router";

const props = defineProps<{
  path: string;
  title: string;
  icon?: string;
  name?: string;
  view: string;
  productAmount: number;
  hoverPosition?: string;
  dropMenuPosition?: string;
  hideIcon?: boolean;
  isDropMenu?: boolean;
  isMobileDisabled?: string;
  isAmount?: boolean;
}>();
const {
  path,
  title,
  icon,
  name,
  view,
  hoverPosition,
  dropMenuPosition,
  hideIcon,
  isDropMenu,
  isMobileDisabled,
} = props;

provide("closeMenu", {
  closeMenu,
});

const dropMenuMobileActivity = ref<boolean>(false);
const dropMenuDesktopActivity = ref<boolean>(false);
const dropMenuAnimation = ref<boolean>(false);

const sendMenuTo = computed<string>(() =>
  dropMenuDesktopActivity.value ? `#${name}` : "body"
);
const isDropMenuAnimation = computed<boolean>(() =>
  dropMenuAnimation.value ? true : false
);

const dropMenuPositionMobile = computed<string | undefined>(() => {
  if (dropMenuMobileActivity.value) {
    return dropMenuPosition;
  }
});
const hoverMenuPositionDesktop = computed<string | undefined>(() => {
  if (dropMenuDesktopActivity.value) {
    return hoverPosition;
  }
});

const productsAmount = computed<number>(() => {
  if (name === "favorite") {
    return Object.keys(favorite.userFavorite).length;
  }
  return Object.keys(orders.userOrders).length;
});

const optionHover = computed<object>(() => {
  return { optionHover: isDropMenu };
});

const userIsLogged = computed<boolean>(() => {
  return !!userId.value && !!tokenId.value ? true : false;
});

const userActivity = computed<boolean>(() => {
  if (userIsLogged.value && (name == "login" || name == "register")) {
    return false;
  } else if (!userIsLogged.value && name == "logout") {
    return false;
  }

  return true;
});

const switchingPositionAfterRegistration = computed<string>(() => {
  return userIsLogged.value ? "userLoggedIn" : "userLoggedOut";
});

const userId = ref<string | null>(null);
const tokenId = ref<string | null>(null);

const auth = getAuth();
const favorite = useUserFavorite();
const orders = useUserOrders();

onAuthStateChanged(auth, async (user: any) => {
  if (user) {
    userId.value = user.accessToken;
    tokenId.value = user.uid;

    if (name === "favorite") {
      await favorite.getUserFavoriteProducts(user.uid);
      return;
    } else if (name === "cart") {
      await orders.getUserCartProducts(user.uid);
      return;
    }
    return;
  }

  userId.value = null;
  tokenId.value = null;
});

function hoverOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesktopActivity.value = true;
  }
}
function selectOption(isDropMenu?: boolean) {
  if (name === "logout") {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        userLoggedOut();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (isDropMenu && !dropMenuMobileActivity.value && innerWidth < 768) {
    dropMenuMobileActivity.value = true;
    document.body.classList.add("scrollHidden");
  }
}

function userLoggedOut() {
  window.scrollTo({ top: 0, left: 0 });
  router.replace("/shop");
  closeMenu();
  location.reload();
}

function leaveOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesktopActivity.value = false;
  }
}
function closeMenu() {
  dropMenuMobileActivity.value = false;
  dropMenuDesktopActivity.value = false;
}

function resizeListener() {
  const screenWidth = innerWidth;
  if (screenWidth < 768) {
    dropMenuDesktopActivity.value = false;
    dropMenuAnimation.value = true;
  }
  if (screenWidth >= 768) {
    dropMenuMobileActivity.value = false;
    dropMenuAnimation.value = false;
  }
}
function pageRefreshed() {
  const screenWidth = innerWidth;
  if (screenWidth < 768) {
    dropMenuAnimation.value = true;
    return;
  }
  dropMenuAnimation.value = false;
}

onMounted(() => {
  pageRefreshed();
  window.addEventListener("resize", resizeListener);
});
onUnmounted(() => window.removeEventListener("resize", resizeListener));
</script>

<style scoped lang="scss">
.dropMenu-enter-from,
.dropMenu-leave-to {
  transform: translateX(100%);
}
.dropMenu-enter-active,
.dropMenu-leave-active {
  transition: all 0.4s ease-out;
}
.dropMenu-enter-to,
.dropMenu-leave-from {
  transform: translateX(0%);
}

.userLoggedIn:nth-last-child(2),
.userLoggedOut:nth-last-child(3) {
  padding-left: 4.5rem;
  border-left: 1px solid var(--primary-greyDark);
}

.userLoggedIn:nth-last-child(2),
.userLoggedIn:nth-last-child(1),
.userLoggedOut:nth-last-child(3),
.userLoggedOut:nth-last-child(2),
.userLoggedOut:nth-last-child(1) {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

.optionElement {
  position: relative;
  padding: 0.5rem;
  text-align: center;

  &__icon {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    text-align: center;
  }

  @media (min-width: 768px) {
    position: relative;
  }
}

.optionHover {
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      outline: 1px solid var(--primary-claret);
      border-radius: 0.6rem 0.6rem 0 0;
    }
  }
}

.navProductAmount {
  position: absolute;
  top: 0;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primary-claret);
  border-radius: 50%;
}
</style>
