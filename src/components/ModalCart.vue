<template>
  <section class="modal-wrapper-bg">

    <div class="modal-window">
      <div class="header-modal d-flex align-items-center justify-content-between">
        <div class="title-modal">Your Cart</div>
        <div class="cross">
          <div class="bar-right"></div>
          <div class="bar-left"></div>
        </div>
      </div>
      <div class="body-modal d-flex justify-content-between" v-if="getTotalCartQuantity">

        <div class="item-wrapper d-flex">

          <div class="item-img d-flex justify-content-center align-items-center">
            <img :src="getCart.image" alt="photo">
          </div>

          <div class="wrapper-content ">

            <div class="item-title fz-cardo-24px">{{ getCart.title }}</div>
            <div class="item-price">${{ getCart.priceItem.toFixed(2) }} USD</div>
            <div class="item-remove" @click='get_id()' > Remove </div>

          </div>
        </div>

        <div class="item-counter d-flex  align-items-center">{{ getTotalCartQuantity }}</div>
      </div>

      <div class="cart-empty" v-else>Your CART IS EMPTY</div>

      <div class="footer-modal">
        <div class="wrapper-total d-flex justify-content-between">
          <div class="total-title fz-cardo-24px">Sub-Total</div>
          <div class="total-price">${{ getCart.total.toFixed(2) }} USD </div>
        </div>
        <MainButton title='Continue to Checkout' size='full' />
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from "@/components/MainButton";
import { mapGetters } from 'vuex';
export default {
  name: 'ModalCart',
  components: {
    MainButton,
  },
  computed: {
    ...mapGetters(['getCart','getTotalCartQuantity'])
  },
  methods: {
    get_id() {
      console.log('ready__', this.$emit)
    }
  }
}
</script>

<style lang='scss' scoped>
.modal-wrapper-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(27, 55, 100, 0.5);
}

.modal-window {
  width: 40%;
  min-height: 400px;
  position: absolute;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  background-color: #fff;
}

.header-modal {
  height: 130px;
  width: 100%;
  background-color: var(--main-color-beer);
  padding: 0 76px;
}

.title-modal {
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: var(--main-color-dark)
}

.cross {
  position: relative;
  cursor: pointer;
}

.bar-right {
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: #000;
  transform: rotate(-45deg);
}

.bar-left {
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: #000;
  transform: rotate(45deg);
}

///////////////////////////////////////////BODY

.body-modal {
  width: 100%;
  height: 310px;
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

///////////////////////////////////////////////////FOOTER
.footer-modal {
  width: 100%;
  min-height: 200px;
  padding: 25px 76px 60px 76px;

  border-top: 2px solid rgba(27, 55, 100, 0.5);
  color: #000;
}

.wrapper-total {
  margin-bottom: 60px;
}

.total-title {
  color: var(--main-color-dark);
}

.total-price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #1B3764;
}

.cart-empty {
  padding: 50px 0;
  text-align: center;
  font-size: 24px;
  color: var(--main-color-dark);
}
</style>