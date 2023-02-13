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
const ProductListContainer = () =>
   import("./components/main/productsList/ProductListContainer.vue");
const ProductList = () =>
   import("./components/main/productsList/ProductList.vue");

const router = createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: "/", redirect: "/shop" },
      {
         name: "homepage",
         path: "/shop",
         component: ShopHomePage,
         children: [
            { name: "contentHomePage", path: "", component: ShopMainContainer },

            {
               name: "account",
               path: "account",
               component: AccountSettingsContainer,
               redirect: "/shop/account/user",
               children: [
                  { name: "user", path: "user", component: UserSettings },
                  { name: "orders", path: "orders", component: OrderSettings },
                  {
                     name: "returns",
                     path: "returns",
                     component: ReturnSettings,
                  },
               ],
            },

            {
               name: "categories",
               path: "categories/:category",
               component: ProductListContainer,
               props: true,
               children: [
                  {
                     name: "underCategories",
                     path: ":underCategory",
                     component: ProductListContainer,
                     props: true,
                  },
               ],
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
