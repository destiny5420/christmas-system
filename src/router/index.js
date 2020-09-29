import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/vLogin/index.vue';
import Dashboard from '@/views/vDashboard/index.vue';
import DashboardCreate from '@/views/vDashboardHome/index.vue';
import DashboardCreateRoomGift from '@/views/vDashboardCreateRoomGift/index.vue';

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
    redirect: '/dashboard/home',
  },
  {
    path: '/dashboard',
    name: 'vDashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'vDashboardHome',
        component: DashboardCreate,
        meta: { requiresAuth: true },
      },
      {
        path: 'create-room-gift',
        name: 'vDashboardCreateRoomGift',
        component: DashboardCreateRoomGift,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
