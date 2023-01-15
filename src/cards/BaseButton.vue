<template>
  <RouterLink class="link" :class="mode" :to="isRouterLink" v-if="link">
    <slot></slot>
  </RouterLink>

  <button :class="mode" v-else>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const isRouterLink = computed(() => (to === undefined ? "" : to));

const { to, link, mode } = defineProps<{
  to?: string;
  link?: boolean;
  mode?: string;
}>();
</script>

<style scoped lang="scss">
.link,
button {
  color: var(--primary-greyDark);
}

.link {
  &:hover,
  &.router-link-active {
    color: var(--primary-claretDark);
  }
}

.flat {
  padding: 0.7rem 1.5rem;
  color: var(--white);
  background-color: var(--primary-claretDark);
  border-radius: 50px;
  border: 0;

  &:hover {
    background-color: var(--primary-claret);
    cursor: pointer;
    transition: 0.15s ease-in-out;
  }
}

.empty,
.deleteAccount {
  background-color: transparent;
  color: var(--secondary-lightRed);

  &:hover {
    color: var(--white);
    background-color: var(--secondary-lightRed);
    transition: 0.15s ease-in-out;
    cursor: pointer;
  }
}

.empty {
  padding: 2rem 0;
  border: 0;
  border-top: 1px solid var(--secondary-lightRed);

  @media (min-width: 768px) {
    padding: 1rem 0;
    border-radius: 0 0 0.6rem 0.6rem;
  }
}

.deleteAccount {
  padding: 1rem;
  border: 1px solid var(--secondary-lightRed);
  border-radius: 0.8rem;
}

.navElement {
  display: block;
  width: 100%;
  height: 100%;
}

.settingOption {
  display: block;
  padding: 1rem 3rem;
  font-size: 2rem;
  &.router-link-active {
    background-color: var(--primary-claret);
    color: var(--white);
    transition: 0.15s ease-in-out;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding: 1rem 5rem;
  }
}

.payButtonMobileMenu {
  padding: 1.3rem;
  border-radius: 50px;
  color: var(--white);
  background-color: var(--primary-claret);
  border: 0;
}

.productsEdit {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-size: 1.3rem;
  color: var(--primary-blue);
}

.deleteProduct {
  position: relative;
  width: 2rem;
  padding: 1.2rem;
  grid-area: trash;
  justify-self: flex-end;
  color: var(--secondary-lightRed);
  background-color: transparent;
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      color: var(--white);
      background-color: var(--secondary-lightRed);
    }
  }
}

.addToCart {
  display: grid;
  place-items: center;
  padding: 0.4rem;
  background-color: transparent;
  border: 1px solid var(--secondary-superLightGreen);
  border-radius: 50%;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-superLightGreen);
    .cartIcon {
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.footerOption {
  @media (min-width: 768px) {
    color: var(--black);
    opacity: 0.6;
    transition: 0.1s ease-in;

    &:hover {
      opacity: 1;
      transition: 0.1s ease-in-out;
    }
  }
}
</style>
