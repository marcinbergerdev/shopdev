import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import App from "./App.vue";

import { Icon } from "@iconify/vue";
import BaseButton from "./cards/BaseButton.vue";
import BaseMenu from "./cards/BaseMenu.vue";
import BaseProduct from "./cards/BaseProduct.vue";
import BaseModal from "./cards/BaseModal.vue";
import BaseOrder from "./cards/BaseOrder.vue";
import BaseForm from "./cards/BaseForm.vue";
import BaseLoadingSpinner from "./cards/BaseLoadingSpinner.vue";

import router from "./router.js";

const pinia = createPinia();
const app = createApp(App);

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDYwVDG6WXDoycvrgCU1l3YT2KpU7wZRRU",
   authDomain: "shopex-dev-8067f.firebaseapp.com",
   projectId: "shopex-dev-8067f",
   storageBucket: "shopex-dev-8067f.appspot.com",
   messagingSenderId: "333074929940",
   appId: "1:333074929940:web:07c91efdcd5d9035a20a01",
};

// Initialize Firebase
initializeApp(firebaseConfig);

app.component("Icon", Icon);
app.component("BaseButton", BaseButton);
app.component("BaseMenu", BaseMenu);
app.component("BaseProduct", BaseProduct);
app.component("BaseModal", BaseModal);
app.component("BaseOrder", BaseOrder);
app.component("BaseForm", BaseForm);
app.component("BaseLoadingSpinner", BaseLoadingSpinner);

app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);

app.mount("#app");
