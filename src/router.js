import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import ContactMe from './components/ContactMe.vue';
import Home from './components/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about-me', component: AboutMe },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/experience', component: Experience },
    { path: '/contact-me', component: ContactMe },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
