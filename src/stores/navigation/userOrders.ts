import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserOrders = defineStore("userOrders", () => {
   const orders = ref([
      // {
      //    id: 1,
      //    img: "/assets/psp.jpg",
      //    name: "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka wszystko zapakowane w nowe pudełko",
      //    amount: true,
      //    price: 79.99,
      //    deleteButton: true,
      // },
      // {
      //    id: 2,
      //    img: "/assets/psp.jpg",
      //    name: "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka wszystko zapakowane w nowe pudełko",
      //    amount: true,
      //    price: 79.99,
      //    deleteButton: true,
      // },
      // {
      //    id: 3,
      //    img: "/assets/psp.jpg",
      //    name: "Sony PSP z gwarancją + zestaw słuchawkowy",
      //    amount: true,
      //    price: 79.99,
      //    deleteButton: true,
      // },
      // {
      //    id: 4,
      //    img: "/assets/psp.jpg",
      //    name: "Sony PSP z gwarancją + zestaw słuchawkowy i ładowarka wszystko zapakowane w nowe pudełko",
      //    amount: true,
      //    price: 79.99,
      //    deleteButton: true,
      // },
      // {
      //    id: 5,
      //    img: "/assets/psp.jpg",
      //    name: "Sony PSP z gwarancją + zestaw słuchawkowy",
      //    amount: true,
      //    price: 79.99,
      //    deleteButton: true,
      // },
   ]);

   const isEmpty = computed(() => (orders.value.length === 0 ? true : false));
   const userOrders = computed(() => orders.value);
   return { userOrders, isEmpty};
});
