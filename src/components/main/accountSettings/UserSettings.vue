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
        <h3 class="userDataHeader__title">Dane Konta</h3>
      </header>
      <article class="userDataWrapper">
        <div class="dataBox">
          <h4 class="dataBox__title">Nazwa Użytkownika</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value">{{ userData.userData.username }}</span>
            <BaseButton mode="edit" @click="showModal('userName')">Zmień</BaseButton>
          </div>
        </div>

        <div class="dataBox">
          <h4 class="dataBox__title">Adres e-mail</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value">{{ userData.userData.email }}</span>
            <BaseButton mode="edit" @click="showModal('email')">Zmień</BaseButton>
          </div>
        </div>

        <div class="dataBox">
          <h4 class="dataBox__title">Hasło</h4>

          <div class="dataBox__data">
            <span class="dataBox__data-value userPassword">kowalski1234</span>
            <BaseButton mode="edit" @click="showModal('password')">Zmień</BaseButton>
          </div>
        </div>
      </article>
      <article class="deleteUserAccount">
        <h5 class="deleteUserAccount__title">Usuń konto</h5>
        <p class="deleteUserAccount__description">
          W momencie gdy usuniesz konto, utracisz wszystkie zapisane zamówienia jak i
          dane. Upewnij się, że chcesz usunąć konto - Niestety nie będziemy mogli go
          przywrócic.
        </p>
        <BaseButton mode="deleteAccount">Usuń konto</BaseButton>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import UserSettingsForm from "./UserSettingsForm.vue";
import { useUserData } from "../../../stores/auth/userData";
import { ref, onMounted, onBeforeMount } from "vue";

const userData = useUserData();
const auth = getAuth();
const isModal = ref(false);
const selectedModal = ref("");
const isLoadingSpinner = ref(false);

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

onAuthStateChanged(auth, async (user: User | any) => {
  if (user) {
    isLoadingSpinner.value = true;
    await userData.getUserSettingsData(user.uid);
    isLoadingSpinner.value = false;
    return;
  }
});
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

// .userForm {
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem 0;
//   margin-top: 1.5rem;

//   input {
//     width: 100%;
//     padding: 0.7rem 1rem;
//     outline: none;
//     border: 1px solid var(--primary-greyDarker);
//     border-radius: 7px;
//   }

//   input::placeholder {
//     opacity: 0.5;
//   }

//   input:focus::placeholder {
//     opacity: 1;
//   }

//   &__passwordVisibility {
//     display: flex;
//     align-items: center;
//     border: 1px solid var(--primary-greyDarker);
//     border-radius: 7px;

//     input {
//       border: 0;
//     }
//   }
// }

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
