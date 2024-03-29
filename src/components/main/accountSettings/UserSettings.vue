<template>
  <section class="userSettingsContainer">
    <UserSettingsForm
      :isModal="isModal"
      :isTitle="selectedModal"
      @close="closeModal"
    ></UserSettingsForm>

    <BaseLoadingSpinner
      mode="userSettingsSpinner"
      v-if="isLoadingSpinner"
    ></BaseLoadingSpinner>
    <div v-else>
      <header class="userDataHeader">
        <h3 class="userDataHeader__title">Account Details</h3>
      </header>
      <article class="userDataWrapper">
        <div class="dataBox">
          <h4 class="dataBox__title">User Name</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value">{{ showName }}</span>
            <BaseButton mode="edit" @click="showModal('userName')">Change</BaseButton>
          </div>
        </div>

        <div class="dataBox">
          <h4 class="dataBox__title">Address e-mail</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value">{{ showEmail }}</span>
            <BaseButton mode="edit" @click="showModal('email')">Change</BaseButton>
          </div>
        </div>

        <div class="dataBox">
          <h4 class="dataBox__title">Password</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value userPassword">*********</span>
            <BaseButton mode="edit" @click="showModal('password')">Change</BaseButton>
          </div>
        </div>
      </article>
      <article class="deleteUserAccount">
        <h5 class="deleteUserAccount__title">Delete Account</h5>
        <p class="deleteUserAccount__description">
          The moment you delete your account, you will lose all saved orders as well as
          data. Make sure you want to delete your account - Unfortunately, we will not be
          able to restore it.
        </p>

        <BaseButton mode="deleteAccount" @click="deleteAccount"
          >Delete Account</BaseButton
        >
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import UserSettingsForm from "./UserSettingsForm.vue";
import { useUserAuthentication } from "../../../stores/auth/userAuthentication";
import { ref, computed } from "vue";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

const authData = useUserAuthentication();

const isModal = ref(false);
const selectedModal = ref("");
const isLoadingSpinner = ref(false);

const showName = computed(() => {
  return !!user?.displayName ? user.displayName : user?.email?.split("@")[0];
});
const showEmail = computed(() => {
  return user?.email;
});

function showModal(data: string) {
  isModal.value = true;
  document.body.classList.add("scrollHidden");
  selectedModal.value = data;
}

function closeModal() {
  isModal.value = false;
  document.body.classList.remove("scrollHidden");
  selectedModal.value = "";
}

function deleteAccount() {
  authData.deleteAccount();
}
</script>

<style scoped lang="scss">
.userSettingsContainer {
  position: relative;
  height: 55.5rem;
  margin: 10rem 1rem 25rem 1rem;
  @media (min-width: 768px) {
    margin: 5rem 1rem 0 10rem;
  }
}

.userDataHeader {
  &__title {
    font-size: 2rem;
  }
}

.userDataWrapper {
  margin-top: 5rem;
}

.dataBox {
  margin: 2rem 0;
  &__title {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--primary-greyForm);
  }

  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 0.7rem;
    width: min(60rem, 100%);
    border: 1px solid var(--primary-greyDarker);
    border-radius: 5px;

    &-value {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
}

.userPassword {
  @media (min-width: 768px) {
  }
}

.deleteUserAccount {
  margin-top: 10rem;
  &__title {
    font-size: 2rem;
  }

  &__description {
    margin: 2rem 0;
    width: min(50rem, 100%);
    font-size: 1.4rem;
  }
}
</style>
