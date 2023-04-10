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

   function writeNewPost(
      userId: string,
      id?: number,
      categories?: string,
      img?: string,
      price?: number,
      title?: string,
      description?: string
   ) {
      const db = getDatabase();

      // A post entry.
      const postData = {
         id: id,
         categories: categories,
         img: img,
         price: price,
         title: title,
         description: description,
      };

      // Get a key for a new Post.
      const newPostKey = push(child(firebaseRef(db), "posts")).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates: any = {};
      updates["/users/" + userId + "/favoriteProduct/" + newPostKey] = postData;

      return update(firebaseRef(db), updates);
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
      writeNewPost,
      removeProductFromFavoriteList,
      isEmpty,
   };
});
