<template>
  <div class="formContainer">
    <div class="formBox formRegister">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="userRegister">
        <h2 class="formTitle">Sign up</h2>

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
          sd
          placeholder="password"
          validation="required|length:6"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
          v-model="password"
        /><FormKit
          type="password"
          name="password_confirm"
          placeholder="confirm password"
          validation="required|confirm"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";
import { ref, onMounted } from "vue";
import router from "../../router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref<string>("");
const password = ref<string>("");

const auth = getAuth();

const userRegister = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      router.replace("/shop");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

onMounted(() => {
  document.body.classList.remove("scrollHidden");
});
</script>

<style lang="scss">
.formRegister {
  .formkit-form {
    flex: 1;
  }
}
</style>
