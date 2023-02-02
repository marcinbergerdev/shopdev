<template>
  <article :class="display">
    <img loading="lazy" class="orderImage" :src="img" alt="product-foto" />

    <section :class="mode">
      <h3 class="title">Sony PSP z gwarancją + zestaw słuchawkowy</h3>

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
  </article>
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
  width: 6rem;
  height: 6rem;
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
    grid-area: title;
  }

  .amount {
    grid-area: amount;
    width: 6rem;
  }

  .price {
    grid-area: price;
    justify-self: flex-end;
    font-size: 1.3rem;
  }

  .orderIconContainer {
    grid-area: icons;
    justify-self: flex-end;
    align-self: center;
    // set position
  }
}

.deleteProduct {
  .icon {
  }
}

.favorite {
  .icon {
  }
}
</style>
