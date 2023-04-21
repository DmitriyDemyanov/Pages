<template>
  <section class="container wrapper-section">
    <TitleSection title='Articles & Resources' />
    <div class="wrapper-card d-flex justify-content-between">

      <div class="card-item" v-for="(item,ind) in getArticlesResources" :key='ind'>
        <div class="card-img"><img :src="require(`@/assets/images/photo/${item.img}.png`)" alt="photo"></div>
        <div class="card-content">
          <div class="card-title fz-cardo-24px">{{ item.title }}</div>
          <div class="card-text fz-inter-19px"> {{ item.text }} </div>
          <div class="card-link d-flex justify-content-between">
            <a class="fz-cardo-18px" :href="`${item.link}`">Read more</a>
            <div class="card-date fz-inter-17px">Author - {{ item.date }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import { mapGetters } from 'vuex';
export default {
  name: 'ArticlesResources',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getArticlesResources']),

  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  min-height: 1016px;
  padding: 145px 0;
}

.card-item {
  width: 410px;
  margin-top: 44px;
}

.card-content {
  padding: 27px 28px;
  background-color: #fff;
}

.card-title {
  width: 307px;
  color: var(--main-color-dark);
  margin-bottom: 14px;
}

.card-text {
  color: #969AA0;
  margin-bottom: 27px;
}

.card-link {
  a {
    text-decoration: none;
    color: var(--main-color-dark);
    border-bottom: 2px solid var(--main-color-dark);

    &:hover {
      color: var(--main-color-beer);
      border-bottom-color: var(--main-color-beer);
      transition: all 0.4s;
    }
  }
}

.card-date {
  font-weight: 400;
  color: var(--main-color-dark);
}
</style>