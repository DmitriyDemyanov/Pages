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
    authorsBook: [
      {
        title: 'Atomic One’s',
        subtitle: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
        img: 'Book-Atomic'
       
      },
      {
        title: 'The Dark Light',
        subtitle: 'Lorem Ipsum willing araise  alteration in some form Many variations of passages of. ',
         img: 'Book-2-Light'
      }
    ],
    ourCompanions: [
      {
        img: 'Item-logo_1',
        title: 'Amazen Corp',
        text: 'A long established fact that a who looking at its layout.',
      },
       {
        img: 'Item-logo_2',
        title: 'Megan Books',
        text: 'A long established fact that a who looking at its layout.',
      },
        {
        img: 'Item-logo_3',
        title: 'Los Books',
        text: 'A long established fact that a who looking at its layout.',
      },
         {
        img: 'Item-logo_4',
        title: 'Urban Lib',
        text: 'A long established fact that a who looking at its layout.',
      },
    ],
    articlesResources: [
      {
        img: 'photo-card_1',
        title: 'The energy efficiency offers hydrotherapy or swim',
        text: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        date: '23.05.2022',
        link: '#',
      },
       {
        img: 'photo-card_2',
        title: 'Release of Letraset sheets tools containing  passages',
        text: 'Lorem Ipsum hiter of that using making it look like others readable will get end.The point of using ',
        date: '30.08.2022',
        link: '#',
      },
        {
        img: 'photo-card_3',
        title: 'The energy efficiency offers hydrotherapy or swim',
        text:  'Lorem Ipsum hiter of that using making The point of usingit look like others readable will get end.',
        date: '12.04.2023',
        link: '#',
      },
    ],
  },
  getters: {
    getExploreLink(state) {
      return state.exploreLink;
    },
    getUtilityPages(state) {
      return state.utilityPages;
    },
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
    getArticlesResources(state) {
      return state.articlesResources;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
