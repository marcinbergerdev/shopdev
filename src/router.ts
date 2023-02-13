import { createRouter, createWebHashHistory } from "vue-router";

const ShopHomePage = () => import("./layout/shop/ShopHomePage.vue");
const ShopMainContainer = () =>
   import("./components/main/ShopMainContainer.vue");
const AuthLogin = () => import("./layout/authentication/AuthLogin.vue");
const AccountSettingsContainer = () =>
   import("./components/main/AccountSettingsContainer.vue");
const UserSettings = () =>
   import("./components/main/accountSettings/UserSettings.vue");
const OrderSettings = () =>
   import("./components/main/accountSettings/OrderSettings.vue");
const ReturnSettings = () =>
   import("./components/main/accountSettings/ReturnSettings.vue");
const UserOrderList = () =>
   import("./components/main/userOrders/UserOrdersList.vue");
<<<<<<< HEAD
const ProductListContainer = () =>
   import("./components/main/productsList/ProductListContainer.vue");
const ProductList = () =>
   import("./components/main/productsList/ProductList.vue");
=======
>>>>>>> main

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
               redirect: "/shop/account/user",
               children: [
                  { path: "user", component: UserSettings },
                  { path: "orders", component: OrderSettings },
                  { path: "returns", component: ReturnSettings },
               ],
            },

            {
               path: "categories/:category",
               component: ProductListContainer,
               children: [
                  {
                     path: ":underCategory",
                     component: ProductListContainer,
                     props: true,
                  },
               ],
               props: true
            },

            { path: "favorite", component: AuthLogin },

            { path: "cart", component: UserOrderList },

            { path: "service", component: AuthLogin },

            { path: "order", component: AuthLogin },
            { path: "register", component: AuthLogin },

            { path: "order1", component: AuthLogin },

            { path: "service", component: AuthLogin },
         ],
      },
   ],
});

export default router;
