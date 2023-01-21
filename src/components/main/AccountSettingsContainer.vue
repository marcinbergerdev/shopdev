<template>
  <ul class="settingsList">
    <li class="settingList__option">
      <BaseButton link to="/shop/account/user" mode="settingOption"
        >Ustawienie konta</BaseButton
      >
    </li>
    <li class="settingList__option">
      <BaseButton link to="/shop/account/orders" mode="settingOption"
        >Zamówienia</BaseButton
      >
    </li>
    <li class="settingList__option">
      <BaseButton link to="/shop/account/returns" mode="settingOption"
        >Zwroty i reklamacje</BaseButton
      >
    </li>
  </ul>

  <router-view v-slot="userSettings">
    <transition name="userSettings" mode="out-in">
      <component :is="userSettings.Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.userSettings-enter-from,
.userSettings-leave-to {
  transform: scale(0.95);
}
.userSettings-enter-active,
.userSettings-leave-active {
  transition: transform 0.15s ease-out;
}
.userSettings-enter-to,
.userSettings-leave-from {
  transform: scale(1);
}

.settingsList {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 4rem;
  padding: 2rem 0;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.7);

  &__option {
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    gap: 0;
  }
}
</style>
