import { createRouter, createWebHashHistory } from "vue-router";

import ShopHomePage from './layout/shop/ShopHomePage.vue';
import AuthLogin from './layout/authentication/AuthRegistration.vue';

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: '/shop' },
      {
         path: "/shop",
         component: ShopHomePage,
         children: [
            { path: "user", component: AuthLogin },
            { path: "favorite", component: AuthLogin },
            { path: "cart", component: AuthLogin },
            { path: "service", component: AuthLogin },
            { path: "order", component: AuthLogin },
         ],
      },
   ],
});



export default router;