<template>
  <Teleport to="body">
    <BaseModal :isModal="isModal" :isInteraction="false" @close="emit('close')">
      <template #default>
        <h2 v-if="isTitle === 'userName'">Nazwa użytkownika</h2>
        <h2 v-else-if="isTitle === 'email'">Zmień adres e-mail</h2>
        <h2 v-else>Zmień hasło</h2>
      </template>

      <template #content>
        <form @submit.prevent="changeData">
          <div class="userForm" v-if="isTitle === 'userName'">
            <input type="text" placeholder="Imię" />
            <input type="text" placeholder="Nazwisko" />
          </div>

          <div class="userForm" v-else-if="isTitle === 'email'">
            <input type="text" placeholder="Nowy e-mail" />
            <div class="userForm__passwordVisibility">
              <input type="password" placeholder="Potwiedź hasłem" />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Pokaż</BaseButton
              >
            </div>
          </div>

          <div class="userForm" v-else>
            <div class="userForm__passwordVisibility">
              <input type="password" placeholder="Obecne hasło" />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Pokaż</BaseButton
              >
            </div>

            <div class="userForm__passwordVisibility">
              <input type="password" placeholder="Nowe hasło" />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Pokaż</BaseButton
              >
            </div>

            <div class="userForm__passwordVisibility">
              <input type="password" placeholder="Powtórz nowe hasło" />
              <BaseButton mode="showUserPassword" @click.prevent="showPassword"
                >Pokaż</BaseButton
              >
            </div>
          </div>

          <BaseButton mode="modalFormButton">Zapisz</BaseButton>
        </form>
      </template>
    </BaseModal>
  </Teleport>
</template>

<script setup lang="ts">
// import { ref, computed } from "vue";

defineProps<{
  isModal: boolean;
  isTitle?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

function changeData() {
  console.log("asdas");
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
}
</style>
