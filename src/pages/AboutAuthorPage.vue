<template>
  <section class="wrapper-section">
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
import AuthorsBook from '@/components/AuthorsBook';
import OurCompanions from '@/components/OurCompanions';
import ReadFreeChapter from '@/components/ReadFreeChapter';
export default {
  name: 'AboutAuthorPage',
  components: {
    AuthorsBook,
    OurCompanions,
    ReadFreeChapter,
  }
}
</script>

<style lang='scss' scoped></style>