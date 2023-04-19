<template>
  <section class="container wrapper-companions">
    <TitleSection title='Trusted by the Best' />
    <div class="wrapper-items d-flex justify-content-between">
      <div class="item" v-for="(item,ind) in getOurCompanions" :key='ind'>
        <div class="item-img"><img :src="require(`@/assets/images/icons/${item.img}.png`)" alt="logo"></div>
        <div class="item-title fz-cardo-24px">{{ item.title }}</div>
        <div class="item-text fz-inter-18px">{{ item.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TitleSection from './TitleSection';
export default {
  name: 'OurCompanions',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getOurCompanions'])
  }
}
</script>

<style lang='scss' scoped>
.wrapper-companions {
  padding-top: 131px;
  padding-bottom: 141px;
}

/* // __________________________________________________item */
.item {
  text-align: center;
  width: 250px;
  padding-top: 40px;
}

.item-img {
  img {
    width: 190px;
    height: 100px;
    object-fit: contain;
  }
}

.item-title {
  margin-top: 22px;
  color: var(--main-color-dark);
}

.item-text {
  color: #969aa0;
}
</style>