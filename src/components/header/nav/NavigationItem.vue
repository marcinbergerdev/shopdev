<template>
  <li
    :id="name"
    class="optionElement"
    :class="optionHover"
    @click="selectOption(isDropMenu)"
    @mouseover="hoverOption"
    @mouseleave="leaveOption"
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
import { ref, computed, onMounted, onUnmounted } from "vue";

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

const dropMenuMobileActivity = ref(false);
const dropMenuDesctopActivity = ref(false);
const dropMenuAnimation = ref(false);

const sendMenuTo = computed(() => (dropMenuDesctopActivity.value ? `#${name}` : "body"));
const isDropMenuAnimation = computed(() => (dropMenuAnimation.value ? true : false));

const dropMenuPositionMobile = computed(() => {
  if (dropMenuMobileActivity.value) {
    return dropMenuPosition;
  }
});
const hoverMenuPositionDesctop = computed(() => {
  if (dropMenuDesctopActivity.value) {
    return hoverPosition;
  }
});

const optionHover = computed(() => {
  return { optionHover: isDropMenu };
});

function hoverOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = true;
  }
}
function selectOption(isDropMenu?: boolean) {
  if (isDropMenu && !dropMenuMobileActivity.value && innerWidth < 768) {
    dropMenuMobileActivity.value = true;
    document.body.classList.add("scrollHidden");
  }
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

li:nth-last-child(2) {
  padding-left: 4.5rem;
  border-left: 1px solid var(--primary-greyDark);
}
li:nth-last-child(2),
li:nth-last-child(1) {
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
