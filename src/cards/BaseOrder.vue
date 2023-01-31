<template>
  <article :class="display">
    <img loading="lazy" class="orderImage" :src="img" alt="product-foto" />

    <section :class="mode">
      <h3>Sony PSP z gwarancją + zestaw słuchawkowy</h3>

      <select id="myAmounts">
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

      <span>79,80zł</span>

      <BaseButton mode="favorite">
        <Icon class="favorite" icon="ph:heart-fill" />
      </BaseButton>

      <BaseButton mode="deleteProduct">
        <Icon class="orderData__icon" icon="bi:trash" />
      </BaseButton>
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

.favorite {
  font-size: 2rem;
  color: #c3c3c3;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d5446d;
    transition: 0.2s ease-in-out;
  }
}

.orderBoxHover {
}

.orderDataHover {
  h3 {
  }

  select {
  }

  span {
  }
}
</style>
