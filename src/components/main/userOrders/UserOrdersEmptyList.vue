<template>
  <section :class="mode">
    <Icon class="icon" icon="fluent:error-circle-20-regular" />
    <p class="description">{{ description }}</p>

    <BaseButton link to="/shop" mode="filledLink" @click="scrollPage"
      >Przjedz do zakupów</BaseButton
    >
  </section>
</template>

<script setup lang="ts">
defineProps<{
  mode: string;
  description: string;
  isMobileButton?: boolean;
}>();

function scrollPage() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
</script>

<style scoped lang="scss">
.emptyOrderListHoverContainer,
.emptyOrderListDesctopContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    font-size: 5rem;
  }

  .description {
    font-size: 2rem;
  }
}

.emptyOrderListHoverContainer {
  justify-content: center;
  flex: 1;
  gap: 2rem;

  .filledLink {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 4rem 0;
    .icon {
      font-size: 4rem;
    }

    .description {
      font-size: 1.5rem;
    }
    .filledLink {
      margin: 0 auto;
    }
  }
}

.emptyOrderListDesctopContainer {
  gap: 2rem;
  margin: 8rem 0;
  padding-top: 10rem;
  text-align: center;
  border-top: 1px solid var(--primary-greyDark);
}
</style>
