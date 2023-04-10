import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Orders from "../../../types/userOrders";

export const useUserOrders = defineStore("userOrders", () => {
   const orders = ref<Orders[]>([]);

   const isEmpty = computed(() => (orders.value.length === 0 ? true : false));
   const userOrders = computed(() => orders.value);
   return { userOrders, isEmpty };
});
