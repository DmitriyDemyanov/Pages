<template>
  <section>
    <HeaderTitleStandard title='My Store' color='light'
      subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.' />

    <div class="wrapper-section-book container">
      <div class="wrapper-item-book d-flex justify-content-between">

        <div class="book-image"><img :src="getDescriptionBookById.image" alt="photo"></div>

        <div class="book-content fz-inter-19px">
          <div class="book-title fz-cardo-32px">{{ getDescriptionBookById.title }}</div>
          <div class="book-price">{{ iconCurrency }} {{ getDescriptionBookById.price }} {{ getDescriptionBookById.currency
          }}</div>
          <div class="book-description">{{ getDescriptionBookById.description }}</div>
          <div class="book-publisher pd">Publisher : Learning Private Limited ({{ fullDate }})</div>
          <div class="book-language pd">Language : {{ getDescriptionBookById.language }}</div>
          <div class="book-paperback pd"> Paperback : {{ getDescriptionBookById.pages }} pages</div>
          <div class="book-isbn pd"> ISBN-10 : {{ getDescriptionBookById["ISBN-10"] }}</div>
          <div class="book-dimensions pd">
            Dimensions : {{ getDescriptionBookById.dimensions.h }} x
            {{ getDescriptionBookById.dimensions.l }} x
            {{ getDescriptionBookById.dimensions.w }} {{ getDescriptionBookById.dimensions.volume }}
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

            </div>
            <MainButton title='Add to Cart' size='full' @btn-click="addToCartDescr(getDescriptionBookById)">
              <template #prepend>
                <div class="img-cart"><img src="@/assets/images/icons/cart-dark.svg" alt="icon"></div>
              </template>
            </MainButton>
          </div>
        </div>
      </div>

      <div class="wrapper-btn-description d-flex justify-content-between">
        <button class="product-btn size-btn-description fz-cardo-18px" :class='{ "active-btn": this.showText }'
          @click='onActive("product")'>Product
          Description</button>
        <button class='additional-btn size-btn-description fz-cardo-18px' :class='{ "active-btn": !this.showText }'
          @click='onActive("info")'>Additional
          Info</button>
      </div>

      <div class="content-product text-center" v-if="this.showText">
        <div class="product-title fz-cardo-32px">Do you offer discounts for education?
        </div>
        <div class="product-description fz-inter-19px">There are many variations of passages of Lorem Ipsum available, but
          the majority
          have suffered alteration in some form, bypassed injected humour, or random i sed words which don't look even
          slightly believable.</div>
      </div>

      <div class="content-additional text-center" v-else>
        <div class="additional-title fz-cardo-32px">Is this book for me?
          <div class="additional-description fz-inter-19px">If you are going to use a passage
            of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to
            repeat predefined chunks as necessary.</div>

        </div>
      </div>
    </div>

    <div class="wrapper-footer">
      <div class="container footer-content d-flex justify-content-between">
        <div class="item-content" v-for="(el,ind) in getPrivilegeBookPay" :key='ind'>
          <div class="image-item d-flex justify-content-center align-items-center"><img
              :src="require(`@/assets/images/icons/Icon-${el.image}.svg`)" alt=""></div>
          <div class="title-item fz-cardo-32px">{{ el.title }}</div>
          <div class="text-item fz-inter-19px">{{ el.text }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard'
import MainButton from '@/components/MainButton';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'DescriptionBookPage',
  components: {
    HeaderTitleStandard,
    MainButton,
  },
  data() {
    return {
      showText: true,
      quantityBooksCart: 1,
    }
  },
  computed: {
    ...mapGetters(['getPrivilegeBookPay','getDescriptionBookById','getCart']),
    iconCurrency() {
      return this.getDescriptionBookById.currency === 'euro' ? '₴' : '$';
    },
    fullDate() {
      return new Date(this.getDescriptionBookById.publish).toLocaleDateString('en-UK',{ day: 'numeric',month: 'short',year: 'numeric' })
    },



  },
  methods: {
    ...mapActions(['addToCart','numberBooksAddToCart']),
    onActive(string) {
      if (string === 'info') {
        this.showText = false;
      }
      else {
        this.showText = true;
      }
    },
    addToCartDescr(book) {
      this.addToCart(book);

    },
    qtyToCart(string) {
      if (string === 'decrement' && this.quantityBooksCart > 1) {
        this.quantityBooksCart--
      }
      if (string === 'increment') {
        this.quantityBooksCart++
      }
      this.numberBooksAddToCart(this.quantityBooksCart);
    }

  }

}
</script>

<style lang='scss' scoped>
.wrapper-section-book {
  padding: 150px 0;
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

.wrapper-btn-description {
  width: 50%;
  height: 65px;
  margin: 120px auto 48px;
}

.size-btn-description {
  width: calc(50% - 25px);
  background: #F5F8FC;
  border: 1px solid #E8ECF2;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: var(--main-color-dark);
  }
}

.text-center {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.wrapper-footer {
  width: 100%;
  height: 385px;
  padding: 85px 0;
  background-color: var(--main-color-beer);
}

.item-content {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-color-dark);
}

.image-item {
  width: 80px;
  height: 80px;
  background-color: var(--main-color-dark);
  margin-bottom: 19px;
}

.text-item {
  margin-top: 10px;
  color: var(--main-color-dark);
  text-align: center;
}

.active-btn {
  background-color: var(--main-color-dark);
  color: #fff;
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