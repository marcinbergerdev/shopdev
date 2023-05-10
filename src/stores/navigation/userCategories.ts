import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserCategories = defineStore("userCategories", () => {
   const categories = ref([
      {
         icon: "ic:outline-health-and-safety",
         title: "Health",
         link: "health",
         underCategories: [
            {
               link: "dietarysupplements",
               title: "Dietary supplements",
               amount: 120,
            },
            {
               link: "overthecountermedicines",
               title: "Over-the-counter medicines",
               amount: 23,
            },
            {
               link: "medicalfood",
               title: "Medical food",
               amount: 123,
            },
            {
               link: "woundcarematerials",
               title: "Wound care materials",
               amount: 343,
            },
            {
               link: "herbalmedicine",
               title: "Herbal medicine",
               amount: 45,
            },
            {
               link: "creamsandointments",
               title: "Creams and ointments",
               amount: 34,
            },
            {
               link: "intimatehygiene",
               title: "Intimate hygiene",
               amount: 67,
            },
            {
               link: "erotica",
               title: "Erotica",
               amount: 23,
            },
            {
               link: "medicaldevices",
               title: "Medical devices",
               amount: 3,
            },
            {
               link: "oralhygiene",
               title: "Oral hygiene",
               amount: 3,
            },
         ],
      },

      {
         icon: "game-icons:t-shirt",
         title: "Fashion",
         link: "fashion",
         underCategories: [
            {
               link: "womensclothing",
               title: "Women's clothing",
               amount: 20,
            },
            {
               link: "womensunderwear",
               title: "Women's underwear",
               amount: 45,
            },
            {
               link: "womensshoes",
               title: "Women's shoes",
               amount: 23,
            },
            {
               link: "mensclothing",
               title: "Men's clothing",
               amount: 34,
            },
            {
               link: "mensunderwear",
               title: "Men's underwear",
               amount: 34,
            },
            {
               link: "mensshoes",
               title: "Men's shoes",
               amount: 343,
            },
         ],
      },

      {
         icon: "icon-park-outline:cosmetic-brush",
         title: "Beauty",
         link: "beauty",
         underCategories: [
            {
               link: "facialcreams",
               title: "Facial creams",
               amount: 12,
            },
            {
               link: "facialmasks",
               title: "Facial masks",
               amount: 23,
            },
            {
               link: "cleansingandmakeupremoval",
               title: "Cleansing and makeup removal",
               amount: 123,
            },
            {
               link: "shavinganddepilation",
               title: "Shaving and depilation",
               amount: 343,
            },
            {
               link: "nailpolish",
               title: "Nail polish",
               amount: 45,
            },
            {
               link: "nailconditioners",
               title: "Nail conditioners",
               amount: 34,
            },
            {
               link: "shampoos",
               title: "Shampoos",
               amount: 67,
            },
            {
               link: "women's perfumes",
               title: "Women's perfumes",
               amount: 23,
            },
            {
               link: "men's perfumes",
               title: "Men's perfumes",
               amount: 3,
            },
            {
               link: "makeup brushes",
               title: "Makeup brushes",
               amount: 3,
            },
         ],
      },

      {
         icon: "cil:baby",
         title: "Child",
         link: "child",
         underCategories: [
            {
               link: "healthandhygiene",
               title: "Health and Hygiene",
               amount: 120,
            },
            {
               link: "strollers",
               title: "Baby Strollers",
               amount: 23,
            },
            {
               link: "schoolsupplies",
               title: "School Supplies",
               amount: 123,
            },
            {
               link: "toys",
               title: "Toys",
               amount: 343,
            },
            {
               link: "accessories",
               title: "Accessories for Children",
               amount: 45,
            },
         ],
      },

      {
         icon: "fluent:sport-american-football-24-regular",
         title: "Sports and Tourism",
         link: "sport",
         underCategories: [
            {
               link: "bicycleaccessories",
               title: "Bicycles and Accessories",
               amount: 120,
            },
            {
               link: "tourismaccessories",
               title: "Tourism Accessories",
               amount: 23,
            },
            {
               link: "fishing",
               title: "Fishing",
               amount: 123,
            },
            {
               link: "supplements",
               title: "Supplements",
               amount: 343,
            },
            {
               link: "airrifles",
               title: "Air Rifles",
               amount: 45,
            },
            {
               link: "militaryclothing",
               title: "Military Clothing",
               amount: 34,
            },
         ],
      },

      {
         icon: "dashicons:book",
         title: "Culture and Entertainment",
         link: "culture",
         underCategories: [
            {
               link: "books",
               title: "Books",
               amount: 120,
            },
            {
               link: "pc-games",
               title: "PC Games",
               amount: 23,
            },
            {
               link: "console-games",
               title: "Console Games",
               amount: 123,
            },
            {
               link: "instruments",
               title: "Instruments",
               amount: 343,
            },
            {
               link: "cds",
               title: "CDs",
               amount: 45,
            },
            {
               link: "music-accessories",
               title: "Music Accessories",
               amount: 34,
            },
            {
               link: "movies",
               title: "Movies",
               amount: 23,
            },
            {
               link: "childrens-movies",
               title: "Children's Movies",
               amount: 3,
            },
         ],
      },

      {
         icon: "fluent-emoji-high-contrast:house-with-garden",
         title: "Home and Garden",
         link: "home",
         underCategories: [
            {
               link: "decorations",
               title: "Decorations and Ornaments",
               amount: 120,
            },
            {
               link: "rugs",
               title: "Rugs",
               amount: 23,
            },
            {
               link: "bedding",
               title: "Bedding and Blankets",
               amount: 123,
            },
            {
               link: "pots-pans",
               title: "Pots and Pans",
               amount: 343,
            },
            {
               link: "tableware",
               title: "Tableware",
               amount: 45,
            },
            {
               link: "screwdrivers",
               title: "Screwdrivers",
               amount: 34,
            },
            {
               link: "saws",
               title: "Saws",
               amount: 67,
            },
            {
               link: "grinders",
               title: "Grinders",
               amount: 23,
            },
            {
               link: "welders",
               title: "Welders",
               amount: 3,
            },
            {
               link: "lamps",
               title: "Lamps",
               amount: 3,
            },
         ],
      },

      {
         icon: "grommet-icons:personal-computer",
         title: "Electronics",
         link: "electronics",
         underCategories: [
            {
               link: "phones",
               title: "Phones",
               amount: 120,
            },
            {
               link: "computers",
               title: "PCs",
               amount: 23,
            },
            {
               link: "laptops",
               title: "Laptops",
               amount: 123,
            },
            {
               link: "consoles",
               title: "Consoles",
               amount: 343,
            },
            {
               link: "tablets",
               title: "Tablets",
               amount: 45,
            },
            {
               link: "tv",
               title: "Televisions",
               amount: 34,
            },
            {
               link: "kitchen",
               title: "Kitchen appliances",
               amount: 67,
            },
            {
               link: "headphones",
               title: "Headphones",
               amount: 23,
            },
            {
               link: "cameras",
               title: "Digital cameras",
               amount: 3,
            },
         ],
      },

      {
         icon: "cil:car-alt",
         title: "Automotive",
         link: "automotive",
         underCategories: [
            {
               link: "bodywork",
               title: "Bodywork parts",
               amount: 120,
            },
            {
               link: "engines",
               title: "Engines",
               amount: 23,
            },
            {
               link: "brakes",
               title: "Brake system",
               amount: 123,
            },
            {
               link: "suspension",
               title: "Suspension system",
               amount: 343,
            },
            {
               link: "exhausts",
               title: "Exhaust system",
               amount: 45,
            },
            {
               link: "cooling",
               title: "Cooling system",
               amount: 34,
            },
            {
               link: "batteries",
               title: "Electrical system and batteries",
               amount: 67,
            },
            {
               link: "tyresrims",
               title: "Tyres and rims",
               amount: 23,
            },
            {
               link: "electronics",
               title: "Car electronics",
               amount: 3,
            },
            {
               link: "accessories",
               title: "Car accessories",
               amount: 3,
            },
         ],
      },

      {
         icon: "fluent-emoji-high-contrast:framed-picture",
         title: "Collection and Art",
         link: "art",
         underCategories: [
            {
               link: "furniture",
               title: "Furniture",
               amount: 120,
            },
            {
               link: "porcelain",
               title: "Porcelain and ceramics",
               amount: 23,
            },
            {
               link: "jewelry",
               title: "Jewelry",
               amount: 123,
            },
            {
               link: "watches",
               title: "Clocks and watches",
               amount: 343,
            },
            {
               link: "modeling",
               title: "Modeling",
               amount: 45,
            },
            {
               link: "gold",
               title: "Gold and silver",
               amount: 34,
            },
            {
               link: "sculpture",
               title: "Sculpture",
               amount: 67,
            },
         ],
      },
   ]);

   const backIcon = ref(false);

   const getCategories = computed(() => categories.value);
   const getBackIcon = computed(() => backIcon.value);

   function showBackIcon() {
      backIcon.value = true;
   }
   function hideBackIcon() {
      backIcon.value = false;
   }

   return {
      getCategories,
      getBackIcon,
      showBackIcon,
      hideBackIcon,
   };
});
