import { defineStore } from "pinia";
import { getDatabase, ref as FireRef, set } from "firebase/database";

export const useUserData = defineStore("userData", () => {
   function writeUserData(userId: string, name: string, email: string) {
      const db = getDatabase();
      set(FireRef(db, "users/" + userId), {
         username: name,
         email: email,
      });
   }

   return {
      writeUserData,
   };
});
