<template>
  <section>
    <div class="">
      <HeaderTitleStandard title='Articles' color='light' padding='title-padding'
        subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.' />
    </div>
    <ArticlesItems />
  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard';
import ArticlesItems from '@/components/ArticlesItems';
export default {
  name: 'ArticlesPage',
  components: {
    HeaderTitleStandard,
    ArticlesItems,
  }
}
</script>

<style lang='scss' scoped>
.header-bg {
  width: 100%;
  min-height: 442px;
  background-color: var(--main-color-dark);
  
}
</style>