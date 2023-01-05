<template>
  <li class="productContainer" :class="view">
    <span class="productContainer__promotion">Promocja</span>

    <span class="productImg">
      <img class="productImg__productImg" src="../assets/zdj2.jpg" alt="product-img" />
    </span>

    <header class="productHeader">
      <section class="productPrise">
        <span class="productPrise__amount">56,99zł</span>
        <Icon class="productPrise__favorite" icon="bi:heart" />
      </section>

      <h2 class="productHeader__title">Sony PSP</h2>

      <p class="productHeader__description">
        Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka tanio, nie używana nie
        smigana, polecam!
      </p>

      <section class="productStatus">
        <span v-if="true" class="productStatus__available">Produkt dostępny</span>
        <span v-if="false" class="productStatus__inaccessible">Brak produktu</span>

        <BaseButton mode="addToCart">
          <Icon class="cartIcon" icon="carbon:shopping-cart-plus" />
        </BaseButton>
      </section>
    </header>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  view: string;
}>();
</script>

<style lang="scss" scoped>
.singleView {
  width: 18rem;

  height: 33rem;

  @media (min-width: 330px) {
    width: 23rem;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
}

.dualView {
}

.productContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 5rem;
  border-radius: 0.2rem;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.26);

  &__promotion {
    position: absolute;
    top: -5px;
    left: -7px;
    padding: 0.6rem;
    color: var(--white);
    background-color: var(--secondary-normalGreen);
  }

  @media (min-width: 768px) {
    margin: 0;
  }
}

.productImg {
  display: block;
  width: 100%;
  height: 55%;

  &__productImg {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem 0.2rem 0 0;
  }
}

.productHeader {
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  padding: 1rem 0.8rem;

  &__title {
    margin-top: 0.5rem;
  }

  &__descritpion {
  }

  @media (min-width: 768px) {
  }
}
.productPrise {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5rem;
  &__amount {
    font-size: 2.4rem;
    color: var(--secondary-darkGreen);
  }

  &__favorite {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
  }
}

.productStatus {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1rem;
  font-weight: 500;

  &__available {
    color: var(--secondary-normalGreen);
  }

  &__inaccessible {
    color: var(--secondary-lightRed);
  }

  @media (min-width: 768px) {
  }
}

.cartIcon {
  font-size: 2rem;
  color: var(--secondary-superLightGreen);
}
</style>
