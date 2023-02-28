<template>
  <article class="paginationContainer">
    <ul class="paginationList">
      <li class="paginationList__change">
        <BaseButton mode="paginationButton" @click="switchPageHandler(true)">
          <Icon icon="akar-icons:arrow-left" />
        </BaseButton>
      </li>

      <PaginationPage
        v-for="(page, id) in numberOfButtons"
        :key="id"
        :id="id + 1"
        :page-amount="page"
        :current-page="currentPage"
      ></PaginationPage>

      <li class="paginationList__change">
        <BaseButton mode="paginationButton" @click="switchPageHandler()">
          <Icon icon="akar-icons:arrow-right" />
        </BaseButton>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import PaginationPage from "./PaginationPage.vue";

defineProps<{
  numberOfButtons: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (e: "pageBack"): void;
  (e: "pageNext"): void;
}>();

function switchPageHandler(prev?: boolean) {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (prev) {
    return emit("pageBack");
  }

  emit("pageNext");
}
</script>

<style scoped lang="scss">
.paginationContainer {
  grid-area: pagination;
  justify-self: center;
  width: 100%;
  margin-top: 10rem;
  text-align: center;
}

.paginationList {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0 1.5rem;

  &__change {
    margin: 0 1rem;
    background-color: transparent;
  }
}
</style>
