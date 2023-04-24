<template>
  <section class="container wrapper-section-data">
    <div class="img-author">
      <img src="@/assets/images/photo/Author-data-photo.png" alt="author-photo">
    </div>
    <div class="wrapper-contact d-flex justify-content-between">

      <div class="data-items">


        <div class="data-item " v-for="(value,key) in getAuthorData" :key='key'>


          <div class=" d-flex align-items-center" v-if='typeof value === "object" && value'>

            <span class="bold-color fz-cardo-24px" style="width: 60%"> Share us on: </span>

            <span v-for='(url,social) in value' :key='social'>
              <a class="social-link" :href="url"> <img :src="require(`@/assets/images/photo/${social}-icon.svg`)" alt="">
              </a>
            </span>
          </div>


          <div v-else class="bold-color fz-cardo-24px d-flex align-items-center">
            <span style="width: 60%">{{ key }}:</span>
            <span class="fz-inter-19px light-color ">{{ value }}</span>
          </div>

        </div>
      </div>


      <div class="name-item">
        <TitleSection title='About Dr. John Abraham ' type='start' color='dark' />
        <div class="name-subtitle fz-inter-19px">All the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          that can combined with a handful of model sentence structures.</div>
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
import { mapGetters } from 'vuex';
export default {
  name: 'AuthorData',
  components: {
    TitleSection,
    MainButton,
  },
  computed: {
    ...mapGetters(['getAuthorData']),
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