import { defineStore } from "pinia";
import {
   getDatabase,
   ref as FireRef,
   set,
   child,
   get,
} from "firebase/database";
import { reactive } from "vue";
import User from "../../../types/userSettings";

export const useUserData = defineStore("userData", () => {
   let userData = reactive<User>({
      email: "",
      username: "",
   });

   function writeUserData(userId: string, name: string, email: string) {
      const db = getDatabase();
      set(FireRef(db, "users/" + userId), {
         username: name,
         email: email,
      });
   }

   async function getUserSettingsData(userId: string) {
      const dbRef = FireRef(getDatabase());

      await get(child(dbRef, `users/${userId}`))
         .then((snapshot) => {
            if (snapshot.exists()) {
               userData.email = snapshot.val().email;
               userData.username = snapshot.val().username;
            } else {
               console.log("No data available");
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }

   return {
      userData,
      writeUserData,
      getUserSettingsData,
   };
});
