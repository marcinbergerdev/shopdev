import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const useProducts = defineStore("products", () => {
   const fetchedProducts = ref([]);

   async function fetchProducts() {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products?limit=15"
         );
         fetchedProducts.value = [];
         fetchedProducts.value = response.data;
         console.log(products.value);
      } catch (error) {
         console.log(error);
      }
   }

   const products = computed(() => {
      return fetchedProducts.value;
   });

   return { products, fetchProducts };
});
