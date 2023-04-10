<template>
  <article class="carouselContainer">
    <HalfCircleSpinner
      v-if="promotionProducts.isLoadingSpinner"
      class="loadingSpinner"
      :animation-duration="1000"
      :size="60"
      color="var(--primary-claret)"
    />

    <Carousel
      :items-to-show="showProducts"
      :wrap-around="true"
      v-if="!promotionProducts.isLoadingSpinner"
    >
      <Slide v-for="product in promotionProducts.products.slice(0, 10)" :key="product.id">
        <BaseProduct
          view="promotionSize"
          :id="product.id"
          :category="product.category"
          :img="product.image"
          :price="product.price"
          :favorite="true"
          :title="product.title"
          :description="product.description"
          :promotion="true"
          :product-available="true"
          :cart-icon="true"
        ></BaseProduct>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </article>
</template>

<script lang="ts" setup>
import { HalfCircleSpinner } from "epic-spinners";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted, onUnmounted } from "vue";
import { useProducts } from "../../../stores/products/products";

const promotionProducts = useProducts();
const showProducts = ref(5);

function watchUserWidth() {
  showProducts.value = 1;

  if (innerWidth >= 900) {
    showProducts.value = 1;
  }
  if (innerWidth >= 1100) {
    showProducts.value = 2;
  }
  if (innerWidth >= 1500) {
    showProducts.value = 3;
  }
  if (innerWidth >= 1600) {
    showProducts.value = 4;
  }
  if (innerWidth >= 1700) {
    showProducts.value = 5;
  }
}

onMounted(async () => {
  watchUserWidth();
  window.addEventListener("resize", watchUserWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", watchUserWidth);
});
</script>

<style lang="scss">
.carouselContainer {
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 55%;
  }
  @media (min-width: 1600px) {
    width: 68%;
  }
  @media (min-width: 1600px) {
    width: 75%;
  }
}

.carousel__track {
  padding: 1rem 0;
}
.carousel__prev,
.carousel__next {
  color: var(--white);
  background-color: var(--primary-claret);
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--white);
  }

  @media (min-width: 768px) {
    &:hover {
      color: var(--primary-claret);
      background-color: var(--white);
      transition: 0.2s ease-in-out;
    }
  }
}

.carousel__prev {
  left: 0;
  @media (min-width: 1100px) {
    left: -6rem;
  }
}

.carousel__next {
  right: 0;

  @media (min-width: 1100px) {
    right: -6rem;
  }
}

.loadingSpinner {
  margin: 15rem auto;
}
</style>
