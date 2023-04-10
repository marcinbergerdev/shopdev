import { defineStore } from "pinia";
import {
   getDatabase,
   ref as firebaseRef,
   child,
   get,
   remove,
} from "firebase/database";
import { ref, computed } from "vue";
import Orders from "../../../types/userOrders";

export const useUserFavorite = defineStore("userFavorite", () => {
   const userFavorite = ref<Orders[]>([]);

   async function getUserFavoriteProducts(userId: string) {
      const dbRef = firebaseRef(getDatabase());

      await get(child(dbRef, `users/${userId}/favoriteProduct`))
         .then((snapshot) => {
            if (snapshot.exists()) {
               userFavorite.value = snapshot.val();
            } else {
               console.log("No data available");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }

   async function removeProductFromFavoriteList(
      userId: string,
      productId: string
   ) {
      const db = getDatabase();
      await remove(
         firebaseRef(db, "users/" + userId + "/favoriteProduct/" + productId)
      )
         .then(() => {
            location.reload();
         })
         .catch((error) => {
            console.log(error.message);
         });
   }

   const isEmpty = computed(() =>
      userFavorite.value.length === 0 ? true : false
   );
   return {
      userFavorite,
      getUserFavoriteProducts,
      removeProductFromFavoriteList,
      isEmpty,
   };
});
