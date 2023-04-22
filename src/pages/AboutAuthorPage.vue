<template>
  <section>

    <div class="header-title-standard-dg">
      <HeaderTitleStandard title='About the Author'
        subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
        color='light' padding='title-padding' />

    </div>


    <div class="authors-bg">
      <AuthorsBook />
    </div>
    <div class="our-companions-bg">
      <OurCompanions />
    </div>
    <div class="read-chapter-bg">
      <ReadFreeChapter />
    </div>
  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard';
import AuthorsBook from '@/components/AuthorsBook';
import OurCompanions from '@/components/OurCompanions';
import ReadFreeChapter from '@/components/ReadFreeChapter';
export default {
  name: 'AboutAuthorPage',
  components: {
    HeaderTitleStandard,
    AuthorsBook,
    OurCompanions,
    ReadFreeChapter,

  }
}
</script>

<style lang='scss' scoped>
.header-title-standard-dg {
  width: 100%;
  min-height: 442px;
  background-color: var(--main-color-dark);

}



.authors-bg {
  width: 100%;
  min-height: 827px;
  background-color: #F5F8FC;
}

.our-companions-bg {
  min-height: 607px;
  background-color: #F5F5F5;
}

.read-chapter-bg {
  min-height: 817px;
  width: 100%;
}
</style>