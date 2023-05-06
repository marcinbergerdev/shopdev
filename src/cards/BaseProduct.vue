<template>
  <li class="productContainer" :class="view" @click="showProductDetails">
    <span class="productContainer__promotion" v-if="promotion">Promocja</span>

    <span class="productImg">
      <img loading="lazy" class="productImg__img" :src="img" alt="product-img" />
    </span>

    <header class="productHeader">
      <section class="productPrise">
        <span class="productPrise__amount"> {{ price?.toFixed(2) }}zł</span>
        <BaseButton mode="favorite" @click="addToFavoriteHandler">
          <Icon
            class="productPrise__favorite"
            :class="favoriteAdded"
            v-if="favorite"
            icon="ph:heart-fill"
          />
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

        <BaseButton
          mode="addToCart"
          :class="cartAdded"
          v-if="cartIcon"
          @click="addToCartHandler"
        >
          <Icon class="cartIcon" icon="carbon:shopping-cart-plus" />
        </BaseButton>
      </section>
    </header>
  </li>

  <Teleport to="body">
    <BaseModal
      mode="productDetails"
      :isModal="isModal"
      :isInteraction="true"
      :isHeaderCloseButton="true"
      @close="closeModal"
    >
      <template #content>
        <div class="productImgDetails">
          <img class="productImgDetails__img" :src="img" alt="selected-product" />
        </div>

        <div class="productDataDetails">
          <h2>{{ title }}</h2>

          <div class="priceBox">
            <span class="priceBox__price">{{ price }}zł</span>

            <select class="priceBox__amount">
              <option value="1">1 szt.</option>
              <option value="2">2 szt.</option>
              <option value="3">3 szt.</option>
              <option value="4">4 szt.</option>
              <option value="5">5 szt.</option>
              <option value="6">6 szt.</option>
              <option value="7">7 szt.</option>
              <option value="8">8 szt.</option>
              <option value="9">9 szt.</option>
              <option value="10">10 szt.</option>
            </select>

            <BaseButton
              mode="desktopAddToFavorite"
              :class="favoriteAdded"
              @click="addToFavoriteHandler"
            >
              <Icon icon="ph:heart-fill" />
            </BaseButton>

            <BaseButton
              mode="desktopAddToCart"
              :class="cartAdded"
              @click="addToCartHandler"
            >
              <Icon class="cartIcon" icon="carbon:shopping-cart-plus" /> Dodaj do koszyka
            </BaseButton>
          </div>

          <div class="deliverStatus">
            <p class="deliverStatus__descriptionTitle">Dostawa</p>
            <p class="deliverStatus__description">Czas dostawy: 3-4 dni robocze</p>
          </div>

          <div class="shippingCostStatus">
            <p class="shippingCostStatus__description">Koszt wysyłki: 4,50zł</p>
          </div>
        </div>

        <div class="productDescription">
          <p class="productDescription__description">{{ description }}</p>
        </div>
      </template>

      <template #interactive>
        <BaseButton
          mode="mobileAddToFavorite"
          :class="favoriteAdded"
          @click="addToFavoriteHandler"
        >
          <Icon icon="ph:heart-fill" />
        </BaseButton>

        <BaseButton mode="mobileAddToCart" @click="addToCartHandler">
          <Icon class="mobileAddToCart__icon" icon="carbon:shopping-cart-plus" /> Dodaj do
          koszyka
        </BaseButton>
      </template>
    </BaseModal>
  </Teleport>
</template>

<script setup lang="ts">
import { useUserFavorite } from "../stores/orders/userFavorite";
import { useUserOrders } from "../stores/orders/userOrders";
import { getAuth } from "firebase/auth";

import { ref, computed } from "vue";

const props = defineProps<{
  view: string;
  id?: number;
  img?: string;
  price?: number;
  category?: string;
  favorite?: boolean;
  title?: string;
  description?: string;
  promotion?: boolean;
  productAvailable?: boolean;
  productInaccessible?: boolean;
  cartIcon?: boolean;
}>();
const { id, img, price, category, title, description } = props;

const emit = defineEmits<{
  (e: "showList"): void;
}>();

const favoriteAdded = computed(() => {
  return { addedToFavorite: isProductAddedFavorite.value };
});
const cartAdded = computed(() => {
  return { addedToCart: isProductAddedCart.value };
});

const favorites = useUserFavorite();
const orders = useUserOrders();
const auth = getAuth();

const isProductAddedFavorite = ref<boolean>(false);
const isProductAddedCart = ref<boolean>(false);
const isModal = ref(false);

const addToFavoriteHandler = async () => {
  const user = auth.currentUser;

  if (user && !isProductAddedFavorite.value) {
    isProductAddedFavorite.value = true;
    await favorites.writeNewPost(
      "/favoriteProduct/",
      user.uid,
      id,
      img,
      category,
      price,
      title,
      description
    );
    await favorites.getUserFavoriteProducts(user.uid);
  }
};

const addToCartHandler = async () => {
  const user = auth.currentUser;

  if (user && !isProductAddedCart.value) {
    isProductAddedCart.value = true;
    await favorites.writeNewPost(
      "/userCart/",
      user.uid,
      id,
      img,
      category,
      price,
      title,
      description
    );
    await orders.getUserCartProducts(user.uid);
  }
};

const showProductDetails = (e: MouseEvent) => {
  const element = (e.target as HTMLElement).localName;

  if (element === "img" || element === "h2" || element === "p") {
    isModal.value = true;
    document.body.classList.add("scrollHidden");
    console.log(id, img, price, category, title, description);
  }
};

function closeModal() {
  isModal.value = false;
  document.body.classList.remove("scrollHidden");
  emit("showList");
}
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

.productImgDetails {
  width: min(70%, 17rem);
  height: 23rem;
  margin: 0 auto;
  grid-area: productImg;

  &__img {
    width: 100%;
    height: 100%;
    overflow: auto;

    @media (min-width: 768px) {
      width: 20rem;
      margin-top: 4rem;
    }
  }
}

.productDataDetails {
  grid-area: productDetails;
  margin-top: 3rem;
  display: grid;
}

.priceBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  &__price {
    grid-area: price;
    font-size: 2rem;
    color: var(--secondary-normalGreen);

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  &__amount {
    grid-area: amount;
    justify-self: flex-start;
    width: 6rem;
  }

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: flex-end;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "price price price"
      "amount favoriteBtn cartBtn";
    gap: 0 1rem;
    margin: 3rem;
    padding: 3rem;
    border: 1px solid #b6b5b5;
    border-radius: 15px;
  }
}

.deliverStatus {
  text-align: right;

  &__descriptionTitle {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &__description {
    color: var(--secondary-normalGreen);
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
    text-align: left;
  }
}

.shippingCostStatus {
  text-align: end;
  @media (min-width: 768px) {
    margin-left: 3rem;
    text-align: left;
  }
}

.productDescription {
  grid-area: description;
  margin-top: 2rem;
  border-top: 1px solid #a1a1a1;
  &__description {
    margin-top: 1rem;
    padding: 2rem 1rem;
    font-size: 1.3rem;
  }
}

.desktopAddToCart {
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
}

.desktopAddToFavorite {
  display: none;

  @media (min-width: 768px) {
    grid-area: favoriteBtn;
    width: 6rem;
    place-items: center;
    background-color: transparent;
    border: 0;
    font-size: 3rem;
    cursor: pointer;
    display: grid;
  }
}
.desktopAddToCart {
  grid-area: cartBtn;
  width: 20rem;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--secondary-superLightGreen);
  background-color: transparent;
  border-radius: 10px;
  color: var(--secondary-superLightGreen);
  font-size: 1.7rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-superLightGreen);
    border-radius: 10px;
    color: var(--white);
    transition: 0.2s ease-in-out;
    cursor: pointer;

    .cartIcon {
      color: var(--white);
      transition: 0.2s ease-in-out;
    }
  }

  &__icon {
    font-size: 2rem;
  }
}

.mobileAddToFavorite,
.mobileAddToCart {
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
}

.mobileAddToFavorite {
  display: grid;
  place-items: center;
  justify-self: center;
  background-color: transparent;
  border: 0;
  font-size: 3rem;
}

.mobileAddToCart {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--secondary-superLightGreen);
  background-color: transparent;
  border-radius: 10px;
  color: var(--secondary-superLightGreen);
  font-size: 1.7rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-superLightGreen);
    border-radius: 10px;
    color: var(--white);
    transition: 0.2s ease-in-out;
  }

  &__icon {
    font-size: 2rem;
  }
}

.addedToFavorite {
  color: #d5446d;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.addedToCart {
  background-color: var(--secondary-superLightGreen);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: var(--white);

  .cartIcon {
    color: var(--white);
  }
}

.searchedProduct {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border-radius: 0;
  box-shadow: none;
  transition: all 0s ease 0s;
  border-bottom: 1px solid var(--primary-greyForm);

  .productImg {
    width: 4rem;
    height: 4rem;
  }

  .productPrise {
    display: none;
  }

  .productHeader {
    &__description {
      display: none;
    }
  }
}
</style>
