import { defineStore } from "pinia";
import {
   User,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   deleteUser,
} from "firebase/auth";
import { useUserData } from "./userData";
import router from "../../router";
import { ref } from "vue";

const userData = useUserData();
const auth = getAuth();
const user = auth.currentUser;

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
         .then((currentUser: any) => {
            const name = currentUser.user.email.split("@")[0];

            isModal.value = true;
            userData.writeUserData(
               currentUser.user.uid,
               name,
               currentUser.user.email
            );
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

   function deleteAccount() {
      onAuthStateChanged(auth, (user: User | null) => {
         if (user) {
            deleteUser(user)
               .then(() => {
                  router.replace("/shop");
               })
               .catch((error) => {
                  console.log(error);
               });
         }
      });
   }

   return {
      isModal,
      isError,
      isLoadingSpinner,
      userAuth,
      userSignIn,
      userRegistration,
      userRedirectionHandler,
      deleteAccount,
   };
});
