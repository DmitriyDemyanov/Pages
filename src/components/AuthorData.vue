<template>
  <section class="container wrapper-section-data">
    <div class="img-author">
      <img src="@/assets/images/photo/Author-data-photo.png" alt="author-photo">
    </div>
    <div class="wrapper-contact d-flex justify-content-between">
      <div class="data-items">



        <div class="data-item d-flex justify-content-between align-items-center"> <span
            class="bold-color fz-cardo-24px">country:</span>
          <span class="light-color fz-cardo-19px">
            <a href="#">A</a>
            <a href="#">B</a>
            <a href="#">C</a>
          </span>
        </div>






      </div>

      <div class="name-item">
        <TitleSection title='About Dr. John Abraham ' type='start' color='dark' />
        <div class="name-subtitle fz-inter-19px">All the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          that can combined with a handful of model sentence structures.</div>
          <div class="author-contact-btn"><MainButton title='Contact now' size='full' /></div>
        
      </div>

    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import MainButton from '@/components/MainButton';
export default {
  name: 'AuthorData',
  components: {
    TitleSection,
    MainButton,
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section-data {
  padding: 151px 0;
}

.img-author {
  width: 100%;
  height: 700px;
  margin-bottom: 80px;
}



.data-items {
  width: 40%;
  background-color: #fff;
  border: 2px solid #DFE9F8;
  padding: 40px 65px;
}

.name-item {
  width: 615px;
  margin-right: 66px;
}

.bold-color {
  color: var(--main-color-dark);
}

.light-color {
  color: #969AA0;
  line-height: 280%;

  a {
    margin: 0 20px;
  }
}

.name-subtitle {
  color: #969AA0;
  padding-top: 27px;
  padding-bottom: 30px;
}
.author-contact-btn {
  width: 240px;
}
</style>