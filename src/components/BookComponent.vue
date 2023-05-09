<template>
  <div class="wrapper-item">
    <div class="img-item d-flex align-items-center justify-content-center"><img :src="book.image" alt="photo">
      <div class="icon-img" v-show="(book.type === 'audio')"><img src="@/assets/images/icons/Audio-icon.png" alt=""></div>
      <div class="icon-img" v-show="(book.type === 'gram')"><img src="@/assets/images/icons/Mockup-icon.png" alt=""></div>
    </div>
    <div class="wrapper-price d-flex align-items-center justify-content-between">
      <div class="title-book fz-cardo-32px">{{ book.title }}</div>
      <div class="price-book fz-inter-22px">{{ book.price }}</div>
    </div>
    <div class="description-book fz-inter-19px">{{ book.description }}
    </div>
    <div class="printed-book d-flex align-items-center fz-cardo-24px">
      <div class="circle"></div> Printed Books
    </div>
    <MainButton title='Order Today' size="big" reverse='reverse' @btn-click='onClick(book)' />
    <div class="tests">{{ getCart }}</div>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton';
import { mapActions,mapGetters } from 'vuex';

export default {
  name: 'BookComponent',
  components: {
    MainButton,
  },
  props: {
    book: {
      type: Object,
      require: true,
    }
  },
  computed: {
    ...mapGetters(['getCart']),
  },
  methods: {
    ...mapActions(['addToCart']),
    onClick(book) {
      this.addToCart(book);
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper-item {
  width: 401px;

}

.img-item {
  background-color: #F5F8FC;
  padding: 50px;
  position: relative;
}

.icon-img {
  position: absolute;
  bottom: 12px;
  right: 13px;
}

.wrapper-price {
  padding-top: 21px;
}


.description-book {
  color: #969AA0;
  padding-top: 10px;
  padding-bottom: 24px;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--main-color-beer);
  margin-right: 13px;
}

.printed-book {
  color: var(--main-color-dark);
  padding-bottom: 25px;
}
</style>