import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserNavigation = defineStore("userNavigation", () => {
   const options = ref([
      {
         path: "/shop/account",
         title: "Twoje konto",
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
         title: "Ulubione",
         icon: "bi:heart",
         view: "navElement",
      },
      {
         path: "/shop/cart",
         title: "Koszyk",
         icon: "carbon:shopping-cart",
         name: "cart",
         view: "navElement",
         hoverPosition: "hoverLeft",
         dropMenuPosition: "dropMenuRight",
         isDropMenu: true,
         isMobileDisabled: "disabledLinkOnMobile",
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
         title: "Rejestracja",
         view: "flat",
         name: "logout",
         hideIcon: true,
      },
      // {
      //    path: "/",
      //    title: "Log out",
      //    view: "navEmpty",
      //    hideIcon: true,
      // },
      {
         path: "/shop/service",
         title: "Serwis",
         icon: "mingcute:service-line",
         view: "navElement",
      },
   ]);
   const userOptions = computed(() => options.value);
   return { userOptions };
});
