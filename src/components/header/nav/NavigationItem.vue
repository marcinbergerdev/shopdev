<template>
  <li
    :id="name"
    class="optionElement"
    :class="optionHover"
    @click="selectedOption(isDropMenu)"
    @mouseover="hoverOption"
    @mouseleave="leaveOption"
  >
    <BaseButton v-if="isLink" link :to="path">
      <Icon class="optionElement__icon" :icon="icon" />
      <p class="optionElement__title">{{ title }}</p>
    </BaseButton>
    <BaseButton v-else :to="path" mode="flat">
      {{ title }}
    </BaseButton>

    <Teleport :to="sendMenuTo">
      <Transition name="dropMenu" :css="isDropMenuAnimation">
        <BaseMenu
          v-if="dropMenuMobileActivity || dropMenuDesctopActivity"
          :view="dropMenuMobileActivity || dropMenuDesctopActivity"
          :mode="hoverPosition"
          :position="dropMenuPosition"
          :size="name"
          @close="closeMenu"
        >
          <MenuContent
            :title="title"
            :menuName="name"
            :isMenuHeader="dropMenuMobileActivity"
            @close="closeMenu"
          ></MenuContent>
        </BaseMenu>
      </Transition>
    </Teleport>
  </li>
</template>

<script setup lang="ts">
import MenuContent from "../contentMenu/MenuContent.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const {
  path,
  title,
  icon,
  name,
  hoverPosition,
  dropMenuPosition,
  isLink,
  isDropMenu,
} = defineProps<{
  path: string;
  title: string;
  icon?: string;
  name?: string;
  hoverPosition?: string;
  dropMenuPosition?: string;
  isLink: boolean;
  isDropMenu?: boolean;
}>();

const dropMenuMobileActivity = ref(false);
const dropMenuDesctopActivity = ref(false);
const dropMenuAnimation = ref(false);

const sendMenuTo = computed(() => (dropMenuDesctopActivity.value ? `#${name}` : "body"));
const isDropMenuAnimation = computed(() => (dropMenuAnimation.value ? true : false));
const optionHover = computed(() => {
  return { optionHover: isDropMenu };
});

function hoverOption() {
  if (isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = true;
  }
}
function selectedOption(isDropMenu?: boolean) {
  if (isDropMenu && !dropMenuMobileActivity.value && innerWidth < 768) {
    dropMenuMobileActivity.value = true;
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

// .backdrop {
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   min-height: 100vh;
//   background-color: grey;
//   opacity: 0.26;

//   @media (min-width: 768px) {
//     display: none;
//   }
// }

.optionElement {
  padding: 0.5rem;
  text-align: center;

  &__icon {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    font-size: 0.9rem;
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
