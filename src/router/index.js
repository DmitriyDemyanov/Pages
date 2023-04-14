import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from '@/pages/MainPage';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
];

const router = new VueRouter({
  routes
});

export default router;
