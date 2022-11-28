<template>
  <header class="slider">
    <img src="../../../assets/psp.jpg" alt="slider" />

    <section class="sliderDots">
      <div class="current"></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  img {
    width: #{"min(100%, 90rem)"};
    height: 200px;
  }

  @media (min-width: 768px) {
    img{
      height: 120px;
    }
  }
}

.sliderDots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.8rem;

  margin-top: 1rem;

  div,
  .current {
    border-radius: 5rem;
    background-color: var(--primary-greyDark);
  }

  div {
    width: 1rem;
    height: 1rem;
  }

  .current {
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--primary-claret);
  }

  @media(min-width: 768px){
    display: none;
  }
}
</style>
