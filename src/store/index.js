import Vue from 'vue';
import Vuex from 'vuex';

import DEFAULT_STATE from './default-state';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...DEFAULT_STATE,
    authorBooks: [],
    aboutAuthor: {},
  },
  getters: {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    getRandomBook(state) {
      return state.randomBook;
    },
    getAuthorBookIncludes(state) {
      return [state.authorBooks[4],state.authorBooks[2]]
    },
    //>>>>>>>>>>>>>>>>>

    getExploreLink(state) {
      return state.exploreLink;
    },
    getUtilityLinks(state) {
      return state.utilityLinks;
    },
    getAboutAuthor(state) {
      return state.aboutAuthor;
    },

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    getDetailsHomeWelcome(state) {
      return state.homeDetailsWelcome;
    },
    getDetailsAuthorsBook(state) {
      return [state.homeDetailsWelcome[0],state.homeDetailsWelcome[1]]
    },
    getAuthorsBook(state) {
      return state.authorsBook;
    },
    getOurCompanions(state) {
      return state.ourCompanions;
    },
    getChapterIncludes(state) {
      return state.chapterIncludes;
    },
    getWhatYouLearnItems(state) {
      return state.whatYouLearnItems;
    },
    getArticlesResources(state) {
      return state.articlesResources;
    },
    getAuthorData(state) {
      return state.author;
    },

    //_____________________________________________

    getInputTestSubscribe(state) {
      return state.inputSubscribe;
    },
    //______________________________________myStore
    getMyStoreBook(state) {
      return state.myStoreBook
    },
    //_________________________________________articles
    getArticlesItems(state) {
      return state.articlesItems;
    },



  },
  mutations: {
    INPUT_SUBSCRIBE(state,payload) {
      state.inputSubscribe = payload;
    },
    SAVE_RANDOM_BOOK(state,payload) {
      state.randomBook = payload
    },
    SAVE_AUTHOR_BOOKS(state,payload) {
      state.authorBooks = payload;
    },
    SAVE_EXPLORE_LINK(state,payload) {
      state.exploreLink = payload;
    },
    SAVE_UTILITY_LINK(state,payload) {
      state.utilityLinks = payload;
    },
    SAVE_ABOUT_AUTHOR(state,payload) {
      state.aboutAuthor = payload;
    }
  },

  actions: {
    createSubscribe({ commit },payload) {
      commit('INPUT_SUBSCRIBE',payload);
    },
    async fetchRandomBook({ commit }) {
      const response = await fetch('http://localhost:3579/content/books/random');
      console.log('Fetch Random',response);
      const book = await response.json();
      console.log('Book',book);
      commit('SAVE_RANDOM_BOOK',book);
    },
    async fetchAuthorBooks({ commit }) {
      const response = await fetch('http://localhost:3579/content/books');
      const authorBooks = await response.json();
      commit('SAVE_AUTHOR_BOOKS',authorBooks);
    },
    async fetchExploreLinks({ commit }) {
      const response = await fetch('http://localhost:3579/settings/explores');
      const exploreLink = await response.json();
      commit('SAVE_EXPLORE_LINK',exploreLink)

    },
    async fetchUtilityLinks({ commit }) {
      const response = await fetch('http://localhost:3579/settings/utility');
      const utilityLink = await response.json();
      commit('SAVE_UTILITY_LINK',utilityLink)

    },
    async fetchAboutAuthor({ commit }) {
      const response = await fetch('http://localhost:3579/content/author');
      const aboutAuthor = await response.json();
      console.log('aboutAuthor---',aboutAuthor);
      commit('SAVE_ABOUT_AUTHOR',aboutAuthor)
    }
  },

  modules: {},
});
