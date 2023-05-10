<template>
  <div class="d-flex justify-content-between">

    <div class="item-wrapper d-flex">

      <div class="item-img d-flex justify-content-center align-items-center">
        <img :src="parsedBook.image" alt="photo">
      </div>

      <div class="wrapper-content ">

        <div class="item-title fz-cardo-24px">{{ parsedBook.title }}</div>
        <div class="item-price">${{ (parsedBook.price * book.qty).toFixed(2) }} {{ parsedBook.currency }}</div>
        <div class="item-remove" @click='getId(book.id)'> Remove </div>

      </div>
    </div>

    <div class="item-counter d-flex  align-items-center">{{ book.qty }}</div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BookCartItemComponent',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getTotalCartQuantity','getCart','getBookById']),
    parsedBook() {
      const { id } = this.book;
      return this.getBookById(id);
    }
  },

  methods: {
    ...mapActions(['removeItemById']),
    getId(id) {
      console.log('ready__id',id);
      this.removeItemById(id);

      
    },
  }

}

</script>

<style lang='scss' scoped>
.body-modal {
  width: 100%;
  max-height: 500px;
  padding: 64px 76px;
}

.item-img {
  width: 130px;
  height: 176px;
  background: #F9FBFF;
  border: 4px solid #DBE1E9;

  img {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    object-fit: cover;
  }
}

.wrapper-content {
  padding-left: 40px;
}

.item-title {
  color: var(--main-color-dark);
  line-height: 52px;
}

.item-price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #969AA0;
}

.item-remove {
  margin-top: 44px;
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  color: #1B3764;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    color: var(--main-color-beer);
  }
}

.item-counter {
  width: 120px;
  height: 60px;
  background: #F9F9F9;
  border: 1px solid #E8E8E8;
  padding-left: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #969AA0;
}
</style>