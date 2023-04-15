import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footerLink: ['home','about us', 'services', 'appointments', 'blog', 'contact us', 'start here', '404 not found', 'password protected', 'licenses', 'changelog'],
  },
  getters: {
    getFooterLink(state) {
      return state.footerLink;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
