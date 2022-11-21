<template>
  <nav>
    <ul class="optionsContainer">
      <NavigationItem
        v-for="(option, index) in options.userOptions"
        :key="index"
        :path="option.path"
        :title="option.title"
        :icon="option.icon"
        :name="option.name"
        :display="option.display"
        :is-link="option.isLink"
        :is-dropMenu="option.isDropMenu"
      ></NavigationItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import { useUserNavigation } from "../../../stores/navigation/userNavigation";
const options = useUserNavigation();
</script>

<style scoped lang="scss">
@mixin flexDefault {
  display: flex;
  align-items: center;
}

nav {
  grid-area: nav;
}

.optionsContainer {
  @include flexDefault;
  justify-content: space-between;
  gap: 0 2rem;
}
</style>
