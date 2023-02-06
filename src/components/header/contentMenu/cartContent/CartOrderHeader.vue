<template>
  <header :class="mode">
    <h2 class="title">Twoje zamówienie</h2>
    <span class="amount">(3)</span>

    <BaseButton link to="/shop/order1" :class="editButtonStyle" v-if="isEditButton"
      >Edytuj</BaseButton
    >
    <BaseButton class="deleteAll" mode="deleteProduct" v-if="isDeleteButton">
      <Icon class="orderData__icon" icon="bi:trash" />
      <span>wyczyść koszyk</span>
    </BaseButton>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  mode: string;
  editButtonStyle?: string;
  isEditButton: boolean;
  isDeleteButton: boolean;
}>();
</script>
<style scoped lang="scss">
.orderHeaderHover {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 0 1rem;

  .title {
    font-size: 1.3rem;
  }

  .amount {
    font-size: 1.4rem;
    color: var(--primary-greyForm);
  }
}

.orderHeaderDesctop {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem 1rem;
  margin-top: 6rem;
  padding: 1rem;

  .title {
    flex: 19rem;
    font-size: 2rem;
    font-weight: 400;

    @media (min-width: 320px) {
      flex: 21rem;
      font-size: 2.3rem;
    }

    @media (min-width: 768px) {
      flex: 30rem;
      font-size: 3rem;
    }
  }

  .amount {
    flex: calc(100% - 20rem - 1rem); // (flex 1 - titleWidth - flex gap)
    font-size: 1.4rem;
    color: var(--primary-greyForm);

    @media (min-width: 320px) {
      flex: calc(100% - 21rem - 1rem); // (flex 1 - titleWidth - flex gap)
    }

    @media (min-width: 768px) {
      flex: calc(100% - 30rem - 1rem); // (flex 1 - titleWidth - flex gap)
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.deleteAll {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid var(--secondary-lightRed);
  border-radius: 5px;
}
</style>
