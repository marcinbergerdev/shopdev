<template>
  <li class="cardContainer">
    <span class="cardContainer__promotion">Promocja</span>

    <img class="cardContainer__productImg" src="../assets/psp.jpg" alt="product-img" />

    <section class="cardPrise">
      <span class="cardPrise__amount">56,99zł</span>
      <Icon class="cardPrise__favorite" icon="bi:heart" />
    </section>

    <header class="cardHeader">
      <h2 class="cardHeader__title">Sony PSP</h2>

      <p class="cardHeader__description">
        Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana nie
        smigana, polecam!
      </p>
    </header>

    <section class="cardStatus">
      <span class="cardStatus__available">Produkt dostępny</span>
      <span class="cardStatus__inaccessible">Brak produktu</span>

      <BaseButton mode="addToCart">
        <Icon icon="carbon:shopping-cart-plus" />
      </BaseButton>
    </section>
  </li>
</template>

<script setup></script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
}

img {
  width: 50px;
  height: 50px;
}

.cardContainer {
  &__promotion {
  }

  &__productImg {
  }
}

.cardPrise {
  &__amount {
  }

  &__favorite {
  }
}

.cardHeader {
  &__title {
  }

  &__descritpion {
  }
}

.cardStatus {
  &__available {
  }


  &__inaccessible {
  }
}
</style>
