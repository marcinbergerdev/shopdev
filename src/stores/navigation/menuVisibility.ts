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
      document.body.classList.add('scrollHidden');
   }

   function closeMenu() {
      menuHidden.value = false;
      document.body.classList.remove('scrollHidden');
   }

   function activateAnimation() {
      isMenuAnimation.value = true;
   }
   function deactivateAnimation() {
      isMenuAnimation.value = false;
   }

   return {
      isMenuHidden,
      switchMenu,
      closeMenu,
      isMenuAnimation,
      activateAnimation,
      deactivateAnimation,
   };
});
