import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import App from "./App.vue";

import { Icon } from "@iconify/vue";
import BaseButton from "./cards/BaseButton.vue";
import BaseMenu from "./cards/BaseMenu.vue";
import BaseProduct from "./cards/BaseProduct.vue";
import BaseModal from "./cards/BaseModal.vue";
import BaseOrder from "./cards/BaseOrder.vue";
import BaseForm from "./cards/BaseForm.vue";

import router from "./router.js";

const pinia = createPinia();
const app = createApp(App);

app.component("Icon", Icon);
app.component("BaseButton", BaseButton);
app.component("BaseMenu", BaseMenu);
app.component("BaseProduct", BaseProduct);
app.component("BaseModal", BaseModal);
app.component("BaseOrder", BaseOrder);
app.component("BaseForm", BaseForm);

app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);

app.mount("#app");
