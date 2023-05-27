import Vue from 'vue';
import Vuex from 'vuex';

import DEFAULT_STATE from './default-state';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...DEFAULT_STATE,
    authorBooks: [],
    aboutAuthor: {},
    cart: {
      total: 0,
      items: [],
    },
    showCart: false,

    articlePagination: {
      currentPage: 1,
      renderPage: 3,
      lastPage: 1,
    },
    corporation: [],
    //___________________________readersBook
    readersBook: [],


    errorModal: false,
    descriptionBookById: {
      "id": 4,
      "title": "good night, irene",
      "description": "Top-shelf historical fiction delivered with wit and compassion.",
      "publisher": "Harry Potter Incorporated",
      "publish": 1685394000000,
      "language": "English",
      "ISBN-10": 9788120345799,
      "price": 72.97,
      "currency": "usd",
      "pages": 784,
      "length": 950, // minutes
      "image": "https://d1ldy8a769gy68.cloudfront.net/200/978/031/626/585/0/9780316265850.jpg",
      "ratings": {
        "count": 57,
        "value": 4
      },
      "dimensions": {
        "w": 16,
        "h": 22,
        "l": 9,
        "volume": "cm"
      }
    },

    cartDescrQty: 0,
    //keep in touch___________________________________________Contact Us Page
    keepTouchInfo: [
      {
        image: 'house',
        title: 'Visit Us :',
        address: 'No: 09a, Downtown, San Dieago, USA.',
        link: 'none'
      },
      {
        image: 'envelope',
        title: 'Drop Us :',
        address: 'support@pages.com',
        link: 'mailto:support@pages.com'
      },
      {
        image: 'phone',
        title: 'Call Us :',
        address: 'Call: 1-800-123-9999',
        link: 'tel:+18001239999 '
      },
    ],
    //_____________Frequent Questions
    oftenQuestions: [
      {
        title: 'Do you offer discounts for education? ',
        text: 'Many11111 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 1,
      },
      {
        title: 'Is Hack Producivity book available on the one stores?',
        text: 'Many22222 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 2
      },
      {
        title: 'What is Hack Productivity book about?',
        text: 'Many 333333desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 3
      },
      {
        title: 'Do you offer discounts for education?',
        text: 'Many4444444 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 4
      },
      {
        title: 'Is Hack Producivity book available on the one stores?',
        text: 'Many5555555 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 5
      },
      {
        title: 'What is Hack Productivity book about?',
        text: 'Many666666 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 6
      },
      {
        title: 'Do you offer discounts for education?',
        text: 'Many777777 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 7
      },
      {
        title: 'What is Hack Productivity book about?',
        text: 'Many 888888desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 8
      },
      {
        title: 'Where can I get Hack Productivity book?',
        text: 'Many99999 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 9
      },
      {
        title: 'Do you offer discounts for education?',
        text: 'Many1010 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 10
      },
      {
        title: 'Where can I get Hack Productivity book?',
        text: 'Many11111 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 11
      },
      {
        title: 'What is Hack Productivity book about?',
        text: 'Many121212 desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
        id: 12
      },
    ]
  },
  getters: {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    getRandomBook(state) {
      return state.randomBook;
    },
    getAuthorBookIncludes(state) {
      return [state.authorBooks[4],state.authorBooks[2]]
    },
    showCart(state) {
      return state.showCart
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
      console.log(' state.authorsBook>>',state.authorsBook)
      return state.authorsBook;
    },
    //___________________________________________OurCompanions
    getOurCompanions(state) {
      return state.corporation;
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
    getAuthorBooks(state) {
      return state.authorBooks
    },

    //__________________________________________readersBook
    getReadersBook(state) {
      return state.readersBook;
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
      const currentPage = state.articlePagination.currentPage;
      const renderPage = state.articlePagination.renderPage;


      return state.articlesItems.slice((currentPage - 1) * renderPage,renderPage * currentPage);
    },
    getNumberPage(state) {
      return state.articlePagination
    },
    //___________________________________________________
    getCart(state) {
      return state.cart;
    },

    getTotalCartQuantity(state) {
      return state.cart.items.reduce((acc,el) => acc += el.qty,0)
    },
    getTotalCartPrice(state) {
      return state.cart.total
    },

    getBookById(state) {
      return (id) => state.authorBooks.find(book => book.id === id);
    },
    getErrorComponent(state) {
      return state.errorModal
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
    //____________________________________________DEscription-Book
    getPrivilegeBookPay(state) {
      return state.privilegeBookPay;
    },
    getDescriptionBookById(state) {
      return state.descriptionBookById;
    },
    //____________________________________________keep in Touch
    getKeepTouchInfo(state) {
      return state.keepTouchInfo;
    },
    //____________________________________frequent questions
    getOfterQuestions(state) {
      return state.oftenQuestions;
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
    },

    SAVE_CART_BOOK(state,payload) {
      console.log('payload before!!!!!',payload)
      const { id,price } = payload;
      const qty = payload.qty ? payload.qty : 1
      state.cart.total = Number((state.cart.total + price * qty).toFixed(2));
      const existingBook = state.cart.items.find((el) => el.id === id);
      if (existingBook) {
        existingBook.qty += qty;
      } else {
        state.cart.items.push({ id,qty: qty });
      }

    },

    DELETE_CART_BOOK(state,payload) {
      const { id,price } = payload;
      state.cart.items = state.cart.items.filter((el) => {
        if (el.id === id) {
          console.log('state.cart.total',state.cart.total);
          state.cart.total = state.cart.total - price * el.qty;
        }
        return el.id !== id;
      });
    },
    TOGGLE_CART(state,payload) {
      state.showCart = payload;
    },
    ADD_CART_ITEM_BY_ID(state,payload) {
      state.cart.total += payload.price;
      const item = state.cart.items.find((el) => el.id === payload.id);
      item.qty++;
    },
    DELETE_CART_ITEM_BY_ID(state,payload) {
      const item = state.cart.items.find((el) => el.id === payload.id);

      item.qty--;
      state.cart.total -= payload.price;
    },
    SAVE_ARTICLES(state,payload) {
      state.articlesItems = payload;
      state.articlePagination.lastPage = Math.ceil(state.articlesItems.length / state.articlePagination.renderPage);

    },

    //_____________________________Corporation
    SAVE_CORPORATION(state,payload) {
      state.corporation = payload;
    },
    //_________________________________________________________________________
    ARTICLES_PAGE_UP(state) {
      state.articlePagination.currentPage++
    },
    ARTICLES_PAGE_DOWN(state) {
      state.articlePagination.currentPage--
    },
    //_________________________________________________________REadersBook
    SAVE_READERS_BOOK(state,payload) {
      state.readersBook = payload;
    },
    //     _______________________________________________________ERROR_MODAL
    SHOW_ERROR_MODAL(state,payload) {
      state.errorModal = payload;
    },
    SET_ERROR_MESSAGE(state,payload) {
      state.errorMessage = payload;
    },
    SAVE_BOOK_BY_ID(state,payload) {
      let book = state.authorBooks.filter((el) => el.id === payload);
      state.descriptionBookById = book[0];
    },
    SAVE_CART_DESCR(state,payload) {
      state.cartDescrQty = payload;
      console.log('payload-mutations',payload)
    }
  },

  actions: {
    createSubscribe({ commit },payload) {
      commit('INPUT_SUBSCRIBE',payload);
    },
    async fetchRandomBook({ commit,dispatch }) {
      try {

        const response = await fetch('http://localhost:3579/content/books/random');

        const book = await response.json();

        commit('SAVE_RANDOM_BOOK',book);

      } catch (err) {
        console.dir(err.message || err);
        commit('SET_ERROR_MESSAGE',err.message || err);
        dispatch('errorModal',true);
      } finally {
        console.log('TEST1')
      }
    },


    async fetchAuthorBooks({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/content/books');
        const authorBooks = await response.json();
        commit('SAVE_AUTHOR_BOOKS',authorBooks);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.message || err);
        dispatch('errorModal',true);
      }
      finally {
        console.log('TEST2')
      }
    },

    async fetchExploreLinks({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/settings/explores');
        const exploreLink = await response.json();
        commit('SAVE_EXPLORE_LINK',exploreLink);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.message || err);
        dispatch('errorModal',true)
      } finally {
        console.log('TEST3')
      }


    },
    async fetchUtilityLinks({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/settings/utility');
        const utilityLink = await response.json();
        commit('SAVE_UTILITY_LINK',utilityLink);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.stack || err);
        dispatch('errorModal',true)

      } finally {
        console.log('TEST4')
      }


    },
    async fetchAboutAuthor({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/content/author');
        const aboutAuthor = await response.json();
        commit('SAVE_ABOUT_AUTHOR',aboutAuthor);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.stack);
        dispatch('errorModal',true)
      }
      finally {
        console.log('TEST5')
      }

    },
    async fetchArticles({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/content/articles');
        const articles = await response.json();
        commit('SAVE_ARTICLES',articles);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.stack);
        dispatch('errorModal',true)
      } finally {
        console.log('TEST6')
      }


    },
    async fetchCorporations({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/content/corporations');
        const corporations = await response.json();
        commit('SAVE_CORPORATION',corporations);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.message || err);
        dispatch('errorModal',true)
      } finally {
        console.log('TEST7')
      }

    },
    async fetchReadersBook({ commit,dispatch }) {
      try {
        const response = await fetch('http://localhost:3579/content/testimonials');
        const REadersBook = await response.json();
        commit('SAVE_READERS_BOOK',REadersBook);
      } catch (err) {
        commit('SET_ERROR_MESSAGE',err.message || err);
        dispatch('errorModal',true);
      }
      finally {
        console.log('TEST8')
      }



    },
    addToCart({ commit },payload) {
      commit('SAVE_CART_BOOK',payload);
    },
    removeItemById({ commit },id) {
      const priceBookById = this.state.authorBooks.find((el) => el.id === id);
      console.log('priceBookById',priceBookById.price)
      commit('DELETE_CART_BOOK',{ id,price: priceBookById.price });
    },
    toggleCart({ commit },payload) {
      commit('TOGGLE_CART',payload);
    },
    addItemCartById({ commit },id) {
      const itemBook = this.state.authorBooks.find((el) => el.id === id);
      const payload = { price: itemBook.price,id }
      commit('ADD_CART_ITEM_BY_ID',payload)
    },
    deleteItemCartById({ commit },id) {
      const itemBook = this.state.authorBooks.find((el) => el.id === id);
      const payload = { price: itemBook.price,id };
      commit('DELETE_CART_ITEM_BY_ID',payload);
      console.log('DELETE-ID',itemBook.price,id);
    },
    //_____________________________________ARTICLES
    nextPage({ commit }) {
      commit('ARTICLES_PAGE_UP')
    },
    prevPage({ commit }) {
      commit('ARTICLES_PAGE_DOWN');
    },
    errorModal({ commit },payload) {
      commit('SHOW_ERROR_MODAL',payload);
    },
    bookDescription({ commit },payload) {
      commit('SAVE_BOOK_BY_ID',payload)
    },
    numberBooksAddToCart({ commit },payload) {
      commit('SAVE_CART_DESCR',payload);
      console.log('payload! number===',payload)
    },
  },

  modules: {},
});
