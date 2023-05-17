<template>
  <section>
    <div class="wrapper-section-book container">
      <div class="wrapper-item-book d-flex justify-content-between">

        <div class="book-image"><img src="@/assets/images/photo/article_photo-4.png" alt="photo"></div>

        <div class="book-content fz-inter-19px">
          <div class="book-title fz-cardo-32px">The Atomic One’s</div>
          <div class="book-price">$30.00 USD</div>
          <div class="book-description">Making this the first true generator on the Internet. It uses a dictionary of over
            200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum.</div>
          <div class="book-publisher pd">Publisher : Learning Private Limited (1 January 2021)</div>
          <div class="book-language pd">Language : English</div>
          <div class="book-paperback pd"> Paperback : 212 pages</div>
          <div class="book-isbn pd"> ISBN-10 : 9788120345799</div>
          <div class="book-dimensions pd">Dimensions : 20 x 14 x 4 cm</div>
          <div class="wrapper-btn-cart d-flex justify-content-between">
            <div class="counter-item">1</div>
            <MainButton title='Add to Cart' size='full'>
              <template #prepend>
                <div class="img-cart"><img src="@/assets/images/icons/cart-dark.svg" alt="icon"></div>
              </template>
            </MainButton>
          </div>
        </div>
      </div>

      <div class="wrapper-btn-description d-flex justify-content-between">
        <button class="product-btn size-btn-description fz-cardo-18px">Product Description</button>
        <button class='additional-btn size-btn-description fz-cardo-18px'>Additional Info</button>
      </div>

      <div class="content-product text-center">
        <div class="product-title fz-cardo-32px">Do you offer discounts for education?
        </div>
        <div class="product-description fz-inter-19px">There are many variations of passages of Lorem Ipsum available, but
          the majority
          have suffered alteration in some form, bypassed injected humour, or random i sed words which don't look even
          slightly believable.</div>
      </div>

      <div class="content-additional text-center">
        <div class="additional-title fz-cardo-32px">Is this book for me?
        </div>
        <div class="additional-description fz-inter-19px">If you are going to use a passage of Lorem Ipsum, you need to be
          sure there
          isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary.</div>
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
import MainButton from '@/components/MainButton';
import { mapGetters } from 'vuex';
export default {
  name: 'DescriptionBook',
  components: {
    MainButton,
  },
  computed: {
    ...mapGetters(['getPrivilegeBookPay']),
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
}

.counter-item {
  width: 26%;
  margin-right: 10px;
  border: 2px solid var(--main-color-beer);
  display: flex;
  justify-content: center;
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
</style>