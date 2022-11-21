<template>
  <li
    class="menuOption"
    :class="name"
    @click="selectedOption(isDropMenu)"
    @mouseover="hoverOption"
    @mouseleave="leaveOption"
  >
    <BaseButton v-if="isLink" link :to="path">
      <Icon class="menuOption__icon" :icon="icon" />
      <p class="menuOption__title">{{ title }}</p>
    </BaseButton>

    <BaseButton v-else :to="path" mode="flat">
      {{ title }}
    </BaseButton>

    <Teleport :to="sendMenuTo">
      <div
        v-if="dropMenuMobileActivity || dropMenuDesctopActivity"
        class="backdrop"
      ></div>

      <Transition name="dropMenu" :css="isDropMenuAnimation">
        <BaseMenu
          v-if="dropMenuMobileActivity || dropMenuDesctopActivity"
          :title="title"
          :mode="display"
          @close="closeMenu"
        ></BaseMenu>
      </Transition>
    </Teleport>
  </li>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import BaseMenu from "../../../cards/BaseMenu.vue";
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const { path, title, icon, name, display ,isLink,isDropMenu } = defineProps<{
  path: string;
  title: string;
  icon?: string;
  name?: string;
  display?: string;
  isLink: boolean;
  isDropMenu?: boolean;
}>();

const dropMenuMobileActivity = ref(false);
const dropMenuDesctopActivity = ref(false);
const dropMenuAnimation = ref(false);

const sendMenuTo = computed(() => (dropMenuDesctopActivity.value ? `.${name}` : "body"));
const isDropMenuAnimation = computed(() => (dropMenuAnimation.value ? true : false));

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
    dropMenuAnimation.value = true;
    dropMenuDesctopActivity.value = false;
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



.backdrop {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background-color: grey;
  opacity: 0.26;

  @media (min-width: 768px) {
    display: none;
  }
}

.menuOption {
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
</style>
