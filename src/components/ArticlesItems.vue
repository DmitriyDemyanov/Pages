<template>
  <section class="articles-bg">
    <div class="container wrapper-items">
      <div v-for="(item,ind) in getArticlesItems" :key="ind">
        <ArticleItem :item='item' />
      </div>


    </div>


  </section>
</template>

<script>
import ArticleItem from '@/components/ArticleItem';
import { mapGetters } from 'vuex';
export default {
  name: 'ArticlesItems',
  components: {
    ArticleItem,
  },
  computed: {
    ...mapGetters(['getArticlesItems']),
  }
}
</script>

<style lang='scss' scoped>
.articles-bg {
  background-color: #F5F5F5;
}

.wrapper-items {
  padding-top: 150px;
  padding-bottom: 160px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 57px 34px;
}
</style>