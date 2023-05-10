<template>
  <Teleport to="body">
    <BaseModal
      v-if="!isCorrectPassword"
      :isModal="isModal"
      :isInteraction="false"
      :isHeaderCloseButton="true"
      @close="emit('close')"
    >
      <template #default>
        <div class="modalTitle">
          <h2 v-if="props.isTitle === 'userName'">User name</h2>
          <h2 v-else-if="props.isTitle === 'email'">Change address e-mail</h2>
          <h2 v-else>Change password</h2>
        </div>
      </template>

      <template #content>
        <form @submit.prevent="changeData">
          <div class="userForm" v-if="props.isTitle === 'userName'">
            <input type="text" placeholder="First name" v-model="firstName" />
            <input type="text" placeholder="Last name" v-model="lastName" />
          </div>

          <div class="userForm" v-else-if="props.isTitle === 'email'">
            <input type="text" placeholder="New e-mail" v-model="newEmail" />
          </div>

          <div class="userForm" v-else>
            <div class="userForm__passwordVisibility">
              <input
                type="password"
                placeholder="New Password"
                autocomplete="new-password"
                v-model="newPassword"
              />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Show</BaseButton
              >
            </div>

            <div class="userForm__passwordVisibility">
              <input
                type="password"
                placeholder="Confirm new password"
                autocomplete="confirm-password"
                v-model="confirmPassword"
              />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Show</BaseButton
              >
            </div>
            <p v-if="isError" class="userForm__incorrectPassword">
              Password incorrect or not enough characters min 6!
            </p>
          </div>

          <BaseButton mode="modalFormButton">Save</BaseButton>
        </form>
      </template>
    </BaseModal>

    <BaseModal
      v-else
      :isModal="isCorrectPassword"
      mode="registerAuth"
      :isInteraction="true"
      :isHeaderCloseButton="false"
    >
      <template #default>
        <h2 class="titleModal" :class="authTitle">
          {{ isReturnStatus }}
        </h2>
      </template>

      <template #content>
        <div class="successContentAuth" v-if="!isErrorStatus">
          <Icon class="iconAuth iconAuthSuccess" icon="clarity:success-standard-line" />
        </div>

        <div class="wrongContentAuth" v-else>
          <Icon class="iconAuth iconAuthWrong" icon="fluent:error-circle-20-regular" />
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
  </Teleport>
</template>

<script setup lang="ts">
import { useUserAuthentication } from "../../../stores/auth/userAuthentication";
import { ref, computed } from "vue";

const props = defineProps<{
  isModal: boolean;
  isTitle?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const authTitle = computed<string>(() => {
  return !!isErrorStatus.value ? "wrongAuth" : "successAuth";
});

const continueStatus = computed<string>(() => {
  return !!isErrorStatus.value
    ? "authErrorContinueHandler"
    : "authSuccessContinueHandler";
});

const auth = useUserAuthentication();

const isReturnStatus = ref<string>("");
const isError = ref<boolean>(false);
const isErrorStatus = ref<string>("");
const isCorrectPassword = ref<boolean>(false);

const firstName = ref<string>("");
const lastName = ref<string>("");
const newEmail = ref<string>("");
const newPassword = ref<string>("");
const confirmPassword = ref<string>("");

function changeData() {
  if (props.isTitle === "userName") {
    auth.changeUserName(`${firstName.value} ${lastName.value}`);
    return;
  } else if (props.isTitle === "email") {
    auth.changeUserEmailAddress(newEmail.value);
    return;
  } else {
    changePassword();
  }
}

async function changePassword() {
  if (
    newPassword.value === confirmPassword.value &&
    newPassword.value.length >= 6 &&
    confirmPassword.value.length >= 6
  ) {
    const { modal, error } = await auth.changeUserPassword(newPassword.value);

    if (modal && !error) {
      isReturnStatus.value = "You password is successfully changed!";
    } else {
      isReturnStatus.value = error;
    }

    isCorrectPassword.value = modal;
    isErrorStatus.value = error;
    isError.value = false;
    return;
  }
  isError.value = true;
}

function showPassword(event: any) {
  const showPassword = event.target.parentNode.querySelector("input").type;
  if (showPassword === "text") {
    event.target.parentNode.querySelector("input").type = "password";
    return;
  }
  event.target.parentNode.querySelector("input").type = "text";
}
</script>

<style scoped lang="scss">
.userForm {
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  margin-top: 1.5rem;

  input {
    width: 100%;
    padding: 0.7rem 1rem;
    outline: none;
    border: 1px solid var(--primary-greyDarker);
    border-radius: 7px;
  }

  input::placeholder {
    opacity: 0.5;
  }

  input:focus::placeholder {
    opacity: 1;
  }

  &__passwordVisibility {
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-greyDarker);
    border-radius: 7px;

    input {
      border: 0;
    }
  }

  &__incorrectPassword {
    padding-left: 0.3rem;
    color: var(--secondary-lightRed);
  }
}

.modalTitle {
  flex: 1;
  padding: 1.5rem;
}

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
