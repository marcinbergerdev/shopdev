<template>
  <article class="adContainer">
    <img loading="lazy" class="adContainer__img" src="../../../../public/assets/psp.jpg" alt="ads" />
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.adContainer {
  margin: 0 auto;
  align-self: flex-start;
  width: min(55rem, 100%);
  height: 27rem;

  &__img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1000px) {
    margin: 3rem 0 0 0.5rem;
  }
}
</style>
