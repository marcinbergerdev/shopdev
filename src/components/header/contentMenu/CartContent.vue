<template>
  <section>
    <header>
      <h2>Twoje zamówienie</h2>
      <span>(3)</span>
    </header>

    <ul>
      <li>
        <img src="../../../assets/psp.jpg" alt="foto" />
        <div>
          <h3>Sony PSP z gwarancją + zestaw słuchawkowy</h3>
          <span>1 szt.</span>
          <span>79,80zł</span>
        </div>
      </li>
      <li>
        <img src="../../../assets/psp.jpg" alt="foto" />
        <div>
          <h3>Sony PSP z gwarancją + zestaw słuchawkowy</h3>
          <span>1 szt.</span>
          <span>79,80zł</span>
        </div>
      </li>
      <li>
        <img src="../../../assets/psp.jpg" alt="foto" />
        <div>
          <h3>Sony PSP z gwarancją + zestaw słuchawkowy</h3>
          <span>1 szt.</span>
          <span>79,80zł</span>
        </div>
      </li>
    </ul>

    <div>
      <div>
        <h3>Do zapłaty:</h3>
        <span>239,40 zł</span>
      </div>

      <BaseButton>Przejdz do koszyka</BaseButton>
    </div>

  </section>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { computed } from "vue";
</script>

<style scoped lang="scss">
img{
  width: 50px;
  height: 50px;
}

</style>
