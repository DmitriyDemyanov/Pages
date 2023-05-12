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
    }
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
    getAuthorBooks(state) {
      return state.authorBooks
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
    }

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
      const { id,price } = payload;
      state.cart.total = Number((state.cart.total + price).toFixed(2));
      const existingBook = state.cart.items.find((el) => el.id === id);
      if (existingBook) {
        existingBook.qty++;
      } else {
        state.cart.items.push({ id,qty: 1 });
      }

    },

    DELETE_CART_BOOK(state,payload) {
      const { id,price } = payload;
      state.cart.items = state.cart.items.filter((el) => {
        if (el.id === id) {
          console.log('state.cart.total',state.cart.total);
          console.log(' el______________',el);
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
      console.log(state.articlesItems.length);
      console.log(state.articlePagination);
      console.log('payload>>>',payload)
    },

    //_________________________________________________________________________
    ARTICLES_PAGE_UP(state) {
      state.articlePagination.currentPage++
    },
    ARTICLES_PAGE_DOWN(state) {
      state.articlePagination.currentPage--
    },

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
      commit('SAVE_UTILITY_LINK',utilityLink);

    },
    async fetchAboutAuthor({ commit }) {
      const response = await fetch('http://localhost:3579/content/author');
      const aboutAuthor = await response.json();
      console.log('aboutAuthor---',aboutAuthor);
      commit('SAVE_ABOUT_AUTHOR',aboutAuthor)
    },
    async fetchArticles({ commit }) {
      const response = await fetch('http://localhost:3579/content/articles');
      const articles = await response.json();
      commit('SAVE_ARTICLES',articles);

    },
    addToCart({ commit },payload) {
      console.log('payload!!!!!!!!',payload);
      commit('SAVE_CART_BOOK',payload);
    },
    removeItemById({ commit },id) {
      const priceBookById = this.state.authorBooks.find((el) => el.id === id);
      console.log('priceBookById',priceBookById.price)
      commit('DELETE_CART_BOOK',{ id,price: priceBookById.price });
    },
    toggleCart({ commit },payload) {
      commit('TOGGLE_CART',payload)
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

  },

  modules: {},
});
