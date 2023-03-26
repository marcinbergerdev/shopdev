<template>
  <div class="formContainer">
    <div class="formBox formLogin">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="userSignIn">
        <h2 class="formTitle">Log in</h2>
        <FormKit
          type="email"
          name="email"
          placeholder="email"
          validation="required|*email"
          v-model="email"
        />
        <FormKit
          type="password"
          name="password"
          placeholder="password"
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
      <BaseLoadingSpinner v-if="isLoadingSpinner"></BaseLoadingSpinner>

      <AlertAuth
        v-else="!isLoadingSpinner"
        :is-modal="isModal"
        :is-error="isError"
        @user-redirection="userRedirection"
      ></AlertAuth>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";
import AlertAuth from "../../components/alert/AlertAuth.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref, onMounted } from "vue";
import router from "../../router";

const isModal = ref<boolean>(false);
const isLoadingSpinner = ref<boolean>(false);
const isError = ref<string>("");

const email = ref<string>("");
const password = ref<string>("");

const auth = getAuth();

const userSignIn = async () => {
  isLoadingSpinner.value = true;
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push("/shop");
    })
    .catch((error) => {
      isError.value = error.code;
      isModal.value = true;
    });

  isLoadingSpinner.value = false;
};

const userRedirection = () => {
  if (!!isError.value) {
    isModal.value = false;
    isError.value = "";
    return;
  }

  router.replace("/shop");
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
