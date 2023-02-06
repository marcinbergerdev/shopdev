<template>
  <li :class="display">
    <img loading="lazy" class="orderImage" :src="img" alt="product-foto" />

    <section :class="mode">
      <h3 class="title">{{ name }}</h3>

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
        <BaseButton mode="favorite">
          <Icon class="icon" icon="ph:heart-fill" />
        </BaseButton>

        <BaseButton mode="deleteProduct">
          <Icon class="icon" icon="bi:trash" />
        </BaseButton>
      </div>
    </section>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  display: string;
  mode: string;
  id: number;
  img: string;
  name: string;
  amount: boolean;
  price: number;
  deleteButton: boolean;
}>();
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
  align-items: center;
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
  gap: 2rem 0;

  .title {
    text-align: start;
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
</style>
