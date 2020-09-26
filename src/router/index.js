import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/vLogin/index.vue';
import Dashboard from '@/views/vDashboard/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'vLogin',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'vDashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
