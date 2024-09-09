import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';  // Assuming you're using PrimeVue

import Router from "./router";



const app = createApp(App);

app.use(PrimeVue);
app.use(Router)
app.mount('#app');
