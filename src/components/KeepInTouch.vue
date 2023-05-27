<template>
  <section class="wrapper-section container">
    <div class="content-wrapper">
      <TitleSection title='Keep in Touch' type='start' />
      <div class="subtitle-content fz-inter-19px">There are many variations of passages of Lorem Ipsum available, but the
        majority
        have suffered
        alteration in some form, by injected humour, or random used words which don`t look even slightly believable.</div>
    </div>
    <div class="about-us-items d-flex align-items-center" v-for='(el,ind) in getKeepTouchInfo' :key='ind'>
      <div class="items-image d-flex justify-content-center align-items-center"><img
          :src="require(`@/assets/images/icons/${el.image}.svg`)" alt="icon"></div>
      <div class="item-wrapper">
        <div class="item-title fz-cardo-24px" style="color:var(--main-color-dark)">{{ el.title }}</div>
        <div class="item-address"> <a class="disabled no-link" :href="`${el.link}`"> {{ el.address }}</a> </div>
      </div>
    </div>
    <div class="form-wrapper">
      
    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import { mapGetters } from 'vuex';
export default {
  name: 'KeepInTouch',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getKeepTouchInfo']),
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  padding: 111px 0 130px;
}

.content-wrapper {
  width: calc(50% - 53px);
}

.subtitle-content {
  margin-top: 27px;
  margin-bottom: 15px;
  color: #969AA0;
}

.about-us-items {
  margin: 30px 0;
}

.items-image {
  margin-right: 27px;
  width: 65px;
  height: 65px;
  background-color: var(--main-color-dark);
}

.item-address {
  color: #969AA0;

  a {
    color: #969AA0;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: var(--main-color-beer);
    }
  }
}

.disabled {
  color: red;
  cursor: default !important;
}
</style>