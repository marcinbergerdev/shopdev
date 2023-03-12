<template>
  <div class="formContainer">
    <div class="formBox formLogin">
      <AuthHeader></AuthHeader>
      <FormKit type="form" @submit="checkUserData">
        <h2 class="formTitle">Log in</h2>
        <FormKit
          type="email"
          name="email"
          placeholder="email"
          validation="required|*email"
        />
        <FormKit
          type="password"
          name="password"
          placeholder="password"
          validation="required|length:6"
          :validation-messages="{
            length: 'Try to make your password longer min 6!',
          }"
        />
      </FormKit>

      <footer class="authFooter">
        <p class="authFooter__description">or</p>
        <p class="authFooter__description">You don't have an account yet?</p>
        <BaseButton link to="/register" mode="sendToRegister">Sign up</BaseButton>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";

function checkUserData() {
  console.log("asds");
}
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
