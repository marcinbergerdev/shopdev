import { defineStore } from "pinia";
import {
   getDatabase,
   ref as firebaseRef,
   child,
   get,
   push,
   update,
   remove,
} from "firebase/database";
import { ref, computed } from "vue";
import Orders from "../../../types/userOrders";

export const useUserOrders = defineStore("userOrders", () => {
   const orders = ref<Orders[]>([]);

   async function getUserCartProducts(userId: string) {
      const dbRef = firebaseRef(getDatabase());

      await get(child(dbRef, `users/${userId}/userCart`))
         .then((snapshot) => {
            if (snapshot.exists()) {
               orders.value = snapshot.val();
            } else {
               console.log("No data available");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }

   const isEmpty = computed(() => (orders.value.length === 0 ? true : false));
   const userOrders = computed(() => orders.value);
   return { userOrders, getUserCartProducts, isEmpty };
});
