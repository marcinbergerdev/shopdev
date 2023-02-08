<template>
  <section :class="mode">
    <Icon class="icon" icon="fluent:error-circle-20-regular" />

    <p class="description">Twój koszyk jest pusty!</p>

    <BaseButton link to="/shop" mode="filledLink">Przjedz do zakupów</BaseButton>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  mode: string;
}>();
</script>

<style scoped lang="scss">
.emptyOrderListHoverContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 2rem;
  text-align: center;
  .icon {
    font-size: 5rem;
  }

  .description {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 0;
    .filledLink {
      margin: 0 auto;
    }
  }
}
.emptyOrderListDesctopContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 15rem 0;
  padding-top: 10rem;

  text-align: center;
  border-top: 1px solid var(--primary-greyDark);
  .icon {
    font-size: 5rem;
  }

  .description {
    font-size: 2rem;
  }
}
</style>
