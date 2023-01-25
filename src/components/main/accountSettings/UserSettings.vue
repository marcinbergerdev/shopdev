<template>
  <section class="userSettingsContainer">
    <Teleport to="body">
      <BaseModal :isModal="isModal" :isInteraction="false" @close="closeModal">
        <template #default>
          <h2 v-if="showTitle === 'userName'">Nazwa użytkownika</h2>
          <h2 v-else-if="showTitle === 'email'">Zmień adres e-mail</h2>
          <h2 v-else>Zmień hasło</h2>
        </template>

        <template #content>
          <form @submit.prevent="changeData">
            <div class="userForm" v-if="showTitle === 'userName'">
              <input type="text" placeholder="Imię" />
              <input type="text" placeholder="Nazwisko" />
            </div>

            <div class="userForm" v-else-if="showTitle === 'email'">
              <input type="text" placeholder="Nowy e-mail" />
              <div class="userForm__passwordVisibility">
                <input :type="isPasswordVisible" placeholder="Potwiedź hasłem" />
                <BaseButton @click="showPassword(1)" mode="showUserPassword"
                  >Pokaż</BaseButton
                >
              </div>
            </div>

            <div class="userForm" v-else>
              <div class="userForm__passwordVisibility">
                <input :type="isPasswordVisible" placeholder="Obecne hasło" />
                <BaseButton @click="showPassword(2)" mode="showUserPassword"
                  >Pokaż</BaseButton
                >
              </div>

              <div class="userForm__passwordVisibility">
                <input :type="isPasswordVisible" placeholder="Nowe hasło" />
                <BaseButton @click="showPassword(3)" mode="showUserPassword"
                  >Pokaż</BaseButton
                >
              </div>

              <div class="userForm__passwordVisibility">
                <input :type="isPasswordVisible" placeholder="Powtórz nowe hasło" />
                <BaseButton @click="showPassword(4)" mode="showUserPassword"
                  >Pokaż</BaseButton
                >
              </div>
            </div>

            <BaseButton mode="modalFormButton">Zapisz</BaseButton>
          </form>
        </template>
      </BaseModal>
    </Teleport>

    <header class="userDataHeader">
      <h3 class="userDataHeader__title">Dane Konta</h3>
    </header>
    <article class="userDataWrapper">
      <div class="dataBox">
        <h4 class="dataBox__title">Nazwa Użytkownika</h4>

        <div class="dataBox__data">
          <span class="dataBox__data-value">Jan Kowalski</span>
          <BaseButton mode="edit" @click="showModal('userName')">Zmień</BaseButton>
        </div>
      </div>

      <div class="dataBox">
        <h4 class="dataBox__title">Adres e-mail</h4>

        <div class="dataBox__data">
          <span class="dataBox__data-value">jankowalski@op.pl</span>
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
        W momencie gdy usuniesz konto, utracisz wszystkie zapisane zamówienia jak i dane.
        Upewnij się, że chcesz usunąć konto - Niestety nie będziemy mogli go przywrócic.
      </p>
      <BaseButton mode="deleteAccount">Usuń konto</BaseButton>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const isModal = ref(false);
const selectedModal = ref("");
const passwordVisible = ref(true);

const showTitle = computed<string>(() => {
  if (selectedModal.value === "userName") {
    return "userName";
  } else if (selectedModal.value === "email") {
    return "email";
  } else {
    return "password";
  }
});

const isPasswordVisible = computed<string>(() => {
  return passwordVisible.value ? "password" : "text";
});

function showModal(data: string) {
  isModal.value = true;
  selectedModal.value = data;
  document.body.classList.add("scrollHidden");
}

function changeData() {}

function showPassword(password: number) {
  passwordVisible.value = !passwordVisible.value;
  console.log(password);
}

function closeModal() {
  isModal.value = false;
  document.body.classList.remove("scrollHidden");
  selectedModal.value = "";
  passwordVisible.value = true;
}
</script>

<style scoped lang="scss">
.userSettingsContainer {
  height: 55.5rem;
  margin: 20rem 1rem;
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
