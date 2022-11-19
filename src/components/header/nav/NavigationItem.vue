<template>
  <li
    class="menuOption"
    :class="isDropMenu"
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
      <div v-if="dropMenuActivity || dropMenuDesctopActivity" class="backdrop"></div>

      <Transition name="dropMenu" :css="isDropMenuAnimation">
        <BaseMenu
          v-if="dropMenuActivity || dropMenuDesctopActivity"
          :title="title"
          :mode="isDropMenu"
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
import { ref, computed, defineProps, onMounted, onUnmounted } from "vue";

const { path, title, icon, isLink, isDropMenu } = defineProps<{
  path: string;
  title: string;
  icon?: string;
  isLink: boolean;
  isDropMenu?: string;
}>();

const dropMenuActivity = ref(false);
const dropMenuDesctopActivity = ref(false);
const dropMenuAnimation = ref(false);

const sendMenuTo = computed(() => {
  return dropMenuDesctopActivity.value ? `.${isDropMenu}` : "body";
});

const isDropMenuAnimation = computed(() => {
  return dropMenuAnimation.value ? true : false;
});

function hoverOption() {
  if (!!isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = true;
  }
}
function selectedOption(isDropMenu?: string) {
  if (!!isDropMenu && !dropMenuActivity.value && innerWidth < 768) {
    dropMenuActivity.value = true;
  }
}

function leaveOption() {
  if (!!isDropMenu && innerWidth >= 768) {
    dropMenuDesctopActivity.value = false;
  }
}
function closeMenu() {
  dropMenuActivity.value = false;
  dropMenuDesctopActivity.value = false;
}

function resizeListener() {
  const screenWidth = innerWidth;
  if (screenWidth < 768) {
    dropMenuAnimation.value = true;
    dropMenuDesctopActivity.value = false;
  }
  if (screenWidth >= 768) {
    dropMenuActivity.value = false;
    dropMenuAnimation.value = false;
  }
}
onMounted(() => window.addEventListener("resize", resizeListener));
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

li:nth-child(4) {
  padding-left: 4.5rem;
  border-left: 1px solid var(--primary-greyDark);
}

li:nth-child(4),
li:nth-child(5) {
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
