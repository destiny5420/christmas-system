import Vue from 'vue';
import vApp from '@/views/vApp/index.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faTimes,
  faChevronRight,
  faGift,
  faCog,
  faExclamation,
  faSignOutAlt,
  faBars,
  faHashtag,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);

library.add(
  faUserSecret,
  faTimes,
  faChevronRight,
  faGift,
  faCog,
  faExclamation,
  faSignOutAlt,
  faBars,
  faHashtag,
  faPlus,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(vApp),
}).$mount('#app');

// router goalkeeper
router.beforeEach((to, from, next) => {
  // console.log('-- [ router.beforeEach ]\n/ to: ', to, '\n/ from: ', from, '\n/ next: ', next);
  next();
  // *** Plan A ***
  // if (to.matched[0].name === 'vDashboard') {
  //   if (to.matched.some((record) => record.meta.requiresAuth)) {
  //     const api = `${process.env.VUE_APP_HOST}/api/user/check`;
  //     axios.post(api).then((response) => {
  //       console.log(response.data);
  //       if (response.data.success === false) {
  //         next({
  //           name: 'vLogin',
  //         });
  //       } else {
  //         next();
  //       }
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }

  // *** Plan B ***
  // if (to.meta.requiresAuth) {
  //   // next('/login');
  //   const api = `${process.env.VUE_APP_HOST}/api/user/check`;

  //   axios.post(api).then((response) => {
  //     console.log(response.data);
  //     if (response.data.success) {
  //       next();
  //     } else {
  //       next({
  //         name: 'vLogin',
  //       });
  //     }
  //   });
  // } else {
  //   next();
  // }
});
