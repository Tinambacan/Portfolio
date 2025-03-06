import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import TechStackPage from '../views/TechStack.vue';
import ContactPage from '../views/Contact.vue';
import ProjectPage from '../views/Project.vue'



const routes = [
    { path: '/', component: HomePage },
    { path: '/tech-stack', component: TechStackPage },
    { path: '/project', component: ProjectPage },
    { path: '/contact', component: ContactPage },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
