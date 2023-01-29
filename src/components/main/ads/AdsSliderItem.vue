<template>
  <transition name="slider" mode="out-in">
    <li class="sliderItem" v-if="currentSlide === sliderIndex">
      <img loading="lazy" class="sliderItem__img" :src="sliderPath" alt="slider-photo" />
    </li>
  </transition>
</template>

<script setup lang="ts">
const {} = defineProps<{
  sliderPath: string;
  sliderIndex: number;
  currentSlide: number;
}>();
</script>

<style scoped lang="scss">
.slider-leave-from,
.slider-enter-to {
  transform: translateX(0);
}
.slider-leave-active,
.slider-enter-active {
  transition: all 2s ease;
}
.slider-leave-to {
  transform: translateX(-100%);
}
.slider-enter-from {
  transform: translateX(100%);
}

.sliderItem {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
