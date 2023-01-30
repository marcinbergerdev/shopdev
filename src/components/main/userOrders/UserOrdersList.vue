<template>
  <section>
    <ul>
      <li>
        <BaseOrder
          v-for="order in orders.userOrders"
          :key="order.id"
          :id="order.id"
          :img="order.img"
          :name="order.name"
          :amount="order.amount"
          :price="order.price"
          :delete-button="order.deleteButton"
        ></BaseOrder>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserOrders } from "../../../stores/navigation/userOrders";
const orders = useUserOrders();
</script>

<style scoped lang="scss"></style>
