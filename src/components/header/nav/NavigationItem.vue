<template>
  <li>
    <BaseButton v-if="isLink" link :to="path">
      <Icon class="menuNav__icon" :icon="icon" />
      <p class="menuNav__title">{{ title }}</p>
    </BaseButton>

    <BaseButton v-else :to="path">
      {{ title }}
    </BaseButton>
  </li>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { Icon } from '@iconify/vue';
import { defineProps } from "vue";

const {path, title, icon, isLink} = defineProps<{
  path: string;
  title: string;
  icon?: string;
  isLink: boolean;
}>();
</script>

<style scoped lang="scss"></style>
