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
     chapterIncludes: [
      {
        title: 'Chapter- 01   Get Started Intro',
        text: 'You can double your knowledge by reading this ever needed book that can last a lifetime.',
        numberPage: '106pages',
        quantity: '1 Hour 15 mins',
      },
       {
        title: 'Chapter- 02   Create a Massive Content',
        text: 'It will help to improve your life career with the perfect and needed knowledge about your life.',
        numberPage: '180pages',
        quantity: '1 Hour 30 mins',
      },
        {
        title: 'Chapter- 03   Maintaining the Creative Arcs',
        text: ' We wanted to create an easy, convenient way for you to get your books & support.',
        numberPage:'250pages',
        quantity: ' 1 Hour 15 mins',
      },
         {
        title: 'Chapter- 04   The Conclusion',
        text: 'Promote your book via Pages shop to support your writing & reading career.',
        numberPage: '175pages',
        quantity: '1 Hour 45 mins',
      },
    ]

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
      getChapterIncludes(state) {
      return state.chapterIncludes;
    },
    getWhatYouLearnItems(state) {
      return state.whatYouLearnItems;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
