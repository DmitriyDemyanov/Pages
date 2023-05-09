<template>
  <section class="container wrapper-section-data" v-if="isDataReady">
    <div class="img-author">
      <img :src="getAboutAuthor.images[1]" alt="author-photo">
    </div>
    <div class="wrapper-contact d-flex justify-content-between">

      <div class="data-items">


        <div class="data-item">

          <div class="bold-color fz-cardo-24px d-flex align-items-center">
            <span style="width: 60%">Country :</span>
            <span class="fz-inter-19px light-color ">United Kingdom</span>
          </div>

          <div class="bold-color fz-cardo-24px d-flex align-items-center">
            <span style="width: 60%"> Language :</span>
            <span class="fz-inter-19px light-color ">{{ getRandomBook.language }}</span>
          </div>

          <div class="bold-color fz-cardo-24px d-flex align-items-center">
            <span style="width: 60%">Genre :</span>
            <span class="fz-inter-19px light-color ">Historiography</span>
          </div>

          <div class="bold-color fz-cardo-24px d-flex align-items-center">
            <span style="width: 60%">Publication date :</span>
            <span class="fz-inter-19px light-color ">{{ getFullData }} </span>
          </div>


          <div class=" d-flex align-items-center">
            <span class="bold-color fz-cardo-24px" style="width: 60%"> Share us on: </span>
            <span v-for='(url,social) in getAuthorData.links' :key='social'>
              <a class="social-link" :href="url"> <img :src="require(`@/assets/images/photo/${social}-icon.svg`)" alt="">
              </a>
            </span>
          </div>




        </div>
      </div>


      <div class="name-item">
        <TitleSection :title='getAboutAuthor.name' type='start' color='dark' />
        <div class="name-subtitle fz-inter-19px">{{ getAboutAuthor.description }}</div>
        <div class="author-contact-btn">
          <MainButton title='Contact now' size='full' />
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import MainButton from '@/components/MainButton';
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'AuthorData',
  components: {
    TitleSection,
    MainButton,
  },
  computed: {
    ...mapGetters(['getAuthorData','getAboutAuthor','getRandomBook']),
    getFullData() {
      return new Date(this.getRandomBook.publish).toLocaleDateString('en',{ year: 'numeric',month: 'short',day: 'numeric' })

    },
    isDataReady() {

      return Object.keys(this.getAuthorData).length && Object.keys(this.getAboutAuthor).length && this.getRandomBook.length;
    }
  },
  methods: {
    ...mapActions(['fetchAboutAuthor','fetchRandomBook']),
  },
  mounted() {
    this.fetchAboutAuthor();
    this.fetchRandomBook();
  },
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
  line-height: 220%;
}

.light-color {
  color: #969AA0;

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

.social-link {
  margin-right: 22px;
}
</style>