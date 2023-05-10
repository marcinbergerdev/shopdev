<template>
  <footer class="footerContainer">
    <div v-for="(info, id) in shopInfos" :key="id">
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
        name: "About us",
        path: "/",
      },
      {
        name: "Advertising",
        path: "/",
      },
    ],
  },

  {
    title: "Help center",
    options: [
      {
        name: "For buyers",
        path: "/",
      },
      {
        name: "For sellers",
        path: "/",
      },
      {
        name: "Return policy",
        path: "/",
      },
      {
        name: "Cookies policy",
        path: "/",
      },
      {
        name: "Cookies settings",
        path: "/",
      },
    ],
  },
  {
    title: "Community",
    options: [
      {
        name: "Announcements",
        path: "/",
      },
      {
        name: "Answers center",
        path: "/",
      },
      {
        name: "Discussion forums",
        path: "/",
      },
      {
        name: "Groups",
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
    margin-top: 7rem;
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
