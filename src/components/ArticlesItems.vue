<template>
  <section class="articles-bg">
    <div class="container wrapper-items">
      <div class="wrapper-grid">
        <div v-for="(item,ind) in getArticlesItems" :key="ind">
          <ArticleItem :item='item' />
        </div>
      </div>
      <div class="wrapper-pagination">
        <button @click='pageClick("-")' :disabled='getNumberPage.currentPage === 1'>prev</button>
        <span class='number-page'>{{ getNumberPage.currentPage }} </span>
        <button @click='pageClick("+")' :disabled='getNumberPage.currentPage === getNumberPage.lastPage'>next</button>
      </div>

    </div>



  </section>
</template>

<script>
import ArticleItem from '@/components/ArticleItem';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'ArticlesItems',
  components: {
    ArticleItem,
  },
  computed: {
    ...mapGetters(['getArticlesItems','getNumberPage']),
  },
  methods: {
    ...mapActions(['fetchArticles','nextPage','prevPage']),
    pageClick(num) {
      if (num === "+") {
        this.nextPage();
      }
      else {
        this.prevPage();
      }
    }
  },
  mounted() {
    this.fetchArticles();

  }
}
</script>

<style lang='scss' scoped>
.articles-bg {
  background-color: #F5F5F5;
}

.wrapper-items {
  padding-top: 150px;
  padding-bottom: 130px;
}

.wrapper-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 57px 34px;
}

.wrapper-pagination {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.number-page {
  width: 30px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-beer);
}
</style>