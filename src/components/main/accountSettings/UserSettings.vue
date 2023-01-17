<template>
  <section class="userSettingsContainer">
    <Teleport to="body">
      <BaseModal>
        <template #default>
          <h2>Nazwa użytkownika</h2>
          <BaseButton><Icon icon="bi:x-lg" /></BaseButton>
        </template>

        <template #content>
          <form>
            <input type="text" placeholder="Imię" />
            <input type="text" placeholder="Nazwisko" />
          </form>
        </template>

        <template #interactive>
          <BaseButton>Zapisz</BaseButton>
        </template>
      </BaseModal>
    </Teleport>

    <header class="userDataHeader">
      <h3 class="userDataHeader__title">Dane Konta</h3>
    </header>

    <article class="userDataWrapper">
      <div class="dataBox">
        <span class="dataBox__title">Nazwa Użytkownika</span>

        <div class="dataBox__data">
          <span class="dataBox__data-value userName">Jan Kowalski</span>
          <BaseButton>Zmień</BaseButton>
        </div>
      </div>

      <div class="dataBox">
        <span class="dataBox__title">Adres e-mail</span>

        <div class="dataBox__data">
          <span class="dataBox__data-value userEmail">jankowalski@op.pl</span>
          <BaseButton>Zmień</BaseButton>
        </div>
      </div>

      <div class="dataBox">
        <span class="dataBox__title">Hasło</span>

        <div class="dataBox__data">
          <span class="dataBox__data-value userPassword">kowalski1234</span>
          <BaseButton>Zmień</BaseButton>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.userSettingsContainer {
}

.userDataHeader {
}

.userDataWrapper {
}

.dataBox {
  &__title {
  }

  &__data {
    &-userName {
    }
  }
}

.userName {
}

.userEmail {
}
.userPassword {
  // -webkit-text-security: disc;
  // -moz-text-security: disc;
  // text-security: disc;
}
</style>
