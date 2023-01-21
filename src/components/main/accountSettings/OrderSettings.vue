<template>
  <section class="orderContainer">
    <p class="blankOrderText">
      Aktualnie nie posiadasz zamówień, jeżeliu złożysz zamówienie pojawi sie ono tutaj.
    </p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.orderContainer {
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  padding: 10rem 3rem;
  height: 55.5rem;
}

.blankOrderText {
  width: 50rem;
  text-align: center;
  font-size: 2rem;
}
</style>
