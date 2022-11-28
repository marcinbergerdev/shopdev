import { createRouter, createWebHashHistory } from "vue-router";

import ShopHomePage from "./layout/shop/ShopHomePage.vue";
import AuthLogin from "./layout/authentication/AuthLogin.vue";
import ShopMainContainer from './components/main/ShopMainContainer.vue';

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/shop" },
      {
         path: "/shop",
         component: ShopHomePage,
         children: [
            { path: "", component: ShopMainContainer},
            { path: "user", component: AuthLogin },
            { path: "favorite", component: AuthLogin },
            { path: "cart", component: AuthLogin },
            { path: "service", component: AuthLogin },
            { path: "order", component: AuthLogin },
            { path: "order1", component: AuthLogin },
            { path: "service", component: AuthLogin },
         ],
      },
   ],
});

export default router;
