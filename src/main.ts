import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

import { Icon } from "@iconify/vue";
import BaseButton from './cards/BaseButton.vue';
import BaseMenu from './cards/BaseMenu.vue';

import router from './router.js';

const pinia = createPinia();
const app = createApp(App);

app.component('Icon', Icon);
app.component('BaseButton', BaseButton);
app.component('BaseMenu', BaseMenu);

app.use(router);
app.use(pinia);

app.mount('#app')


