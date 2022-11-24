<template>
  <header class="userData">
    <h2 class="userData__title">Welcome</h2>
    <span class="userData__nick">Bergus</span>
  </header>

  <ul class="userList">
    <li class="userList__option">
      <BaseButton link to="/test">
        <Icon class="icon" icon="cil:user" />
        <span class="name">Twoje konto</span>
      </BaseButton>
    </li>

    <li class="userList__option">
      <BaseButton link to="/test">
        <Icon class="icon" icon="bi:heart" />
        <span class="name">Ulubione</span>
      </BaseButton>
    </li>

    <li class="userList__option">
      <BaseButton link to="/test">
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
}

.userList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;
  padding: 2rem 0;

  &__option {
    width: 70%;
    font-size: 2rem;
  }
}
</style>
