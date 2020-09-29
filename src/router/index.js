import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/vLogin/index.vue';
import Dashboard from '@/views/vDashboard/index.vue';
import DashboardCreate from '@/views/vDashboardHome/index.vue';
import DashboardCreateRoomGift from '@/views/vDashboardCreateRoomGift/index.vue';
import axios from 'axios';

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
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'vDashboard',
    component: Dashboard,
    redirect: '/dashboard/home',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth) {
        const api = `${process.env.VUE_APP_HOST}/api/user/check`;
        axios.post(api).then((response) => {
          console.log(response);
          if (response.data.success) {
            next();
          } else {
            next({
              name: 'vLogin',
            });
          }
        });
      } else {
        next();
      }
    },
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
