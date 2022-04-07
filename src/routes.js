import { createRouter, createWebHistory } from "vue-router";
import TheAbout from './pages/TheAbout.vue';
import TheWorks from './pages/TheWorks.vue';
import TheContact from './pages/TheContact.vue';

const routes = [
    { path:'/', component: TheAbout, name:'home'},
    { path:'/works', component: TheWorks, name:'works'},
    { path:'/contacts', component: TheContact, name:'contacts'},
];

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
});

export default router;
