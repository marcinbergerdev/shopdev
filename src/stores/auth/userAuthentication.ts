import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserAuthentication = defineStore("userAuthentication", () => {
   const authentication = ref<boolean>(true);
   const userId = ref<string | null>(null);
   const token = ref<string | null>(null);

   return { authentication, userId, token };
});
