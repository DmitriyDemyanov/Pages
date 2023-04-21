<template>
  <section class="container d-flex align-items-center justify-content-between">
    <div class="get-book">
      <TitleSection title='Get Book Copy Today!' type='start' color='light' />
      <div class="subtitle fz-inter-19px">This the first true value generator on the Internet. It uses alphas dictionary
        of over 200
        Latin words.</div>
      <MainButton type='big' reverse='reverse-dark' />
    </div>
    <div class="book-img"><img src="@/assets/images/photo/Coffee-book.png" alt="photo"></div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import MainButton from '@/components/MainButton';
export default {
  name: 'BookCopy',
  components: {
    TitleSection,
    MainButton,
  }
}
</script>

<style lang='scss' scoped>
section {
  min-height: 500px;
}
.subtitle {
  margin-top: 22px;
  margin-bottom: 31px;
}
</style>