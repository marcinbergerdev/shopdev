<template>
  <div class="menuContainer">
    <UserContent v-if="menuName === 'account' && !!userId && !!tokenId"></UserContent>
    <CartContent v-else-if="menuName === 'cart' && !!userId && !!tokenId"></CartContent>
    <AuthRedirect v-else></AuthRedirect>
  </div>
</template>

<script setup lang="ts">
import UserContent from "./userSettings/UserContent.vue";
import CartContent from "./cartContent/CartContent.vue";
import AuthRedirect from "../../../layout/authentication/AuthRedirect.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

defineProps<{
  menuName?: string;
}>();

const userId = ref(null);
const tokenId = ref(null);

const auth = getAuth();
onAuthStateChanged(auth, (user: any) => {
  if (user) {
    userId.value = user.accessToken;
    tokenId.value = user.uid;
  } else {
  }
});
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
