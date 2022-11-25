<template>
  <header class="orderHeader">
    <h2 class="orderHeader__title">Twoje zamówienie</h2>
    <span class="orderHeader__quantity">(3)</span>
  </header>

  <ul class="orderListContainer">

    <li class="orderProduct">
      <img class="orderProduct__img" src="../../../assets/psp.jpg" alt="foto" />
      <div class="orderData">
        <h3 class="orderData__title">Sony PSP z gwarancją + zestaw słuchawkowy</h3>
        <span class="orderData__quantity">1 szt.</span>
        <span class="orderData__price">79,80zł</span>
      </div>
    </li>

    <li class="orderProduct">
      <img class="orderProduct__img" src="../../../assets/psp.jpg" alt="foto" />
      <div class="orderData">
        <h3 class="orderData__title">Sony PSP z gwarancją + zestaw słuchawkowy</h3>
        <span class="orderData__quantity">1 szt.</span>
        <span class="orderData__price">79,80zł</span>
      </div>
    </li>

    <li class="orderProduct">
      <img class="orderProduct__img" src="../../../assets/psp.jpg" alt="foto" />
      <div class="orderData">
        <h3 class="orderData__title">Sony PSP z gwarancją + zestaw słuchawkowy</h3>
        <span class="orderData__quantity">1 szt.</span>
        <span class="orderData__price">79,80zł</span>
      </div>
    </li>
  </ul>

  <section class="orderSum">
    <div class="orderAmount">
      <h3 class="orderAmount__title">Do zapłaty:</h3>
      <span class="orderAmount__pay">239,40 zł</span>
    </div>

    <BaseButton>Przejdz do koszyka</BaseButton>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "../../../cards/BaseButton.vue";
import { computed } from "vue";
</script>

<style scoped lang="scss">
img {
  width: 50px;
  height: 50px;
}

.orderHeader {
  &__title {
  }

  &__quantity{

  }
}


.orderListContainer{

}


.orderProduct{

 &__img{

 }
}

.orderData{
  &__title{

  }

  &__quantity{

  }

  &__price{

  }
}

.orderSum{

}

.orderAmount{

  &__title{

  }

  &__pay{

  }
}
</style>
