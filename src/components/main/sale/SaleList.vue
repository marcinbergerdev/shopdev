<template>
  <article v-if="true">
    <ul>

    <BaseProduct view="singleView"></BaseProduct>
    <BaseProduct view="singleView"></BaseProduct>
    <BaseProduct view="singleView"></BaseProduct>
    <BaseProduct view="singleView"></BaseProduct>
    <BaseProduct view="singleView"></BaseProduct>

      <!-- <li>
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
        <img src="../../../assets/zdj1.jpg" alt="product-img" />
        <div>
          <span></span>
          <Icon icon="bi:heart" />
        </div>
        <p>
          Chłełełełe butelka na wodę 550 ml Sport szklana butelka na wodę
        </p>
      </li>

      <li>
        <span>Promocja</span>
        <img src="../../../assets/zdj2.jpg" alt="product-img" />
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
        <img src="../../../assets/zdj3.jpg" alt="product-img" />
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
        <img src="../../../assets/zdj4.jpg" alt="product-img" />
        <div>
          <span></span>
          <Icon icon="bi:heart" />
        </div>
        <p>
          Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana nie
          smigana, polecam!
        </p>
      </li> -->

    </ul>

    <!-- <button> Zobacz Wiecej</button> -->

  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
article {
  display: grid;
  place-items: flex-start;
  // background-color: rgb(231, 182, 182);


  @media (min-width: 768px) {
    width: 80%;
  }
}

ul{


}


img {
  width: 50px;
  height: 50px;
}
</style>
