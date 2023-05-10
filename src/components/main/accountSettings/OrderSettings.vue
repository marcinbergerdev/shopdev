<template>
  <section class="orderContainer">
    <p class="blankOrderText">
      Currently you do not have orders, if you place an order it will appear here.
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
