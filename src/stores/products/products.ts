import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import Product from "../../../types/product";

export const useProducts = defineStore("products", () => {
   const fetchedProducts = ref<Array<Product>>([]);
   const isLoadingSpinner = ref(false);

   async function fetchProducts(link?: string) {
      isLoadingSpinner.value = true;

      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products" + link
         );
         fetchedProducts.value = response.data;
      } catch (error) {
         console.log(error);
      }

      isLoadingSpinner.value = false;
   }

   function clearProductList() {
      fetchedProducts.value = [];
   }

   const products = computed(() => {
      return fetchedProducts.value;
   });

   return { products, fetchProducts, isLoadingSpinner, clearProductList };
});
