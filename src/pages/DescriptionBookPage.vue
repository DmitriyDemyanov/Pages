<template>
  <section>
    <HeaderTitleStandard title='My Store' color='light'
      subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.' />

    <BookDetailComponent />

    <div class="pb-5">
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

import BookDetailComponent from '@/components/BookDetailComponent';
import { mapGetters } from 'vuex';

export default {
  name: 'DescriptionBookPage',
  components: {
    HeaderTitleStandard,
    BookDetailComponent,
  },
  data() {
    return {
      showText: true
    }
  },
  computed: {
    ...mapGetters(['getPrivilegeBookPay']),
  },
  methods: {
    onActive(string) {
      if (string === 'info') {
        this.showText = false;
      }
      else {
        this.showText = true;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
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
</style>