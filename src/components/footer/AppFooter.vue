<template>
  <footer class="footerContainer">
    <div v-for="(info, id) in shopInfos" :key="id">
      <section class="languageBox" v-if="info.isLanguages">
        <h4 class="title">Wybierz język</h4>

        <select class="languageBox__languages" name="language" id="language">
          <option value="eng">English</option>
          <option value="pl">Polski</option>
          <option value="de">Deutsch</option>
        </select>
      </section>

      <header>
        <h4 class="title">{{ info.title }}</h4>
      </header>

      <ul class="footerInfoList">
        <li
          class="footerInfoList__infoData"
          v-for="(option, id) in info.options"
          :key="id"
        >
          <BaseButton link :to="option.path" mode="footerOption">
            {{ option.name }}
          </BaseButton>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const shopInfos = ref([
  {
    title: "Shopex",

    options: [
      {
        name: "O nas",
        path: "/",
      },
      {
        name: "Reklama",
        path: "/",
      },
    ],
  },

  {
    title: "Centrum pomocy",
    options: [
      {
        name: "Dla kupującego",
        path: "/",
      },
      {
        name: "Dla sprzedającego",
        path: "/",
      },
      {
        name: "Polityka zwrotu towaru",
        path: "/",
      },
      {
        name: "Polityka plików 'cockies'",
        path: "/",
      },
      {
        name: "Ustawienia plików 'cockies'",
        path: "/",
      },
    ],
  },
  {
    title: "Społeczność",
    options: [
      {
        name: "Komunikaty",
        path: "/",
      },
      {
        name: "Centrum odpowiedzi",
        path: "/",
      },
      {
        name: "Fora dyskusyjne",
        path: "/",
      },
      {
        name: "Grupy",
        path: "/",
      },
    ],
    isLanguages: true,
  },
]);
</script>

<style scoped lang="scss">
.footerContainer {
  display: flex;
  flex-direction: column;
  padding: 7rem 3rem;
  gap: 5rem 0;
  border-top: 1px solid var(--primary-greyDark);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: inherit 0;
  }
}

.languageBox {
  &__languages {
    margin: 1rem 0 2rem 0;
    padding: 0.5rem 1rem;
  }
}

.title {
  font-size: 2rem;
  font-weight: 400;
  color: var(--primary-claret);
}

.footerInfoList {
  margin-top: 1rem;
  line-height: 2;
  &__infoData {
    font-size: 1.3rem;
  }
}
</style>
