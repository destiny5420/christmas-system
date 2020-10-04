import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: {
      global: false,
    },
  },
  getters: {},
  mutations: {
    TOGGLE_LOADING_GLOBAL: function(state, data) {
      state.isLoading.global = data;
    },
  },
  actions: {},
  modules: {},
});
