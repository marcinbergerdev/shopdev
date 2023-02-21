import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const usePromotion = defineStore("promotion", () => {

   interface Product {
      id?: number;
      category?: string;
      image?: string;
      price?: number;
      title?: string;
      description?: string;
   }



  const promotions = ref<Array<Product>>([]);





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
