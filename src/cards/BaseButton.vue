<template>
  <RouterLink
    class="link"
    :class="[mode, isMobileDisabled]"
    :to="isRouterLink"
    v-if="link"
  >
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
  isMobileDisabled?: string;
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
  display: block;
  padding: 0.7rem 1.5rem;
  color: var(--white);
  font-size: 1.3rem;

  background-color: var(--primary-claretDark);
  border-radius: 50px;
  border: 0;

  &:hover {
    background-color: var(--primary-claret);
    color: var(--white);
    cursor: pointer;
    transition: 0.15s ease-in-out;
  }
  &.router-link-active {
    color: var(--white);
  }
}

.filters {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  background-color: transparent;
  border: 1px solid var(--primary-greyDark);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.disabledLinkOnMobile {
  pointer-events: none;

  @media (min-width: 768px) {
    pointer-events: auto;
  }
}

.filledLink {
  width: min(80%, 25rem);
  margin-top: 10rem;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  color: var(--primary-claret) !important;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid var(--primary-claret);

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--primary-claret);
      color: var(--white) !important;
      cursor: pointer;
      transition: 0.15s ease-in-out;
    }
  }
}

.clear {
  background-color: transparent;
  border: 0;
  padding: 1rem;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.border {
  width: 8rem;
  padding: 0 1rem;
  background-color: transparent;
  border: 1px solid var(--primary-claret);
  border-radius: 5rem;
  color: var(--primary-claret);

  &:hover {
    color: var(--white);
    background-color: var(--primary-claret);
    transition: 0.15s ease-in-out;
    cursor: pointer;
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

.closeModal {
  display: grid;
  place-items: center;
  padding: 0.3rem;
  font-size: 2rem;
  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 50px;
  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.modalFormButton {
  width: 100%;
  margin-top: 3rem;
  padding: 0.8rem 0;
  background-color: transparent;
  background-color: var(--primary-blue);
  color: var(--white);
  border: 0;
  border-radius: 7px;
  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.showUserPassword {
  background-color: transparent;
  margin-right: 1rem;
  color: var(--primary-blue);
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.deleteAccount {
  padding: 1rem;
  border: 1px solid var(--secondary-lightRed);
  border-radius: 0.8rem;
}

.edit {
  color: var(--primary-blue);
  border: 0;
  background-color: transparent;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.navElement {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
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

  @media (min-width: 768px) {
    opacity: 0.8;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transition: 0.2s ease-in-out;
    }
  }
}

.productsEditHover {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-size: 1.3rem;
  color: var(--primary-blue);
}

.productsEditDesctop {
  font-size: 1.3rem;
  color: var(--primary-blue);
}

.favorite {
  color: #c3c3c3;
  background-color: transparent;
  border: 0;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d5446d;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
}

.deleteProduct {
  color: var(--secondary-lightRed);
  background-color: transparent;
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--white);
      background-color: var(--secondary-lightRed);
      transition: 0.2s ease-in-out;
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
