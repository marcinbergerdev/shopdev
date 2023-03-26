<template>
  <div class="authLoadingSpinner">
    <HalfCircleSpinner
      :animation-duration="1000"
      :size="60"
      color="var(--primary-claret)"
    />
  </div>
</template>

<script setup lang="ts">
import { HalfCircleSpinner } from "epic-spinners";
</script>

<style scoped lang="scss">
.authLoadingSpinner {
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
