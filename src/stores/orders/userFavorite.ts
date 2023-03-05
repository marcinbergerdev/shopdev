import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Orders from "../../../types/userOrders";

export const useUserFavorite = defineStore("userFavorite", () => {
   const favorite = ref<Orders[]>([]);

   const isEmpty = computed(() => (favorite.value.length === 0 ? true : false));
   const userOrders = computed(() => favorite.value);
   return { userOrders, isEmpty };
});
