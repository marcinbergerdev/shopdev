<template>
  <article v-if="true">
    <ul>
      <li>
        <span>Promocja</span>
        <img src="../../../assets/psp.jpg" alt="product-img" />
        <div>
          <span></span>
          <Icon icon="bi:heart" />
        </div>
        <p>
          Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana nie
          smigana, polecam!
        </p>
      </li>
      <li>
        <span>Promocja</span>
        <img src="../../../assets/psp.jpg" alt="product-img" />
        <div>
          <span></span>
          <Icon icon="bi:heart" />
        </div>
        <p>
          Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana nie
          smigana, polecam!
        </p>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
article {
  background-color: bisque;

  @media (min-width: 768px) {
    width: 65%;
  }
}

img {
  width: 50px;
  height: 50px;
}
</style>
