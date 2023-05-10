import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserNavigation = defineStore("userNavigation", () => {
   const options = ref([
      {
         path: "/shop/account",
         title: "Account",
         icon: "cil:user",
         name: "account",
         view: "navElement",
         hoverPosition: "hoverRight",
         dropMenuPosition: "dropMenuRight ",
         isDropMenu: true,
         isMobileDisabled: "disabledLinkOnMobile",
      },
      {
         path: "/shop/favorite",
         title: "Favorite",
         icon: "bi:heart",
         name: "favorite",
         view: "navElement",
         isAmount: true,
      },
      {
         path: "/shop/cart",
         title: "Cart",
         icon: "carbon:shopping-cart",
         name: "cart",
         view: "navElement",
         hoverPosition: "hoverLeft",
         dropMenuPosition: "dropMenuRight",
         isDropMenu: true,
         isMobileDisabled: "disabledLinkOnMobile",
         isAmount: true,
      },
      {
         path: "/login",
         title: "Login",
         view: "navEmpty",
         name: "login",
         hideIcon: true,
      },
      {
         path: "/register",
         title: "Register",
         view: "flat",
         name: "register",
         hideIcon: true,
      },
      {
         path: "/",
         title: "Log out",
         view: "navEmpty",
         name: "logout",
         hideIcon: true,
      },
      {
         path: "/shop/account/returns",
         title: "Service",
         icon: "mingcute:service-line",
         view: "navElement",
      },
   ]);
   const userOptions = computed(() => options.value);
   return { userOptions };
});
