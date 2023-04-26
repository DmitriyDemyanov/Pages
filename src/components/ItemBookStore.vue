<template>
  <section class="wrapper-section">
    <div class="wrapper-item" v-for="(el,ind) in getMyStoreBook" :key='ind'>
      <div class="img-item d-flex align-items-center justify-content-center"><img
          :src="require(`@/assets/images/photo/${el.img}.svg`)" alt="photo">
        <div class="icon-img" v-show="(el.title ==='The Dark Light')"><img src="@/assets/images/icons/Audio-icon.png"
            alt=""></div>
        <div class="icon-img" v-show="(el.title ===  'Atomic One’s')"><img src="@/assets/images/icons/Mockup-icon.png"
            alt=""></div>
      </div>
      <div class="wrapper-price d-flex align-items-center justify-content-between">
        <div class="title-book fz-cardo-32px">{{ el.title }}</div>
        <div class="price-book fz-inter-22px">{{ el.price }}</div>
      </div>
      <div class="description-book fz-inter-19px">{{ el.description }}
      </div>
      <div class="printed-book d-flex align-items-center fz-cardo-24px">
        <div class="circle"></div> Printed Books
      </div>
      <MainButton title='Order Today' size="big" reverse='reverse' />
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/MainButton';
import { mapGetters } from 'vuex';
export default {
  name: 'ItemBookStore',
  components: {
    MainButton,
  },
  computed: {
    ...mapGetters(['getMyStoreBook'])
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 70px 50px;
}

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