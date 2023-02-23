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

      {
         icon: "fluent:sport-american-football-24-regular",
         title: "Sport i Turystyka",
         link: "sport",
         underCategories: [
            {
               link: "akcesoriarowery",
               title: "Rowery i akcesoria",
               amount: 120,
            },
            {
               link: "akcesoriaturystyka",
               title: "Akcesoria turystyczne",
               amount: 23,
            },
            {
               link: "wedkarstwo",
               title: "Wędkarstwo",
               amount: 123,
            },
            {
               link: "odzywki",
               title: "Odżywki",
               amount: 343,
            },
            {
               link: "wiatrowki",
               title: "Wiatrówki",
               amount: 45,
            },
            {
               link: "militaria",
               title: "Odzież militarna",
               amount: 34,
            },
         ],
      },
      {
         icon: "dashicons:book",
         title: "Kultura i Rozrywka",
         link: "kultura",
         underCategories: [
            {
               link: "ksiazki",
               title: "Ksiązki",
               amount: 120,
            },
            {
               link: "gry",
               title: "Gry na PC",
               amount: 23,
            },
            {
               link: "konsola",
               title: "Gry na konsole",
               amount: 123,
            },
            {
               link: "instrumenty",
               title: "Instrumnety",
               amount: 343,
            },
            {
               link: "cd",
               title: "Płyty CD",
               amount: 45,
            },
            {
               link: "akcesoriamuzyka",
               title: "Akcesoria muzyczne",
               amount: 34,
            },
            {
               link: "filmy",
               title: "Filmy",
               amount: 23,
            },
            {
               link: "filmydladzieci",
               title: "Filmy dla dzieci",
               amount: 3,
            },
         ],
      },
      {
         icon: "fluent-emoji-high-contrast:house-with-garden",
         title: "Dom i Ogród",
         link: "dom",
         underCategories: [
            {
               link: "dekoracje",
               title: "Dekoracje i ozdoby",
               amount: 120,
            },
            {
               link: "dywany",
               title: "Dywany i dywaniki",
               amount: 23,
            },
            {
               link: "posciele",
               title: "Pościele i koce",
               amount: 123,
            },
            {
               link: "garnki",
               title: "Garnki i patelnie",
               amount: 343,
            },
            {
               link: "zastawy",
               title: "Zastawa stołowa",
               amount: 45,
            },
            {
               link: "wkretarki",
               title: "Wkrętarki",
               amount: 34,
            },
            {
               link: "pily",
               title: "Piły",
               amount: 67,
            },
            {
               link: "szlifierki",
               title: "Szlifierka",
               amount: 23,
            },
            {
               link: "spawarki",
               title: "Spawarki",
               amount: 3,
            },
            {
               link: "lampki",
               title: "Lampki",
               amount: 3,
            },
         ],
      },
      {
         icon: "grommet-icons:personal-computer",
         title: "Elektronika",
         link: "elektronika",
         underCategories: [
            {
               link: "telefony",
               title: "Telefony",
               amount: 120,
            },
            {
               link: "komputery",
               title: "Komputery PC",
               amount: 23,
            },
            {
               link: "laptopy",
               title: "Laptopy",
               amount: 123,
            },
            {
               link: "konsole",
               title: "Konsole",
               amount: 343,
            },
            {
               link: "tablety",
               title: "Tablety",
               amount: 45,
            },
            {
               link: "tv",
               title: "Telewizory",
               amount: 34,
            },
            {
               link: "kuchnia",
               title: "Sprzęt kuchenny",
               amount: 67,
            },
            {
               link: "sluchawki",
               title: "Słuchawki",
               amount: 23,
            },
            {
               link: "aparaty",
               title: "Aparaty cyfrowe",
               amount: 3,
            },
         ],
      },
      {
         icon: "cil:car-alt",
         title: "Motoryzacja",
         link: "motoryzacja",
         underCategories: [
            {
               link: "karoseria",
               title: "Części karoserii",
               amount: 120,
            },
            {
               link: "silniki",
               title: "Silniki",
               amount: 23,
            },
            {
               link: "hamulce",
               title: "Układ hamulcowy",
               amount: 123,
            },
            {
               link: "zawieszenia",
               title: "Układ zawieszenia",
               amount: 343,
            },
            {
               link: "wydechy",
               title: "Układ wydechowy",
               amount: 45,
            },
            {
               link: "chlodzenie",
               title: "Układ chłodzenia",
               amount: 34,
            },
            {
               link: "akumulatory",
               title: "Układ elektrynczy i akumulatory",
               amount: 67,
            },
            {
               link: "oponyfelgi",
               title: "Opony i felgi",
               amount: 23,
            },
            {
               link: "elektronika",
               title: "Elektronika samochodowa",
               amount: 3,
            },
            {
               link: "akcesoria",
               title: "Akcesoria do samochodów",
               amount: 3,
            },
         ],
      },
      {
         icon: "fluent-emoji-high-contrast:framed-picture",
         title: "Kolekcja i Sztuka",
         link: "sztuka",
         underCategories: [
            {
               link: "meble",
               title: "Meble",
               amount: 120,
            },
            {
               link: "porcelana",
               title: "Porcelana i ceramika",
               amount: 23,
            },
            {
               link: "bizuteria",
               title: "Biżuteria",
               amount: 123,
            },
            {
               link: "zegarki",
               title: "Zegary i zegarki",
               amount: 343,
            },
            {
               link: "modelarswo",
               title: "Modelarstwo",
               amount: 45,
            },
            {
               link: "zloto",
               title: "Złoto i Srebro",
               amount: 34,
            },
            {
               link: "rzezba",
               title: "Rzeźba",
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
