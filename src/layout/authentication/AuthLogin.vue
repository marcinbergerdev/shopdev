<template>
  <div class="formContainer">
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
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";

function checkUserData() {
  console.log("asds");
}
</script>

<style lang="scss">
.formContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
}
.formTitle {
  font-size: 2rem;
}

.formkit-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.formkit-outer {
  width: 100%;
}

.formkit-input {
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: 1px solid var(--primary-greyForm);
}

.formkit-input:focus-within {
  outline: 2px solid var(--primary-claret);
}

// [data-invalid] .formkit-input:focus-within {
//   border-color: rgb(156, 11, 185);
//   box-shadow: 0 0 0 1px rgb(156, 11, 185);
// }

// [data-complete] .formkit-input {
//   border-color: red;
//   box-shadow: 0 0 0 1px green;
// }
// [data-complete] .formkit-input::after {
//   content: "✅";
//   display: block;
//   padding: 0.5em;
// }

.authFooter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;
  text-align: center;

  &__description {
    font-weight: 700;
  }
}
</style>
