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
  // console.log(
  //   "-- [ router.beforeEach ]\n/ to: ",
  //   to,
  //   "\n/ from: ",
  //   from,
  //   "\n/ next: ",
  //   next
  // );
  next();
  if (to.meta.requiresAuth) {
    // store.commit('TOGGLE_LOADING_LOGIN', true);
    // let api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    // // console.log(`-- [ Check API: Check ] / api: ${api}`);
    // axios.post(api).then((response) => {
    //   store.commit('TOGGLE_LOADING_LOGIN', false);
    //   // console.log("-- [ Response: Check ] / res: ", response);
    //   if (response.data.success) {
    //     next();
    //   } else {
    //     next('/login');
    //   }
    // });
  } else {
    next();
  }
});
