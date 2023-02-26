import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import Product from "../../../types/product";

export const useProducts = defineStore("products", () => {
   const fetchedProducts = ref<Array<Product>>([]);

   async function fetchProducts(link?: string) {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products" + link
         );
         fetchedProducts.value = response.data;
      } catch (error) {
         console.log(error);
      }
   }

   function clearProductList() {
      fetchedProducts.value = [];
   }

   const products = computed(() => {
      return fetchedProducts.value;
   });

   return { products, fetchProducts, clearProductList };
});
