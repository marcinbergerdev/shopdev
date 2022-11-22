<template>
    <header class="userData">
      <h2 class="userData__title">Welcome</h2>
      <span class="userData__nick">Bergus</span>
    </header>

    <ul class="userList">

      <li class="userList__option">
        <Icon class="userList__option-icon" icon="cil:user" />
        <span class="userList__option-name" >Twoje konto</span>
      </li>

      <li class="userList__option">
        <Icon class="userList__option-icon" icon="bi:heart" />
        <span class="userList__option-name">Ulubione</span>
      </li>

      <li class="userList__option">
        <Icon class="userList__option-icon" icon="fluent-mdl2:activate-orders" />
        <span class="userList__option-name">Zamówienia</span>
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
.userData{
  padding: 1rem;
  &__title{
    margin-bottom: 0.3rem;
    font-size: 1rem;
    color: var(--primary-greyDark);
  }

  &__nick{
    font-size: 2rem;
  }
}

.userList{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;

  &__option{
    display: flex;
    align-items: center;
    gap: 0 1.5rem;
    width: 70%;
    color: var(--primary-greyDark);
    font-size: 2rem;
  }
}


</style>
