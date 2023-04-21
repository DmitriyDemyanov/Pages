<template>
  <section class="container wrapper-chapter">
    <TitleSection title='The Chapter Includes' />
    <div class="wrapper-items-chapter">
      <div class="item-chapter" v-for="(item,ind) in getChapterIncludes" :key='ind'>
        <div class="item-subtitle fz-cardo-24px">{{ item.title }}</div>
        <div class="item-text fz-inter-19px">{{ item.text }}</div>
        <div class="wrapper-details d-flex">

          <div class="item-detail d-flex align-items-center">
            <div class="item-circle"></div>
            <div class="detail-text fz-inter-18px"><span class="fz-cardo-22px">Pages : </span> {{ item.numberPage }}</div>
          </div>

          <div class="item-detail d-flex align-items-center">
            <div class="item-circle"></div>
            <div class="detail-text fz-inter-18px"><span class="fz-cardo-22px">Length : </span>{{ item.quantity }}</div>
          </div>

        </div>
      </div>
    </div>
    <div class="wrapper-btn-start">
      <MainButton title='Start a 15-Days Free Trail' type='full' />
      <div class="link-questions fz-inter-18px ">
        Short description about each chapter <br>
        <a href="#">Have any questions?</a>
        Contact us
      </div>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex';

import TitleSection from '@/components/TitleSection';
import MainButton from '@/components/MainButton';
export default {
  name: 'ChapterIncludes',
  components: {
    TitleSection,
    MainButton,
  },
  computed: {
    ...mapGetters(['getChapterIncludes']),
  },
}
</script>

<style lang='scss' scoped>
.wrapper-chapter {
  min-height: 1200px;
  padding: 148px 0;
}

//____________________________________items
.wrapper-items-chapter {
  padding-top: 50px;
  padding-bottom: 79px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(250px) minmax(250px);
  gap: 40px;
}

//____________________________________________________item
.item-detail {
  margin-right: 45px;
}

.item-chapter {
  padding: 48px 52px 46px 54px;
  background-color: #fff;
  box-shadow: 0px 35px 25px rgba(4, 11, 20, 0.04);
}

.item-subtitle {
  color: var(--main-color-dark);
}

.item-text {
  color: #969AA0;
  padding-top: 14px;
  padding-bottom: 25px;
}

.item-circle {
  width: 16px;
  height: 16px;
  background-color: var(--main-color-beer);
  border-radius: 50%;
  margin-right: 13px;
}

.detail-text {
  color: #969AA0;
}

.wrapper-btn-start {
  width: 434px;
  margin: 0 auto;
}

.link-questions {
  text-align: center;
  color: #969AA0;
  padding-top: 32px;

  a {
    color: var(--main-color-dark);

    &:hover {
      color: var(--main-color-beer);
    }
  }
}
</style>