<template>
  <section>
    <MainModalComponent title='CART :' @close-modal='closeModal'>

      <template #modal-body>
        <div class="item-book" v-if="getCart.items.length">
          <BookCartItemComponent v-for="(book,ind) in getCart.items" :key="ind" :book='book' />
        </div>

        <div class="cart-empty" v-else>Your CART IS EMPTY</div>

      </template>


      <template #modal-footer>
        <div class="wrapper-total d-flex justify-content-between">
          <div class="total-title fz-cardo-24px">Sub-Total</div>
          <div class="total-price">${{ getCart.total.toFixed(2) }} USD </div>
        </div>
        <MainButton title='Continue to Checkout' size='full' />
      </template>
    </MainModalComponent>
  </section>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';


import MainModalComponent from '@/components/MainModalComponent';
import BookCartItemComponent from '@/components/BookCartItemComponent';
import MainButton from '@/components/MainButton';
export default {
  name: 'CartComponent',
  components: {
    MainModalComponent,
    BookCartItemComponent,
    MainButton,
  },
  computed: {
    ...mapGetters(['getCart']),
  },
  methods: {
    ...mapActions(['toggleCart']),
    closeModal() {
      this.toggleCart(false);
    },
  },
}
</script>

<style lang='scss' scoped>
.cart-empty {
  padding: 50px 0;
  text-align: center;
  font-size: 24px;
  color: var(--main-color-dark);
}

.item-book {
  max-height: 50vh;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 15px;
  background-color: var(--main-color-beer);
}
::-webkit-scrollbar-track {
  background: var(--main-color-dark);
}
::-webkit-scrollbar-thumb {
  background-color: var(--main-color-beer);
  border: 1px solid rgba(27, 55, 100, 0.5);
}
</style>