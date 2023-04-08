import { defineStore } from "pinia";
import {
   User,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   updateProfile,
   updateEmail,
   updatePassword,
   deleteUser,
} from "firebase/auth";
import router from "../../router";
import { ref } from "vue";

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

   async function changeUserName(name: string) {
      await updateProfile(auth.currentUser as User, {
         displayName: name,
      })
         .then(() => {
            router.replace("/shop");
         })
         .catch((error) => {
            console.log(error.message);
         });
      console.log("userName");
   }

   function changeUserEmailAddress(newEmail: string) {
      updateEmail(auth.currentUser as User, newEmail)
         .then(() => {
            router.replace("/shop");
         })
         .catch((error) => {
            console.log(error.message);
         });
      console.log("userEmail");
   }

   async function changeUserPassword(newPassword: string) {
      interface Status {
         modal: boolean;
         error: string;
      }

      const status: Status = {
         modal: false,
         error: "",
      };

      await updatePassword(auth.currentUser as User, newPassword)
         .then(() => {
            status.modal = true;
         })
         .catch((error) => {
            status.modal = true;
            status.error = error.message;
         });

      return status;
   }

   return {
      isModal,
      isError,
      isLoadingSpinner,
      userAuth,
      userSignIn,
      userRegistration,
      userRedirectionHandler,
      changeUserName,
      deleteAccount,
      changeUserEmailAddress,
      changeUserPassword,
   };
});
