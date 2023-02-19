import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const usePromotion = defineStore("promotion", () => {

  const promotions = ref([]);





  async function fetchProducts() {
     try {
        const products = await axios.get("https://fakestoreapi.com/products");
        console.log(products.data);
     } catch (error) {
        console.log(error);
     }
  }

  return { fetchProducts };
});
