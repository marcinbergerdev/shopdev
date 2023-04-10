import { defineStore } from "pinia";
import { getDatabase, ref as firebaseRef, child, get } from "firebase/database";
import { ref, computed } from "vue";
import Orders from "../../../types/userOrders";

export const useUserFavorite = defineStore("userFavorite", () => {
   const favorite = ref<Orders[]>([]);

   function getUserFavoriteProducts(userId: string) {
      const dbRef = firebaseRef(getDatabase());

      get(child(dbRef, `users/${userId}/favoriteProduct`))
         .then((snapshot) => {
            if (snapshot.exists()) {
               favorite.value = snapshot.val();
               console.log(snapshot.val());
            } else {
               console.log("No data available");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }

   const isEmpty = computed(() => (favorite.value.length === 0 ? true : false));
   const userOrders = computed(() => favorite.value);
   return { userOrders, getUserFavoriteProducts ,isEmpty };
});
