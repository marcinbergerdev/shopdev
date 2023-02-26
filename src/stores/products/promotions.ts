import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import Product from "../../../types/product";

export const usePromotion = defineStore("promotion", () => {
   const promotions = ref<Product[]>([]);

   async function fetchPromotions() {
      try {
         const products = await axios.get("https://fakestoreapi.com/products");
         console.log(products.data);
      } catch (error) {
         console.log(error);
      }
   }

   return { fetchPromotions };
});
