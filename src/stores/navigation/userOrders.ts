import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserOrders = () => defineStore('userOrders', () => {
  const orders = ref([
    {

    }

  ]);
});