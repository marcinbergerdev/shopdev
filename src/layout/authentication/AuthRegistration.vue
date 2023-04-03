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
      <BaseLoadingSpinner
        mode="authLoadingSpinner"
        v-if="register.isLoadingSpinner"
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

const register = useUserAuthentication();
const userRegister = () => {
  register.userAuth("register", email.value, password.value);
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
