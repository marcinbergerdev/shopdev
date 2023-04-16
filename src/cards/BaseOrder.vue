<template>
  <li :class="display">
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
  img: string;
  category: string;
  title: string;
  description: string;
  amount?: boolean;
  price?: number;
  isCart?: boolean;
  isFavorite?: boolean;
  categoryType: string;
}>();
const { productId, id, img, category, price, title, description, categoryType } = props;

const cartAdded = computed(() => {
  return { addedToCart: isProductAddedCart.value };
});

const favoriteAdded = computed(() => {
  return { addedToFavorite: isProductAddedFavorite.value };
});

const favorites = useUserFavorite();
const orders = useUserOrders();
const auth = getAuth();

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
