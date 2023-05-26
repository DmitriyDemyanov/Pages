<template>
  <section>
    <h3 v-if='showError'>No books found</h3>
    <div v-else class="wrapper-section-book container">
      <div class="wrapper-item-book d-flex justify-content-between">

        <div class="book-image"><img :src="book.image" alt="photo"></div>

        <div class="book-content fz-inter-19px">
          <div class="book-title fz-cardo-32px">{{ book.title }}</div>
          <div class="book-price">{{ iconCurrency }} {{ book.price }} {{ book.currency
          }}</div>
          <div class="book-description">{{ book.description }}</div>
          <div class="book-publisher pd">Publisher : Learning Private Limited ({{ fullDate }})</div>
          <div class="book-language pd">Language : {{ book.language }}</div>
          <div class="book-paperback pd"> Paperback : {{ book.pages }} pages</div>
          <div class="book-isbn pd"> ISBN-10 : {{ book["ISBN-10"] }}</div>
          <div class="book-dimensions pd">
            Dimensions : {{ dimensions }}
          </div>
          <div class="wrapper-btn-cart d-flex justify-content-between">
            <div class="counter-item">
              <div class="wrapper-btn-quantity">
                <button class="btn-quantity btn-increment" @click='qtyToCart("increment")'> + </button>
                <button class="btn-quantity btn-decrement" @click='qtyToCart("decrement")'> - </button>
              </div>
              <div class="qty-to-cart">
                {{ quantityBooksCart }}

              </div>
              <!-- <div class="test">{{ getCart.items.length }}</div> -->
            </div>
            <MainButton title='Add to Cart' size='full' @btn-click="addToCartDescr(book)">
              <template #prepend>
                <div class="img-cart"><img src="@/assets/images/icons/cart-dark.svg" alt="icon"></div>
              </template>
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/MainButton';
import { mapActions,mapGetters } from 'vuex';

export default {
  name: "BookDetailComponent",
  components: {
    MainButton
  },
  data() {
    return {
      book: {},
      showError: false,
      quantityBooksCart: 1
    }
  },
  mounted() {
    this.getBook(Number(this.$route.params.bookId));
  },
  computed: {
    ...mapGetters(['getBookById']),
    iconCurrency() {
      return this.book.currency === 'euro' ? '₴' : '$';
    },
    fullDate() {
      return new Date(this.book.publish).toLocaleDateString('en-UK',{ day: 'numeric',month: 'short',year: 'numeric' })
    },
    dimensions() {
      try {
        const { h,l,w,volume } = this.book.dimensions;
        return `${h} x ${l} x ${w} ${volume}`;
      } catch (e) {
        return "";
      }
    }
  },
  watch: {
    $route(to) {
      this.getBook(Number(to.params.bookId));
    }
  },
  methods: {
    ...mapActions(['addToCart','numberBooksAddToCart','toggleCart']),
    addToCartDescr(book) {
      let bookAddQty = Object.assign({},book,{ qty: this.quantityBooksCart });
      this.addToCart(bookAddQty);
      this.toggleCart(true);
    },
    qtyToCart(string) {
      if (string === 'decrement' && this.quantityBooksCart > 1) {
        this.quantityBooksCart--;
      }
      if (string === 'increment') {
        this.quantityBooksCart++;
      }
      this.numberBooksAddToCart(this.quantityBooksCart);
    },
    getBook(id) {
      this.book = this.getBookById(id);
      this.showError = !this.book;
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section-book {
  padding: 150px 0 0;
}

.book-image {
  width: calc(47% - 43px);
  background-color: #F5F8FC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 100px;

  img {
    width: 380px;
    height: 510px;
    object-fit: cover;
  }
}


.book-content {
  width: calc(53% - 43px);
  padding: 23px 0;
  color: #969AA0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.book-title {
  padding-bottom: 6px;
}

.book-price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 170%;
  color: var(--main-color-beer);
  padding-bottom: 26px;
}

.book-description {
  padding-bottom: 10px;
}

.pd {
  padding: 10px 0;
}

.wrapper-btn-cart {
  margin-top: 24px;
  width: 76%;
  height: 65px;
}

.counter-item {
  width: 26%;
  margin-right: 10px;
  border: 2px solid var(--main-color-beer);
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
}

.img-cart {
  margin-right: 13px;
  margin-bottom: 5px;
}

.wrapper-btn-quantity {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.qty-to-cart {
  margin: 0 auto;
}

.btn-quantity {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>