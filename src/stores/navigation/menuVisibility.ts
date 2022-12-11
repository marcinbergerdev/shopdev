import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMenuVisibility = defineStore("menuVisibility", () => {
   const menuHidden = ref(false);

   const isMenuHidden = computed<boolean>(() => {
      return menuHidden.value;
   });

   function switchMenu() {
      menuHidden.value = !menuHidden.value;
   }

   function openMenu() {
      menuHidden.value = false;

   }
   function closeMenu() {
      menuHidden.value = false;
   }

   return {
      isMenuHidden,
      switchMenu,
      openMenu,
      closeMenu
   };
});
