<template>
  <li :class="display" @click="showProductDetails">
    <img loading="lazy" class="orderImage" :src="img" alt="product-foto" />

    <section :class="mode">
      <h3 class="title">{{ title }}</h3>

      <select id="myAmounts" class="amount">
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

      <span class="price">79,80zł</span>

      <div class="orderIconContainer">
        <BaseButton
          mode="addToCart"
          v-if="isCart"
          :class="cartAdded"
          @click="addToCartHandler"
        >
          <Icon class="cartIcon" icon="carbon:shopping-cart-plus" />
        </BaseButton>

        <BaseButton
          mode="favorite"
          v-if="isFavorite"
          :class="favoriteAdded"
          @click="addToFavoriteHandler"
        >
          <Icon class="icon" icon="ph:heart-fill" />
        </BaseButton>

        <BaseButton mode="deleteProduct" @click="removeProduct">
          <Icon class="icon" icon="bi:trash" />
        </BaseButton>
      </div>
    </section>
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
import { User, getAuth } from "firebase/auth";

import { ref, computed } from "vue";

const props = defineProps<{
  display: string;
  mode: string;
  productId: string;
  id: number;
  name?: string;
  img: string;
  category: string;
  title: string;
  description: string;
  amount?: boolean;
  price?: number;
  deleteButton?: boolean;
  isCart?: boolean;
  isFavorite?: boolean;
  categoryType: string;
}>();
const { productId, id, img, category, price, title, description, categoryType } = props;

const emit = defineEmits<{
  (e: "showList"): void;
}>();

const cartAdded = computed(() => {
  return { addedToCart: isProductAddedCart.value };
});

const favoriteAdded = computed(() => {
  return { addedToFavorite: isProductAddedFavorite.value };
});

const favorites = useUserFavorite();
const orders = useUserOrders();
const auth = getAuth();

const isModal = ref(false);
const isProductAddedCart = ref<boolean>(false);
const isProductAddedFavorite = ref<boolean>(false);

function removeProduct() {
  const user: User | null = auth.currentUser;

  if (user) {
    if (categoryType === "favoriteProduct") {
      favorites.removeProductFromFavoriteList(user.uid, productId);
      return;
    }
    orders.removeProductFromOrdersList(user.uid, productId);
  }
}

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

  if (element === "img" || element === "h3" || element === "section") {
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

<style scoped lang="scss">
.orderImage {
  width: 5rem;
  height: 5rem;

  @media (min-width: 300px) {
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
}

.title {
  grid-area: title;
}
.amount {
  grid: amount;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}

.price {
  grid-area: price;
}

.orderIconContainer {
  grid-area: icons;
}

.orderWrapperHover {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--primary-claret);
}

.orderDataHover {
  display: grid;
  flex-direction: column;
  align-items: center;
  grid-template-areas:
    "title title title"
    "amount price icons";
  flex: 1;
  gap: 1.5rem 0;

  .title {
    text-align: start;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .amount {
    width: 4.5rem;

    @media (min-width: 300px) {
      width: 6rem;
    }
  }

  .price {
    justify-self: center;
    font-size: 1.3rem;

    @media (min-width: 300px) {
      justify-self: flex-end;
    }
  }

  .orderIconContainer {
    justify-self: flex-end;
    display: flex;
    gap: 0.5rem;
  }
}

.orderItemDesctop {
  display: flex;
  gap: 0.5rem;
  padding: 4rem 0;
  border-top: 1px solid var(--primary-greyDark);

  @media (min-width: 768px) {
    gap: 0 2rem;
    cursor: pointer;
  }
}

.orderProductDesctop {
  width: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  grid-template-areas:
    "title amount price"
    "title . icons";
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 35% 6rem 6rem;

  .title {
    font-size: 0.9rem;
    width: min(100%, 25rem);
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 400px) {
      font-size: 1.1rem;
    }
  }

  .price {
    font-size: 1.3rem;
  }

  .orderIconContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 768px) {
      width: 6rem;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0 3rem;
  }
}

.productDetails {
  top: 5%;
  display: flex;
  flex-direction: column;
  width: min(95%, 100rem);
  height: 75vh !important;
  overflow: auto;

  @media (min-width: 768px) {
    height: auto;
  }

  .modalHeader {
    justify-content: flex-end;
    padding: 1rem 0;
  }

  .modalContent {
    flex: 1;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "productImg productDetails"
        "description description";
    }
  }

  .modalInteraction {
    display: flex;
    @media (min-width: 768px) {
      display: none;
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

.addedToCart {
  background-color: var(--secondary-superLightGreen);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: var(--white);

  .cartIcon {
    color: var(--white);
  }
}

.deleteProduct,
.favorite {
  display: grid;
  place-items: center;
  font-size: 2.4rem;
}

.cartIcon {
  color: var(--secondary-superLightGreen);
}

.addedToCart {
  background-color: var(--secondary-superLightGreen);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  .cartIcon {
    color: var(--white);
  }
}

.addedToFavorite {
  .icon {
    color: #d5446d;
  }
}
</style>
