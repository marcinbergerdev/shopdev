<template>
  <div>
    <AuthHeader></AuthHeader>

    <FormKit type="form" @submit="registerUserData">
      <h2>Sign up</h2>
      <FormKit type="email" placeholder="e-mail address" validation="email" />
      <FormKit
        type="password"
        name="password"
        placeholder="password"
        validation="required"
        validation-visibility="live"
      />

      <FormKit
        type="password"
        name="password_confirm"
        placeholder="confirm password"
        validation="required|confirm"
        validation-visibility="live"
        validation-label="Confirmation"
      ></FormKit>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import AuthHeader from "./AuthHeader.vue";

function registerUserData() {
  console.log("asds");
}
</script>

<style scoped lang="scss"></style>
