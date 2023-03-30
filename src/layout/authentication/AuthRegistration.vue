<template>
  <div class="formContainer">
    <div class="formBox formRegister">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="userRegister">
        <h2 class="formTitle">Sign up</h2>

        <FormKit
          type="email"
          name="email"
          placeholder="admin@admin.com"
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
        /><FormKit
          type="password"
          name="password_confirm"
          placeholder="qwerty"
          validation="required|confirm"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
        />
      </FormKit>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, onMounted } from "vue";
import router from "../../router";

const isModal = ref<boolean>(false);
const isLoadingSpinner = ref<boolean>(false);
const isError = ref<string>("");

const email = ref<string>("");
const password = ref<string>("");

const auth = getAuth();

const userRegister = async () => {
  isLoadingSpinner.value = true;
  await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      isModal.value = true;
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

<style scoped lang="scss">
.formRegister {
  .formkit-form {
    flex: 1;
  }
}
</style>
