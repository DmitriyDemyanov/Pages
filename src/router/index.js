import VueRouter from 'vue-router';
import Vue from 'vue';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/About',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/Services',
    name: 'services',
    component: ServicesPage,
  },
  {
    path: '/Contact',
    name: 'contact',
    component: ContactPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
