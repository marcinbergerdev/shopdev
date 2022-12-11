import { createRouter, createWebHashHistory } from "vue-router";

const ShopHomePage = () => import("./layout/shop/ShopHomePage.vue");
const ShopMainContainer = () => import("./components/main/ShopMainContainer.vue");
const AuthLogin = () => import("./layout/authentication/AuthLogin.vue");

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
