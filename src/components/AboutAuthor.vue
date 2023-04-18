<template>
  <section class="container wrapper-about-author d-flex justify-content-between">
    <div class="photo-frame position-relative">
      <img src="@/assets/images/photo/photo-frame.png" alt="frame">
      <div class="photo-author"><img src="@/assets/images/photo/Author-photo.png" alt="photo"></div>
    </div>

    <div class="wrapper-content">

      <TitleSection title="About Author" type='start' />

      <div class="description fz-inter-19px">All the Lorem Ipsum generators on the Internet tend to repeated predefined
        chunks as
        necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin
        words, combined with a handful.
      </div>
      <div class="wrapper-author-stats d-flex justify-content-between">
        <div class="item-wrapper">
          <div class="item-title fz-cardo-55px">02</div>
          <div class="item-subtitle fz-inter-18px">Books Published</div>
        </div>
        <div class="item-wrapper-border">
          <div class="item-title fz-cardo-55px">4.5</div>
          <div class="item-subtitle fz-inter-18px">User Reviews</div>
        </div>
        <div class="item-wrapper">
          <div class="item-title fz-cardo-55px">04</div>
          <div class="item-subtitle fz-inter-18px">Best Seller Awards</div>
        </div>

      </div>
      <div class="wrapper-contact">

      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from './TitleSection';
export default {
  name: 'AboutAuthor',
  components: {
    TitleSection,
  }
}
</script>

<style lang='scss' scoped>
.wrapper-about-author {
  padding-top: 190px;
  padding-left: 40px;

}

.photo-author {
  position: absolute;
  right: 40px;
  bottom: 40px;
}

.wrapper-content {
  width: calc(50% - 58px);
  padding-top: 20px;
}

.description {
  color: #969AA0;
  padding-top: 22px;
  padding-bottom: 44px;
}

//____________________________________________-item
.item-wrapper-border {
  border-left: 2px solid var(--main-color-beer);
  border-right: 2px solid var(--main-color-beer);
  padding-left: 36px;
  padding-right: 32px;
}

.item-subtitle {
  color: #969AA0;
}

//_______________________________________________________contact
.wrapper-contact {
  width: 477px;
  height: 160px;
  margin-top: 41px;
  background-color: var(--main-color-dark);
}</style>