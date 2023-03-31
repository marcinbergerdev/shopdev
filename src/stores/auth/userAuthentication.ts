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

   const userAuth = async (status: string, email: string, password: string) => {
      isLoadingSpinner.value = true;

      status === "login"
         ? await userSignIn(email, password)
         : await userRegistration(email, password);

      isLoadingSpinner.value = false;
   };

   const userSignIn = async (email: string, password: string) => {
      await signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            router.push("/shop");
         })
         .catch((error) => {
            isError.value = error.code;
            isModal.value = true;
         });
   };

   const userRegistration = async (email: string, password: string) => {
      await createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            isModal.value = true;
         })
         .catch((error) => {
            isError.value = error.code;
            isModal.value = true;
         });
   };

   const userRedirectionHandler = () => {
      isModal.value = false;

      if (!!isError.value) {
         isError.value = "";
         return;
      }

      router.replace("/shop");
   };

   return {
      isModal,
      isError,
      isLoadingSpinner,
      userAuth,
      userSignIn,
      userRegistration,
      userRedirectionHandler,
   };
});
