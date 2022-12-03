<template>
  <header class="sliderContainer">
    <section class="slider">
      <ul class="sliderList">
        <AdsSliderItem
          v-for="(slider, id) in sliders"
          :key="id"
          :sliderPath="slider.path"
          :sliderIndex="id"
          :currentSlide="slide"
        ></AdsSliderItem>
      </ul>
    </section>

    <section class="sliderDots">
      <DotsSlider
        v-for="dot in dots"
        :key="dot"
        :currentDot="dot"
        :currentSlide="slide"
      ></DotsSlider>
    </section>
  </header>
</template>

<script setup lang="ts">
import AdsSliderItem from "./AdsSliderItem.vue";
import DotsSlider from "../dots/DotsSlider.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const slide = ref(0);
const sliders = ref([
  { path: "/src/assets/psp.jpg" },
  { path: "/src/assets/zdj1.jpg" },
  { path: "/src/assets/zdj2.jpg" },
  { path: "/src/assets/zdj3.jpg" },
  { path: "/src/assets/zdj4.jpg" },
]);

const dots = ref([0, 1, 2, 3, 4]);
let sliderInterval: NodeJS.Timer;

onMounted(() => {
  sliderInterval = setInterval(() => {
    if (slide.value === sliders.value.length - 1) {
      slide.value = 0;
      return;
    }
    ++slide.value;
  }, 30000);
});

onBeforeUnmount(() => {
  clearInterval(sliderInterval);
});
</script>

<style scoped lang="scss">
.sliderContainer {
  margin-top: 2rem;
}

.slider {
  width: min(100%, 90rem);
  height: 13rem;
  margin: 0 auto;
  background-color: rgb(224, 136, 136);
}

.sliderList {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.sliderDots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.8rem;

  margin-top: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
}
</style>
