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
    </BaseButton>

    <Teleport :to="sendMenuTo">
      <Transition name="dropMenu" :css="isDropMenuAnimation">
        <BaseMenu
          v-if="dropMenuMobileActivity || dropMenuDesctopActivity"
          :view="dropMenuMobileActivity || !dropMenuDesctopActivity"
          :menu-style="true"
          :container-position="dropMenuPositionMobile"
          :hover-position="hoverMenuPositionDesctop"
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
import { ref, computed, provide, onMounted, onUnmounted } from "vue";
import { useUserData } from "../../../stores/auth/userData";
import router from "../../../router";

const props = defineProps<{
  path: string;
  title: string;
  icon?: string;
  name?: string;
  view: string;
  hoverPosition?: string;
  dropMenuPosition?: string;
  hideIcon?: boolean;
  isDropMenu?: boolean;
  isMobileDisabled?: string;
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

const userData = useUserData();

const dropMenuMobileActivity = ref<boolean>(false);
const dropMenuDesctopActivity = ref<boolean>(false);
const dropMenuAnimation = ref<boolean>(false);

const sendMenuTo = computed<string>(() =>
  dropMenuDesctopActivity.value ? `#${name}` : "body"
);
const isDropMenuAnimation = computed<boolean>(() =>
  dropMenuAnimation.value ? true : false
);

const dropMenuPositionMobile = computed<string | undefined>(() => {
  if (dropMenuMobileActivity.value) {
    return dropMenuPosition;
  }
});
const hoverMenuPositionDesctop = computed<string | undefined>(() => {
  if (dropMenuDesctopActivity.value) {
    return hoverPosition;
  }
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
onAuthStateChanged(auth, (user: any) => {
  if (user) {
    userId.value = user.accessToken;
    tokenId.value = user.uid;
    return;
  }

  userId.value = null;
  tokenId.value = null;
});

function hoverOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = true;
  }
}
function selectOption(isDropMenu?: boolean) {
  if (name === "logout") {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        userLoggedOut();
        userData.resetUserData();
      })
      .catch((error) => {
        console.log("error");
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
}

function leaveOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = false;
  }
}
function closeMenu() {
  dropMenuMobileActivity.value = false;
  dropMenuDesctopActivity.value = false;
}

function resizeListener() {
  const screenWidth = innerWidth;
  if (screenWidth < 768) {
    dropMenuDesctopActivity.value = false;
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
</style>
