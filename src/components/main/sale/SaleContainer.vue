<template>
  <article v-if="true" class="carouselContainer">
    <Carousel :items-to-show="showProducts" :wrap-around="true">
      <Slide v-for="product in promotionProducts" :key="product.id">
        <BaseProduct
          view="promotionSize"
          :id="product.id"
          :category="product.category"
          :img="product.img"
          :price="product.price"
          :favorite="product.favorite"
          :title="product.title"
          :description="product.description"
          :promotion="product.promotion"
          :product-available="product.productAvailable"
          :product-inaccessible="product.productInaccessible"
          :cart-icon="product.cartIcon"
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted, onUnmounted } from "vue";

const showProducts = ref(5);

const promotionProducts = ref([
  {
    id: 1,
    category: "all",
    img: "/assets/zdj1.jpg",
    price: 43.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },
  {
    id: 2,
    category: "all",
    img: "/assets/zdj2.jpg",
    price: 56.45,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 3,
    category: "all",
    img: "/assets/zdj3.jpg",
    price: 76.55,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 4,
    category: "all",
    img: "/assets/zdj4.jpg",
    price: 45.87,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 5,
    category: "all",
    img: "/assets/psp.jpg",
    price: 12.09,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 6,
    category: "all",
    img: "/assets/zdj1.jpg",
    price: 76.23,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 7,
    category: "all",
    img: "/assets/zdj2.jpg",
    price: 44.98,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },
  {
    id: 8,
    category: "all",
    img: "/assets/zdj3.jpg",
    price: 33.23,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 9,
    category: "all",
    img: "/assets/zdj4.jpg",
    price: 5.99,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },

  {
    id: 10,
    category: "all",
    img: "/assets/psp.jpg",
    price: 15.99,
    favorite: true,
    title: "Sony PSP",
    description:
      "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana niesmigana, polecam!",
    promotion: true,
    productAvailable: true,
    productInaccessible: false,
    cartIcon: true,
  },
]);

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

onMounted(() => {
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
</style>
