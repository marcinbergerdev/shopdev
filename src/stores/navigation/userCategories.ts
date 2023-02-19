import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserCategories = defineStore("userCategories", () => {
   const categories = ref([
      {
         icon: "ic:outline-health-and-safety",
         title: "Zdrowie",
         link: "zdrowie",
         underCategories: [
            {
               link: "suplementy",
               title: "Suplementy diety",
               amount: 120,
            },

            {
               link: "lekibezrecepty",
               title: "Leki bez recepty",
               amount: 23,
            },
            {
               link: "zywnoscmedyczna",
               title: "Żywność medyczna",
               amount: 123,
            },
            {
               link: "opatrunki",
               title: "Materiały opatrunkowe",
               amount: 343,
            },
            {
               link: "ziolalecznicze",
               title: "Zioła lecznicze",
               amount: 45,
            },
            {
               link: "mascikremy",
               title: "Maści i kremy",
               amount: 34,
            },
            {
               link: "higiena",
               title: "Higiena intymna",
               amount: 67,
            },
            {
               link: "erotyka",
               title: "Erotyka",
               amount: 23,
            },
            {
               link: "urzadzeniamedyczne",
               title: "Urządzenia medyczne",
               amount: 3,
            },
            {
               link: "higienajamyustna",
               title: "Higiena jamy ustnej",
               amount: 3,
            },
         ],
      },
      {
         icon: "game-icons:t-shirt",
         title: "Moda",
         link: "moda",
         underCategories: [
            {
               link: "odziezdamska",
               title: "Odzież damska",
               amount: 20,
            },
            {
               link: "bieliznadamska",
               title: "Bielizna damska",
               amount: 45,
            },
            {
               link: "butydamskie",
               title: "Buty damskie",
               amount: 23,
            },
            {
               link: "odziezmeska",
               title: "Odzież męska",
               amount: 34,
            },
            {
               link: "bieliznameska",
               title: "Bielizna męska",
               amount: 34,
            },
            {
               link: "butymeskie",
               title: "Buty męskie",
               amount: 343,
            },
         ],
      },
      {
         icon: "icon-park-outline:cosmetic-brush",
         title: "Uroda",
         link: "uroda",
         underCategories: [
            {
               link: "kremydotwarz",
               title: "Kremy do twarzy",
               amount: 12,
            },
            {
               link: "maseczkidotwarzy",
               title: "Maseczki do twarzy",
               amount: 23,
            },
            {
               link: "oczyszczenie",
               title: "Oczyszczenia i demakijaż",
               amount: 123,
            },
            {
               link: "goleniedepilacja",
               title: "Golenie i depilacja",
               amount: 343,
            },
            {
               link: "lakierdopaznokci",
               title: "Lakiery do paznokci",
               amount: 45,
            },
            {
               link: "odrzywkidopaznokci",
               title: "Odrzywki do paznokci",
               amount: 34,
            },
            {
               link: "szampony",
               title: "Szampony",
               amount: 67,
            },
            {
               link: "perfumydamskie",
               title: "Perfumy damskie",
               amount: 23,
            },
            {
               link: "perfumymeskie",
               title: "Perfumy męskie",
               amount: 3,
            },
            {
               link: "pedzledomakijazu",
               title: "Pędzle do makijażu",
               amount: 3,
            },
         ],
      },
      {
         icon: "cil:baby",
         title: "Dziecko",
         link: "dziecko",
         underCategories: [
            {
               link: "zdrowieihigiena",
               title: "Zdrowie i higiena",
               amount: 120,
            },
            {
               link: "wozki",
               title: "Wózki dziecięce",
               amount: 23,
            },
            {
               link: "szkola",
               title: "Artykuły szkolne",
               amount: 123,
            },
            {
               link: "zabawki",
               title: "Zabawki",
               amount: 343,
            },
            {
               link: "akcesoria",
               title: "Akcesoria dla dzieci",
               amount: 45,
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
