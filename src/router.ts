import { createRouter, createWebHashHistory } from "vue-router";

const ShopHomePage = () => import("./layout/shop/ShopHomePage.vue");
const ShopMainContainer = () => import("./components/main/ShopMainContainer.vue");
const AuthLogin = () => import("./layout/authentication/AuthLogin.vue");
const AccountSettingsContainer = () => import("./components/main/AccountSettingsContainer.vue");
const UserSettings = () => import("./components/main/accountSettings/UserSettings.vue");
const OrderSettings = () => import("./components/main/accountSettings/OrderSettings.vue");
const ReturnSettings = () => import("./components/main/accountSettings/ReturnSettings.vue");

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/shop" },
      {
         path: "/shop",
         component: ShopHomePage,
         children: [
            { path: "", component: ShopMainContainer },

            {
               path: "account",
               component: AccountSettingsContainer,
               children: [
                  { path: "user", component: UserSettings },
                  { path: "orders", component: OrderSettings },
                  { path: "returns", component: ReturnSettings },
               ],
            },

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
