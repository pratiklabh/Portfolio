import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';  // Assuming you're using PrimeVue




const app = createApp(App);

app.use(PrimeVue);
app.mount('#app');
