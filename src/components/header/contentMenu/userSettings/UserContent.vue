<template>
  <header class="userData">
    <h2 class="userData__title">Welcome</h2>
    <span class="userData__nick">{{ showName }}</span>
  </header>

  <ul class="userList">
    <li
      class="userList__option"
      v-for="(option, id) in userOption"
      :key="id"
      @click="optionCloseMenu"
    >
      <BaseButton link :to="option.path">
        <Icon class="icon" :icon="option.icon" />
        <span class="name">{{ option.title }}</span>
      </BaseButton>
    </li>
  </ul>

  <BaseButton mode="empty" @click="userLogout">Logout</BaseButton>
</template>

<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";
import router from "../../../../router";
import { ref, computed, inject } from "vue";

const { closeMenu } = inject("closeMenu") as any;

const userOption = ref([
  {
    path: "/shop/account/user",
    icon: "cil:user",
    title: "Your account",
  },
  {
    path: "/shop/account/orders",
    icon: "fluent-mdl2:activate-orders",
    title: "Orders",
  },
  {
    path: "/shop/account/returns",
    icon: "tabler:truck-return",
    title: "Returns & Complaints",
  },
]);

const auth = getAuth();
const user = auth.currentUser;

const showName = computed(() => {
  return !!user?.displayName ? user.displayName : user?.email?.split("@")[0];
});

function userLogout() {
  signOut(auth)
    .then(() => {
      userLoggedOut();
    })
    .catch((error) => {
      console.log(error);
    });
}

function userLoggedOut() {
  window.scrollTo({ top: 0, left: 0 });
  router.replace("/shop");
  optionCloseMenu();
  location.reload();
}

function optionCloseMenu() {
  closeMenu();
  document.body.classList.remove("scrollHidden");
}
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
