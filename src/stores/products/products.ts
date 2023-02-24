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

   async function fetchProducts(link?: string) {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products" + link
         );
         clearProductList();
         fetchedProducts.value = response.data;
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
