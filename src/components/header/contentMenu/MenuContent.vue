<template>
  <div class="menuContainer">
    <UserContent v-if="menuName === 'account' && !!user.authentication"></UserContent>
    <CartContent v-else-if="menuName === 'cart' && !!user.authentication"></CartContent>
    <AuthRedirect v-else></AuthRedirect>
  </div>
</template>

<script setup lang="ts">
import UserContent from "./userSettings/UserContent.vue";
import CartContent from "./cartContent/CartContent.vue";
import AuthRedirect from "../../../layout/authentication/AuthRedirect.vue";
import { useUserAuthentication } from "../../../stores/auth/userAuthentication";

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
