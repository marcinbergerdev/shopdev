<template>
  <article class="menuContainer" v-if="!!user.authentication">
    <UserContent v-if="menuName === 'account'"></UserContent>
    <CartContent v-else></CartContent>
  </article>

  <article class="menuContainer" v-else>
    <!-- jezelie nie jestes zalogowany to przekaż AuthLogin do odpowiednich komponentów i przekaz propsa z klasami -->
  </article>
</template>

<script setup lang="ts">
import UserContent from "./userSettings/UserContent.vue";
import CartContent from "./cartContent/CartContent.vue";
import AuthLogin from "../../../layout/authentication/AuthLogin.vue";
import { useUserAuthentication } from "../../../stores/auth/userAuthentication";

import { ref } from "vue";
defineProps<{
  menuName?: string;
}>();

const user = useUserAuthentication();
</script>

<style scoped lang="scss">
.menuContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 4.3rem);
  @media (min-width: 768px) {
    height: auto;
  }
}
</style>
