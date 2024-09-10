import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '../Views/AboutMe.vue';
import Projects from '../Views/Projects.vue';
import Skills from '../Views/Skills.vue';
import Experience from '../Views/Experience.vue';
import ContactMe from '../Views/ContactMe.vue';
import Home from '../Views/Home.vue';

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
