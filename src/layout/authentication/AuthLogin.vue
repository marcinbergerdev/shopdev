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

      <BaseModal
        v-else="!isLoadingSpinner"
        :isModal="isModal"
        :isInteraction="true"
        :isHeaderCloseButton="false"
      >
        <template #default>
          <h2 class="titleModal successAuth" v-if="!isError">Account created!</h2>
          <h2 class="titleModal wrongAuth" v-else>Somthing goes wrong!</h2>
        </template>

        <template #content>
          <div class="successContentAuth" v-if="!isError">
            <Icon class="iconAuth iconAuthSuccess" icon="clarity:success-standard-line" />
          </div>

          <div class="wrongContentAuth" v-else>
            <Icon class="iconAuth iconAuthWrong" icon="fluent:error-circle-20-regular" />

            <p class="wrongContentAuth__description">{{ isError }}</p>
          </div>
        </template>

        <template #interactive>
          <BaseButton
            class="interactiveHandler"
            :class="continueStatus"
            @click="userRedirection"
            >Continue</BaseButton
          >
        </template>
      </BaseModal>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref, computed, onMounted } from "vue";
import router from "../../router";

const continueStatus = computed<string>(() => {
  return !!isError.value ? "authErrorContinueHandler" : "authSuccessContinueHandler";
});

const isModal = ref<boolean>(false);
const isLoadingSpinner = ref<boolean>(false);
const isError = ref<string>("");

const email = ref<string>("");
const password = ref<string>("");

const auth = getAuth();

const userSignIn = async () => {
  isLoadingSpinner.value = true;
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {})
    .catch((error) => {
      isError.value = error.code;
      isModal.value = true;
    });

  isLoadingSpinner.value = false;
  router.push("/shop");
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

.authLoadingSpinner {
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
}

.titleModal {
  flex: 1;
  padding: 2rem 0;
  text-align: center;
  font-weight: 400;
  background-color: var(--secondary-lightGreen);
  color: var(--white);
  border-radius: 5px 5px 0 0;
}

.wrongAuth {
  background-color: var(--secondary-darkRed);
}

.wrongContentAuth {
  text-align: center;
}

.wrongContentAuth {
  &__description {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
}

.iconAuthWrong {
  color: var(--secondary-darkRed);
}

.iconAuth {
  font-size: 7rem;
  text-align: center;
}

.interactiveHandler {
  width: 18rem;
  padding: 1.5rem 0;
  background-color: transparent;
  border-radius: 50px;
}
</style>
