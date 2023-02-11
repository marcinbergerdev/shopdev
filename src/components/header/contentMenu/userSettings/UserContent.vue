<template>
  <header class="userData">
    <h2 class="userData__title">Welcome</h2>
    <span class="userData__nick">Bergus</span>
  </header>

  <ul class="userList">
    <li
      class="userList__option"
      v-for="(option, id) in userOption"
      :key="id"
      @click="closeMenu"
    >
      <BaseButton link :to="option.path">
        <Icon class="icon" :icon="option.icon" />
        <span class="name">{{ option.title }}</span>
      </BaseButton>
    </li>
  </ul>

  <BaseButton mode="empty">Wyloguj</BaseButton>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const { closeMenu } = inject("closeMenu") as any;

const userOption = ref([
  {
    path: "/shop/account/user",
    icon: "cil:user",
    title: "Twoje konto",
  },
  {
    path: "/shop/account/orders",
    icon: "fluent-mdl2:activate-orders",
    title: "Zamówienia",
  },
  {
    path: "/shop/account/returns",
    icon: "tabler:truck-return",
    title: "Zwroty i Reklamacje",
  },
]);
</script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  gap: 0 1.5rem;

  .icon,
  span {
    @media (min-width: 768px) {
      color: var(--primary-greyDarker);
    }
  }

  @media (min-width: 768px) {
    transition: 0.2s ease-in-out;
    opacity: 0.7;
    &:hover {
      gap: 0 1rem;
      opacity: 1;
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
