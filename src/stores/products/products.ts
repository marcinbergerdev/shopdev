import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";

export const useProducts = defineStore("products", () => {

   interface Product {
      id?: number;
      category?: string;
      image?: string;
      price?: number;
      title?: string;
      description?: string;
   }

   const fetchedProducts = ref<Array<Product>>([]);

   async function fetchProducts() {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products?limit=15"
         );
         fetchedProducts.value = response.data;
         console.log(products.value);
      } catch (error) {
         console.log(error);
      }
   }

   async function clearProductList() {
      fetchedProducts.value = [];
   }

   const products = computed(() => {
      return fetchedProducts.value;
   });

   return { products, fetchProducts, clearProductList };
});
