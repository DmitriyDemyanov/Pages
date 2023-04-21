<template>
  <section class="container wrapper-main-section">
    <TitleSection title='What will you learn?' />

    <div class="wrapper-content d-flex justify-content-between">
      <div class="wrapper-items">


        <div class="item text-item fz-cardo-24px" v-for="(item,ind) in getWhatYouLearnItems" :key='ind'>
          <div class="number-item d-flex justify-content-center align-items-center">{{ item.number }}</div>
          <div class="">{{ item.text }}</div>
        </div>


      </div>
      <div class="wrapper-img position-relative">
        <div class="img-frame "><img src="@/assets/images/photo/photo-frame.png" alt="frame"></div>
        <div class="img-photo-user"><img src="@/assets/images/photo/photo-user.png" alt="photo"></div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TitleSection from './TitleSection';
export default {
  name: 'WhatYouLearn',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getWhatYouLearnItems'])
  }

}
</script>

<style lang='scss' scoped>
.wrapper-main-section {
  padding-top: 145px;
  padding-bottom: 144px;
}

.wrapper-content {
  padding-top: 83px;
}

//_______________________________________________________Items
.wrapper-items {
  display: grid;
  grid-template-columns: 295px 295px;
  grid-template-rows: 300px 300px;
  gap: 32px 30px;
}

.item {
  padding: 41px 33px;
  color: var(--main-color-dark);
  background-color: #F4F8FF; //background-color ---????? not layout
}

.number-item {
  width: 50px;
  height: 50px;
  background-color: var(--main-color-beer);
  border-radius: 50%;
  margin-bottom: 31px;
}

.text-item {
  color: var(--main-color-dark);
}

//___________________________________________________________img
.wrapper-img {
  padding-top: 10px;
}

.img-photo-user {
  position: absolute;
  bottom: 47px;
  right: 40px;

}
</style>