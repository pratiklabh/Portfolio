import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import './assets/global.css';
import Router from "./Router/router.js";

const app = createApp(App);

app.use(PrimeVue);
app.use(Router)
app.mount('#app');
