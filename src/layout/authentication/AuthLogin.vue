<template>
  <div class="formContainer">
    <div class="formBox formLogin">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="userSignIn">
        <h2 class="formTitle">Log in</h2>
        <FormKit
          type="email"
          name="email"
          placeholder="test@test.com"
          validation="required|*email"
          v-model="email"
        />
        <FormKit
          type="password"
          name="password"
          placeholder="qwerty"
          validation="required|length:6"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
          v-model="password"
        />
      </FormKit>

      <footer class="authFooter">
        <p class="authFooter__description">or</p>
        <p class="authFooter__description">You don't have an account yet?</p>
        <BaseButton link to="/register" mode="redirectToRegister">Sign up</BaseButton>
      </footer>
    </div>

    <Teleport to="body">
      <BaseLoadingSpinner
        mode="authLoadingSpinner"
        v-if="authUser.isLoadingSpinner"
      ></BaseLoadingSpinner>
      <AlertAuth v-else></AlertAuth>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";
import AlertAuth from "../../components/alert/AlertAuth.vue";
import { ref, onMounted } from "vue";
import { useUserAuthentication } from "../../stores/auth/userAuthentication";

const email = ref<string>("");
const password = ref<string>("");

const authUser = useUserAuthentication();
const userSignIn = () => {
  authUser.userAuth("login", email.value, password.value);
};

onMounted(() => {
  document.body.classList.remove("scrollHidden");
});
</script>

<style lang="scss">
.formLogin {
  justify-content: space-between;
}

.authFooter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(40rem, 100%);
  margin: 2rem auto;
  text-align: center;

  &__description {
    font-weight: 700;
  }
}
</style>
