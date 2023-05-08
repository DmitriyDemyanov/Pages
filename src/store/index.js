import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Site Settings
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
    // Site Content
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
    whatYouLearnItems: [
      {
        number: '01',
        text: 'Use HDFS & Map Reduce for storing & analyzing data at scale.'
      },
      {
        number: '02',
        text: 'Consume streaming data using Spark Streaming, Flink, and Storm.'
      },
      {
        number: '03',
        text: 'Choose an appropriate data storage technology for your application'
      },
      {
        number: '04',
        text: 'Analyze non-relational data using HBase, Cassandra, and MongoDB.'
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
        numberPage: '250pages',
        quantity: ' 1 Hour 15 mins',
      },
      {
        title: 'Chapter- 04   The Conclusion',
        text: 'Promote your book via Pages shop to support your writing & reading career.',
        numberPage: '175pages',
        quantity: '1 Hour 45 mins',
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
        text: 'Lorem Ipsum hiter of that using making The point of usingit look like others readable will get end.',
        date: '12.04.2023',
        link: '#',
      },
    ],
    //Author about page
    authorData: [
      { Country: "United Kingdom" },
      { Language: 'English' },
      { Genre: 'Historiography' },
      { 'Publication date': '1991' },
      {
        'Share us on': {
          facebook: 'facebook.com',
          twitter: 'twitter.com',
          'link-in': 'link-in.com',
        },
      },
    ],
    author: {
      Country: "United Kingdom",
      Language: 'English',
      Genre: 'Historiography',
      ['Publication date']: '1991',
      links: {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        'linkedin-in': 'linkedin-in.com',
      }
    },
    inputSubscribe: '',
    myStoreBook: [
      {
        title: 'Atomic Dark',
        img: 'book-1',
        price: '$23.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
      },
      {
        title: 'The Dark Light',
        img: 'book-1',
        price: '$32.45',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
      },
      {
        title: 'Atomic One’s',
        img: 'book-1',
        price: '$56.86',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
      },
      {
        title: 'Atomic Light',
        img: 'book-1',
        price: '$28.76',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
      },
      {
        title: 'Atomic One’s',
        img: 'book-1',
        price: '$12.89',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
      },
      {
        title: 'The Dark Light',
        img: 'book-1',
        price: '$26.43',
        description: 'Many variations of passages of Lorem Ipsum willing araise  alteration in some form.',
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
    }
  },
  mutations: {
    INPUT_SUBSCRIBE(state,payload) {
      state.inputSubscribe = payload;
    }

  },
  actions: {
    createSubscribe({ commit },payload) {
      commit('INPUT_SUBSCRIBE',payload);
    }
  },
  modules: {},
});
