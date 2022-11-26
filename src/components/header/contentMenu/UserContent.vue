<template>
  <header class="userData">
    <h2 class="userData__title">Welcome</h2>
    <span class="userData__nick">Bergus</span>
  </header>

  <ul class="userList">
    <li class="userList__option">
      <BaseButton link to="#" mode="dectopOption">
        <Icon class="icon" icon="cil:user" />
        <span class="name">Twoje konto</span>
      </BaseButton>
    </li>

    <li class="userList__option">
      <BaseButton link to="#">
        <Icon class="icon" icon="bi:heart" />
        <span class="name">Ulubione</span>
      </BaseButton>
    </li>

    <li class="userList__option">
      <BaseButton link to="#">
        <Icon class="icon" icon="fluent-mdl2:activate-orders" />
        <span class="name">Zamówienia</span>
      </BaseButton>
    </li>
  </ul>

  <BaseButton mode="empty">Wyloguj</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
</script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  gap: 0 1.5rem;

  .icon,
  span {
    color: var(--primary-greyDark);
  }

  @media (min-width: 768px) {
    transition: 0.2s ease-in-out;
    &:hover {
      gap: 0 1rem;
      transition: 0.2s ease-in-out;
    }
  }
}

.userData {
  padding: 1rem;

  &__title {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    color: var(--primary-greyDark);
  }

  &__nick {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    text-align: left;

    &__title,
    &__nick {
      font-size: 1rem;
    }
  }
}

.userList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;
  flex: 1;
  padding: 3rem 0;
  overflow: auto;

  &__option {
    width: 70%;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 0 2rem 0;
    gap: 2rem 0;
  }
}
</style>
