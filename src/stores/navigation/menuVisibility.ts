import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMenuVisibility = defineStore("menuVisibility", () => {
   const menuHidden = ref(false);
   const isMenuAnimation = ref(true);

   const isMenuHidden = computed<boolean>(() => {
      return menuHidden.value;
   });

   function switchMenu() {
      menuHidden.value = !menuHidden.value;
   }

   function openMenu() {
      menuHidden.value = true;

   }
   function closeMenu() {
      menuHidden.value = false;
   }

   function activateAnimation(){
      isMenuAnimation.value = true;
   }
   function deactivateAnimation(){
      isMenuAnimation.value = false;
   }

   return {
      isMenuHidden,
      switchMenu,
      openMenu,
      closeMenu,
      isMenuAnimation,
      activateAnimation,
      deactivateAnimation
   };
});
