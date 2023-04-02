import { defineStore } from "pinia";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { reactive } from 'vue';

export const useUserData = defineStore("userData", () => {

   function writeUserData(userId: string, name: string, email: string) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
         username: name,
         email: email,
      });
   }

    function getUserSettingsData(userId: string) {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `users/${userId}`))
         .then((snapshot) => {
            if (snapshot.exists()) {
               console.log(snapshot.val());
            } else {
               console.log("No data available");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }


   return {
      writeUserData,
      getUserSettingsData,
   };
});
