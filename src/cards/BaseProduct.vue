<template>
  <li class="productContainer" :class="view">
    <span class="productContainer__promotion" v-if="promotion">Promocja</span>

    <span class="productImg">
      <img loading="lazy" class="productImg__img" :src="img" alt="product-img" />
    </span>

    <header class="productHeader">
      <section class="productPrise">
        <span class="productPrise__amount"> {{ price?.toFixed(2) }}zł</span>
        <BaseButton mode="favorite">
          <Icon class="productPrise__favorite" v-if="favorite" icon="ph:heart-fill" />
        </BaseButton>
      </section>

      <h2 class="productHeader__title">{{ title }}</h2>

      <p class="productHeader__description">
        {{ description }}
      </p>

      <section class="productStatus">
        <span v-if="productAvailable" class="productStatus__available"
          >Produkt dostępny</span
        >
        <span v-if="productInaccessible" class="productStatus__inaccessible"
          >Brak produktu</span
        >

        <BaseButton mode="addToCart" v-if="cartIcon">
          <Icon class="cartIcon" icon="carbon:shopping-cart-plus" />
        </BaseButton>
      </section>
    </header>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  view: string;
  id?: number;
  category?: string;
  img?: string;
  price?: number;
  favorite?: boolean;
  title?: string;
  description?: string;
  promotion?: boolean;
  productAvailable?: boolean;
  productInaccessible?: boolean;
  cartIcon?: boolean;
}>();
</script>

<style lang="scss" scoped>
.promotionSize {
  width: 18rem;
  height: 33rem;

  .productImg {
    height: 40%;
    &__img {
      padding: 1rem 5rem;
    }
  }

  .productHeader__title,
  .productHeader__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .productHeader__title {
    -webkit-line-clamp: 2;
  }

  .productHeader__description {
    -webkit-line-clamp: 2;
  }

  @media (min-width: 330px) {
    width: 23rem;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
}

.lastSearchingSize {
  width: 18rem;
  height: 30rem;

  .productImg {
    width: 100%;
    height: 50%;
  }
}

.productContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0.2rem;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.26);
  transition: box-shadow 0.2s ease-in-out;

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
    box-shadow: none;

    &:hover {
      box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.26);
      transition: box-shadow 0.2s ease-in-out;
      cursor: pointer;
    }
  }
}

.productImg {
  display: block;
  width: 100%;
  height: 55%;

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem 0.2rem 0 0;
  }
}

.productHeader {
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.5rem 0;
  padding: 1rem 0.8rem;

  &__title {
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
  }
}
.productPrise {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__amount {
    font-size: 2.4rem;
    color: var(--secondary-darkGreen);
  }

  &__favorite {
    font-size: 2rem;
    color: #c3c3c3;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #d5446d;
      transition: 0.2s ease-in-out;
    }
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
  font-size: 1.2rem;

  &__available {
    color: var(--secondary-normalGreen);
  }

  &__inaccessible {
    color: var(--secondary-lightRed);
  }
}

.cartIcon {
  font-size: 2rem;
  color: var(--secondary-superLightGreen);
}

.selectedProduct {
  width: 100%;
  min-height: 40rem;
  padding: 4rem 1rem;
  box-shadow: none;
  border-bottom: 1px solid var(--primary-greyDark);

  .productHeader {
    margin-top: 5rem;
  }

  .productImg {
    width: fit-content;
    height: 20rem;
    align-self: center;
  }
  .productStatus {
    margin-top: 4rem;
    align-items: center;

    .cartIcon {
      font-size: 2.4rem;
    }
  }

  .productPrise__favorite {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    width: 25rem;
    height: 53rem;
    padding: 0;
    border: 0;

    .productImg {
      width: fit-content;
      height: 25rem;
      align-self: center;
      padding: 3rem;
    }

    .productHeader__title,
    .productHeader__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .productHeader__title {
      -webkit-line-clamp: 2;
    }

    .productHeader__description {
      -webkit-line-clamp: 3;
    }
  }
}
</style>
