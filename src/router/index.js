import VueRouter from 'vue-router';
import Vue from 'vue';

import HomePage from '@/pages/HomePage';
import AboutAuthorPage from '@/pages/AboutAuthorPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import OurStorePage from '@/pages/OurStorePage';

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
    component: AboutAuthorPage,
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
  {
    path: '/Our-Store',
    name: 'Our-Store',
    component: OurStorePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
