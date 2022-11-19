<template>
  <nav>
    <ul>
      <NavigationItem
        v-for="(option, index) in options.userOptions"
        :key="index"
        :path="option.path"
        :title="option.title"
        :icon="option.icon"
        :isLink="option.isLink"
      ></NavigationItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import { useUserNavigation } from "../../../stores/navigation/userNavigation";

const options = useUserNavigation();
</script>

<style scoped lang="scss"></style>
