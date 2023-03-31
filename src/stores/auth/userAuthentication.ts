import { defineStore } from "pinia";
import { ref } from "vue";
import {
   getAuth,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
} from "firebase/auth";
import router from "../../router";

const auth = getAuth();

export const useUserAuthentication = defineStore("userAuthentication", () => {
   const isModal = ref<boolean>(false);
   const isError = ref<string>("");
   const isLoadingSpinner = ref<boolean>(false);

   const userSignIn = async (email: string, password: string) => {
      isLoadingSpinner.value = true;
      await signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            router.push("/shop");
         })
         .catch((error) => {
            isError.value = error.code;
            isModal.value = true;
         });

      isLoadingSpinner.value = false;
   };

   const userRegistration = async (email: string, password: string) => {
      isLoadingSpinner.value = true;
      await createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            isModal.value = true;
         })
         .catch((error) => {
            isError.value = error.code;
            isModal.value = true;
         });

      isLoadingSpinner.value = false;
   };

   const userRedirectionHandler = () => {
      if (!!isError.value) {
         isModal.value = false;
         isError.value = "";
         return;
      }

      router.replace("/shop");
   };

   return {
      isModal,
      isError,
      isLoadingSpinner,
      userSignIn,
      userRegistration,
      userRedirectionHandler,
   };
});
