import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserCategories = defineStore("userCategories", () => {
   const categories = ref([
      {
         icon: "ic:outline-health-and-safety",
         title: "Zdrowie",
         underCategories: [
            {
               link: "#",
               title: "Suplementy diety",
               amount: 120,
            },

            {
               link: "#",
               title: "Leki bez recepty",
               amount: 23,
            },
            {
               link: "#",
               title: "Żywność medyczna",
               amount: 123,
            },
            {
               link: "#",
               title: "Materiały opatrunkowe",
               amount: 343,
            },
            {
               link: "#",
               title: "Zioła lecznicze",
               amount: 45,
            },
            {
               link: "#",
               title: "Maści i kremy",
               amount: 34,
            },
            {
               link: "#",
               title: "Higiena intymna",
               amount: 67,
            },
            {
               link: "#",
               title: "Erotyka",
               amount: 23,
            },
            {
               link: "#",
               title: "Urządzenia medyczne",
               amount: 3,
            },
            {
               link: "#",
               title: "Higiena jamy ustnej",
               amount: 3,
            },
         ],
      },
      {
         icon: "game-icons:t-shirt",
         title: "Moda",
         underCategories: [
            {
               link: "#",
               title: "Odzież damska",
               amount: 20,
            },
            {
               link: "#",
               title: "Bielizna damska",
               amount: 45,
            },
            {
               link: "#",
               title: "Buty damskie",
               amount: 23,
            },
            {
               link: "#",
               title: "Odzież męska",
               amount: 34,
            },
            {
               link: "#",
               title: "Bielizna męska",
               amount: 34,
            },
            {
               link: "#",
               title: "Buty męskie",
               amount: 343,
            },
         ],
      },
      {
         icon: "icon-park-outline:cosmetic-brush",
         title: "Uroda",
         underCategories: [
            {
               link: "#",
               title: "Kremy do twarzy",
               amount: 12,
            },
            {
               link: "#",
               title: "Maseczki do twarzy",
               amount: 23,
            },
            {
               link: "#",
               title: "Oczyszczenia i demakijaż",
               amount: 123,
            },
            {
               link: "#",
               title: "Golenie i depilacja",
               amount: 343,
            },
            {
               link: "#",
               title: "Lakiery do paznokci",
               amount: 45,
            },
            {
               link: "#",
               title: "Odrzywki do paznokci",
               amount: 34,
            },
            {
               link: "#",
               title: "Szampony",
               amount: 67,
            },
            {
               link: "#",
               title: "Perfumy damskie",
               amount: 23,
            },
            {
               link: "#",
               title: "Perfumy męskie",
               amount: 3,
            },
            {
               link: "#",
               title: "Pędzle do makijażu",
               amount: 3,
            },
         ],
      },
      {
         icon: "cil:baby",
         title: "Dziecko",
         underCategories: [
            {
               link: "#",
               title: "Zdrowie i higiena",
               amount: 120,
            },
            {
               link: "#",
               title: "Wózki dziecęce",
               amount: 23,
            },
            {
               link: "#",
               title: "Artykuły szkolne",
               amount: 123,
            },
            {
               link: "#",
               title: "Zabawki",
               amount: 343,
            },
            {
               link: "#",
               title: "Akcesoria dla dzieci",
               amount: 45,
            },
         ],
      },
      {
         icon: "fluent:sport-american-football-24-regular",
         title: "Sport i Turystyka",
         underCategories: [
            {
               link: "#",
               title: "Rowery i akcesoria",
               amount: 120,
            },
            {
               link: "#",
               title: "Akcesoria turystyczne",
               amount: 23,
            },
            {
               link: "#",
               title: "Wędkarstwo",
               amount: 123,
            },
            {
               link: "#",
               title: "Odżywki",
               amount: 343,
            },
            {
               link: "#",
               title: "Wiatrówki",
               amount: 45,
            },
            {
               link: "#",
               title: "Odzież militarna",
               amount: 34,
            },
         ],
      },
      {
         icon: "dashicons:book",
         title: "Kultura i Rozrywka",
         underCategories: [
            {
               link: "#",
               title: "Ksiązki",
               amount: 120,
            },
            {
               link: "#",
               title: "Gry na PC",
               amount: 23,
            },
            {
               link: "#",
               title: "Gry na konsole",
               amount: 123,
            },
            {
               link: "#",
               title: "Instrumnety",
               amount: 343,
            },
            {
               link: "#",
               title: "Płyty CD",
               amount: 45,
            },
            {
               link: "#",
               title: "Akcesoria muzyczne",
               amount: 34,
            },
            {
               link: "#",
               title: "Higiena intymna",
               amount: 67,
            },
            {
               link: "#",
               title: "Filmy",
               amount: 23,
            },
            {
               link: "#",
               title: "Filmy dla dzieci",
               amount: 3,
            },
         ],
      },
      {
         icon: "fluent-emoji-high-contrast:house-with-garden",
         title: "Dom i Ogród",
         underCategories: [
            {
               link: "#",
               title: "Dekoracje i ozdoby",
               amount: 120,
            },
            {
               link: "#",
               title: "Dywany i dywaniki",
               amount: 23,
            },
            {
               link: "#",
               title: "Pościele i koce",
               amount: 123,
            },
            {
               link: "#",
               title: "Garnki i patelnie",
               amount: 343,
            },
            {
               link: "#",
               title: "Zastawa stołowa",
               amount: 45,
            },
            {
               link: "#",
               title: "Wkrętarki",
               amount: 34,
            },
            {
               link: "#",
               title: "Piły",
               amount: 67,
            },
            {
               link: "#",
               title: "Szlifierka",
               amount: 23,
            },
            {
               link: "#",
               title: "Spawarki",
               amount: 3,
            },
            {
               link: "#",
               title: "Lampki",
               amount: 3,
            },
         ],
      },
      {
         icon: "grommet-icons:personal-computer",
         title: "Elektronika",
         underCategories: [
            {
               link: "#",
               title: "Telefony",
               amount: 120,
            },
            {
               link: "#",
               title: "Komputery PC",
               amount: 23,
            },
            {
               link: "#",
               title: "Laptopy",
               amount: 123,
            },
            {
               link: "#",
               title: "Konsole",
               amount: 343,
            },
            {
               link: "#",
               title: "Tablety",
               amount: 45,
            },
            {
               link: "#",
               title: "Telewizory",
               amount: 34,
            },
            {
               link: "#",
               title: "Sprzęt kuchenny",
               amount: 67,
            },
            {
               link: "#",
               title: "Słuchawki",
               amount: 23,
            },
            {
               link: "#",
               title: "Aparaty cyfrowe",
               amount: 3,
            },
         ],
      },
      {
         icon: "cil:car-alt",
         title: "Motoryzacja",
         underCategories: [
            {
               link: "#",
               title: "Części karoserii",
               amount: 120,
            },
            {
               link: "#",
               title: "Silniki",
               amount: 23,
            },
            {
               link: "#",
               title: "Układ hamulcowy",
               amount: 123,
            },
            {
               link: "#",
               title: "Układ zawieszenia",
               amount: 343,
            },
            {
               link: "#",
               title: "Układ wydechowy",
               amount: 45,
            },
            {
               link: "#",
               title: "Układ chłodzenia",
               amount: 34,
            },
            {
               link: "#",
               title: "Układ elektrynczy i akumulatory",
               amount: 67,
            },
            {
               link: "#",
               title: "Opony i felgi",
               amount: 23,
            },
            {
               link: "#",
               title: "Elektronika samochodowa",
               amount: 3,
            },
            {
               link: "#",
               title: "Akcesoria do samochodów",
               amount: 3,
            },
         ],
      },
      {
         icon: "fluent-emoji-high-contrast:framed-picture",
         title: "Kolekcja i Sztuka",
         underCategories: [
            {
               link: "#",
               title: "Meble",
               amount: 120,
            },
            {
               link: "#",
               title: "Porcelana i ceramika",
               amount: 23,
            },
            {
               link: "#",
               title: "Biżuteria",
               amount: 123,
            },
            {
               link: "#",
               title: "Zegary i zegarki",
               amount: 343,
            },
            {
               link: "#",
               title: "Modelarstwo",
               amount: 45,
            },
            {
               link: "#",
               title: "Złoto i Srebro",
               amount: 34,
            },
            {
               link: "#",
               title: "Rzeźba",
               amount: 67,
            },
            {
               link: "#",
               title: "Erotyka",
               amount: 23,
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
