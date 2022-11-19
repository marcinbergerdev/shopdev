import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserNavigation = defineStore("navOptions", () => {


   const options = ref([
      {
         path: "/shop/user",
         title: "Twoje konto",
         icon: "cil:user",
         isLink: true,
         isDropMenu: 'user'
      },
      {
         path: "/shop/favorite",
         title: "Ulubione",
         icon: "bi:heart",
         isLink: true,
      },
      {
         path: "/shop/cart",
         title: "Koszyk",
         icon: "carbon:shopping-cart",
         isLink: true,
         isDropMenu: 'cart'
      },
      {
         path: "/shop/register",
         title: "Rejestracja",
         isLink: false
      },
      {
         path: "/shop/service",
         title: "Serwis",
         icon: "mingcute:service-line",
         isLink: true,
      },
   ]);
   const userOptions = computed(() => options.value);

   return {userOptions }
});
