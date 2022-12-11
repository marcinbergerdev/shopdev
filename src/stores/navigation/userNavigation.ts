import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserNavigation = defineStore("userNavigation", () => {
   const options = ref([
      {
         path: "/shop/user",
         title: "Twoje konto",
         icon: "cil:user",
         name: "user",
         hoverPosition: "hoverRight",
         dropMenuPosition: "dropMenuRight ",
         isLink: true,
         isDropMenu: true,
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
         name: "cart",
         hoverPosition: "hoverLeft",
         dropMenuPosition: "dropMenuRight",
         isLink: true,
         isDropMenu: true,
      },
      {
         path: "/shop/register",
         title: "Rejestracja",
         isLink: false,
      },
      {
         path: "/shop/service",
         title: "Serwis",
         icon: "mingcute:service-line",
         isLink: true,
      },
   ]);
   const userOptions = computed(() => options.value);
   return { userOptions };
});
