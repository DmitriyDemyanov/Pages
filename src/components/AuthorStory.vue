<template>
  <section class="container my-story-wrapper d-flex justify-content-between">
    <div class="my-story-content ">

      <TitleSection title='My Story' type='start' />
      <div class="my-story-description fz-inter-19px">Making this the first true generator on the Internet. It uses a
        dictionary of over
        200 Latin words, combined with a handful of model sentence structures.
      </div>
      <div class="wrapper-items  d-flex ">

        <div class="wrapper-number">
          <div class="story-number d-flex align-items-center justify-content-center">01</div>
          <div class="story-line"></div>
          <div class="story-number d-flex align-items-center justify-content-center">02</div>
          <div class="story-line"></div>
          <div class="story-number d-flex align-items-center justify-content-center">03</div>
        </div>

        <div class="wrapper-subtitles">

          <div class="story-subtitle fz-cardo-24px">Great Author Awards - 1996 & 2000</div>
          <div class="story-text fz-inter-19px">How to navigate around the interface and toggle on/off the panels you wish
            to use.</div>

          <div class="story-subtitle fz-cardo-24px">10 Times New York Times ® Best Seller
          </div>
          <div class="story-text fz-inter-19px">How to navigate around the interface and toggle on/off the panels you wish
            to use.</div>

          <div class="story-subtitle fz-cardo-24px">Writer of Hack Productivity </div>
          <div class="story-text fz-inter-19px">How to navigate around the interface and toggle on/off the panels you wish
            to use.</div>
        </div>

      </div>

    </div>
    <div class="my-story-img"><img src="@/assets/images/photo/my-story-photo.png" alt="photo"></div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
export default {
  name: 'AuthorStory',
  components: {
    TitleSection,
  }
}
</script>

<style lang='scss' scoped>
.my-story-wrapper {
  padding: 150px 0;
}

.my-story-content {
  width: 50%;
  padding-right: 60px;
  padding-top: 12px;
}

.my-story-description {
  color: #969AA0;
  margin-top: 34px;
}

//___________________________________number story

.wrapper-number {
  width: 65px;
  margin: 40px 48px 0 45px;
}

.story-number {
  width: 65px;
  height: 65px;
  background-color: var(--main-color-beer);
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #1B3764;
}

.story-line {
  width: 2px;
  height: 71px;
  border: 1px dashed #000000;
  margin: 0 auto;
}

//_________________________________________subtitles
.wrapper-subtitles {
  margin-top: 22px;
}

.story-subtitle {
  color: var(--main-color-dark);
  line-height: 52px;
}

.story-text {
  color: #969AA0;
  padding-bottom: 25px;
  line-height: 160%;
}
</style>