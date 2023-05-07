<template>
  <section class="wrapper-item">
    <div class="img"><img :src="require(`@/assets/images/photo/article_${item.img}.png`)" alt="photo"></div>
    <div class="wrapper-content">
      <div class="title-item fz-cardo-24px"> <a :href="item.link">{{ item.title }}</a> </div>
      <div class="description-item fz-inter-19px">{{ item.descr }}</div>
      <div class="item-link d-flex justify-content-between align-items-center">
        <a :href="item.link">Read more</a> <span class="author-date ">Author - {{ item.date }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },


}
</script>

<style lang='scss' scoped>
.wrapper-item {
  width: 410px;
  min-height: 600px;
  background: #FFFFFF;
  box-shadow: 0px 35px 25px rgba(4, 11, 20, 0.04);
}

.wrapper-content {
  padding: 26px 33px 28px 30px;
}

.title-item {

  margin-bottom: 14px;

  a {
    color: var(--main-color-dark);
    text-decoration: none;

    &:hover {
      transition: all 0.3s;
      color: var(--main-color-beer);
    }
  }
}

.description-item {
  color: #969AA0;
  margin-bottom: 27px;
}

.item-link {
  a {
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    color: var(--main-color-dark);
    text-decoration: none;
    border-bottom: 2px solid #1B3764;

    &:hover {
      transition: all 0.3s;
      color: var(--main-color-beer);
      border-color: var(--main-color-beer);
    }
  }
}


.author-date {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: #1B3764;
}
</style>