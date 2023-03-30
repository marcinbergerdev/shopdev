import { createRouter, createWebHashHistory } from "vue-router";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const ShopHomePage = () => import("./layout/shop/ShopHomePage.vue");
const ShopMainContainer = () =>
   import("./components/main/ShopMainContainer.vue");
const AuthLogin = () => import("./layout/authentication/AuthLogin.vue");
const AuthRegistration = () =>
   import("./layout/authentication/AuthRegistration.vue");
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
const FavoriteList = () =>
   import("./components/main/favorite/FavoriteList.vue");

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
               meta: { requiresAuth: true },
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

            {
               path: "favorite",
               component: FavoriteList,
               meta: { requiresAuth: true },
            },
            {
               path: "cart",
               component: UserOrderList,
               meta: { requiresAuth: true },
            },
            { path: "register", component: AuthLogin },
            { path: "service", component: ReturnSettings },
         ],
      },
      { name: "login", path: "/login", component: AuthLogin },
      { name: "register", path: "/register", component: AuthRegistration },
      {
         path: "/:notFound(.*)",
         component: AuthLogin,
      },
   ],
});

const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
         getAuth(),
         (user) => {
            removeListener();
            resolve(user);
         },
         reject
      );
   });
};

router.beforeEach(async (to, __, next) => {
   if (to.meta.requiresAuth) {
      if (!(await getCurrentUser())) {
         return next("/login");
      }
   }

   return next();
});

export default router;
