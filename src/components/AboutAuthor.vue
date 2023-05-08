<template>
  <section class="container wrapper-about-author d-flex justify-content-between" v-if="getAboutAuthor.name">
    <div class="photo-frame position-relative">
      <img src="@/assets/images/photo/photo-frame.png" alt="frame">
      <div class="photo-author"><img :src="getAboutAuthor.images[0]" alt="photo"></div>
    </div>

    <div class="wrapper-content">

      <TitleSection title="About Author" type='start' />

      <div class="description fz-inter-19px">{{ getAboutAuthor.description }}
      </div>
      <div class="wrapper-author-stats d-flex justify-content-between">
        <div class="item-wrapper">
          <div class="item-title fz-cardo-55px">{{ firstZeroNumber(getAboutAuthor.books.published) }}</div>
          <div class="item-subtitle fz-inter-18px">Books Published</div>
        </div>
        <div class="item-wrapper-border">
          <div class="item-title fz-cardo-55px">{{ getAboutAuthor.rating }}</div>
          <div class="item-subtitle fz-inter-18px">User Reviews</div>
        </div>
        <div class="item-wrapper">
          <div class="item-title fz-cardo-55px">{{ firstZeroNumber(getAboutAuthor.awards[0].value) }}</div>
          <div class="item-subtitle fz-inter-18px">{{ getAboutAuthor.awards[0].name }}</div>
        </div>

      </div>
      <div class="wrapper-contact d-flex align-items-center">
        <div class="image-qr-code">
          <img src="@/assets/images/photo/QR-code.png" alt="QR-code">
        </div>
        <div class="contact fz-inter-19px">
          <div class="full-name">{{ getAboutAuthor.name }}</div>
          <div class="mail-author">Mail :
            <a href="mailto:johnabraham@gmail.com">{{ getAboutAuthor.email }}</a>
          </div>
          <div class="phone-author"> Phone :
            <a href="tel:+21235459000">{{ getAboutAuthor.phone }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
import TitleSection from './TitleSection';
export default {
  name: 'AboutAuthor',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getAboutAuthor']),

  },
  methods: {
    ...mapActions(['fetchAboutAuthor']),
    firstZeroNumber(num) {
      if (num < 10) {
        return `0${num}`
      }
      return num
    }
  },
  mounted() {
    this.fetchAboutAuthor();
  },
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
  width: 550px;
  height: 650px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  padding-left: 18px;
  background-color: var(--main-color-dark);
}

.contact {
  padding-left: 37px;

  a {
    text-decoration: none;
    color: #B4C7E7;

    &:hover {
      color: var(--main-color-beer);
    }
  }
}
</style>