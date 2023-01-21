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
        <h4 class="dataBox__title">Nazwa Użytkownika</h4>

        <div class="dataBox__data">
          <span class="dataBox__data-value">Jan Kowalski</span>
          <BaseButton mode="edit">Zmień</BaseButton>
        </div>
      </div>

      <div class="dataBox">
        <h4 class="dataBox__title">Adres e-mail</h4>

        <div class="dataBox__data">
          <span class="dataBox__data-value">jankowalski@op.pl</span>
          <BaseButton mode="edit">Zmień</BaseButton>
        </div>
      </div>

      <div class="dataBox">
        <h4 class="dataBox__title">Hasło</h4>

        <div class="dataBox__data">
          <span class="dataBox__data-value userPassword">kowalski1234</span>
          <BaseButton mode="edit">Zmień</BaseButton>
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

<script setup lang="ts"></script>

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
