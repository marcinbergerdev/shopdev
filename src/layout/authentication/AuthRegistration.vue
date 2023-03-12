<template>
  <div class="formContainer">
    <div class="formBox formRegister">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="registerUserData">
        <h2 class="formTitle">Sign up</h2>

        <FormKit type="email" placeholder="e-mail address" validation="email" />

        <FormKit
          type="password"
          name="password"
          placeholder="password"
          validation="required|length:6"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
        /><FormKit
          type="password"
          name="confirm password"
          placeholder="confirm password"
          validation="required|length:6"
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

function registerUserData() {
  console.log("asds");
}
</script>

<style lang="scss">
.formRegister {
  .formkit-form {
    flex: 1;
  }
}
</style>
