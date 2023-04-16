import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exploreLink: [
      'home',
      'about us',
      'services',
      'appointments',
      'blog',
      'contact us',
    ],
    utilityPages: [
      'start here',
      'style guide',
      '404 not found',
      'password protected',
      'licenses',
      'changelog',
    ],
  },
  getters: {
    getExploreLink(state) {
      return state.exploreLink;
    },
    getUtilityPages(state) {
      return state.utilityPages;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
