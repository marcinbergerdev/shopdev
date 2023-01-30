<template>
  <article>
    <img loading="lazy" class="orderImage" :src="img" alt="product-foto" />;

    <section>
      <h3>Sony PSP z gwarancją + zestaw słuchawkowy</h3>

      <span>1 szt.</span>

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
</style>
