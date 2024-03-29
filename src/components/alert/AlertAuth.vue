<template>
  <BaseModal
    :isModal="auth.isModal"
    mode="registerAuth"
    :isInteraction="true"
    :isHeaderCloseButton="false"
  >
    <template #default>
      <h2 class="titleModal successAuth" v-if="!auth.isError">Account created!</h2>
      <h2 class="titleModal wrongAuth" v-else>Something goes wrong!</h2>
    </template>

    <template #content>
      <div class="successContentAuth" v-if="!auth.isError">
        <Icon class="iconAuth iconAuthSuccess" icon="clarity:success-standard-line" />
      </div>

      <div class="wrongContentAuth" v-else>
        <Icon class="iconAuth iconAuthWrong" icon="fluent:error-circle-20-regular" />
        <p class="wrongContentAuth__description">{{ auth.isError }}</p>
      </div>
    </template>

    <template #interactive>
      <BaseButton
        class="interactiveHandler"
        :class="continueStatus"
        @click="auth.userRedirectionHandler()"
        >Continue</BaseButton
      >
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { useUserAuthentication } from "../../stores/auth/userAuthentication";
import { computed } from "vue";

const auth = useUserAuthentication();

const continueStatus = computed<string>(() => {
  return !!auth.isError ? "authErrorContinueHandler" : "authSuccessContinueHandler";
});
</script>

<style scoped lang="scss">
.titleModal {
  flex: 1;
  padding: 2rem 0;
  text-align: center;
  font-weight: 400;
  background-color: var(--secondary-lightGreen);
  color: var(--white);
  border-radius: 45px 45px 0 0;
}

.successAuth {
  background-color: var(--secondary-lightGreen);
}

.wrongAuth {
  background-color: var(--secondary-darkRed);
}

.successContentAuth,
.wrongContentAuth {
  text-align: center;
  border-radius: 45px 45px 0 0;
}

.wrongContentAuth {
  &__description {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
}

.iconAuthSuccess {
  color: var(--secondary-lightGreen);
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
