import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeDetailsWelcome: [
      {
        title: 'pages:',
        subtitle: '586pages',
      },
      {
        title: 'length:',
        subtitle: '10 Hours',
      },
      {
        title: 'ratings:',
        subtitle: '4.5/5 (305 ratings)',
      },
    ],
  },
  getters: {
    getDetailsHomeWelcome(state) {
      return state.homeDetailsWelcome;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
