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
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(vApp),
}).$mount('#app');
