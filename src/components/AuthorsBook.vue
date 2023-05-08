<template>
  <div class="container wrapper-authors-book">

    <TitleSection title="Author’s Book Includes" />

    <div class="wrapper-content d-flex justify-content-between" v-if="getAuthorBookIncludes[0]">

      <div class="wrapper-book d-flex justify-content-between" v-for="(el,ind) in getAuthorBookIncludes" :key='ind'>
        <div class="img-book"> <a href="#"><img :src="el.image" alt="photo"></a>

        </div>
        <div>
          <div class="description-book">
            <div class="title-book fz-cardo-32px">{{ el.title }}</div>
            <div class="content fz-inter-19px">{{ el.description }}</div>
            <div class="wrapper-detail-welcome d-flex justify-content-between">
              <div class="item-detail d-flex">
                <div class="item-circle"></div>
                <div class="item-description">
                  <div class="item-title fz-cardo-24px">Pages:</div>
                  <div class="item-subtitle fz-inter-18px">{{ el.pages }} pages</div>
                </div>
              </div>
              <div class="item-detail d-flex">
                <div class="item-circle"></div>
                <div class="item-description">
                  <div class="item-title fz-cardo-24px">Length:</div>
                  <div class="item-subtitle fz-inter-18px">{{ Math.round(el.length / 60) }} Hours</div>
                </div>
              </div>
            </div>
            <MainButton title='Order Today' size="big" reverse='reverse' />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TitleSection from './TitleSection';
import MainButton from './MainButton';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'AuthorsBook',
  components: {
    TitleSection,
    MainButton,
  },
  computed: {
    ...mapGetters(['getAuthorBookIncludes']),
  },
  methods: {
    ...mapActions(['fetchAuthorBooks']),
  },
  mounted() {
    this.fetchAuthorBooks();
  },


}
</script>

<style lang='scss' scoped>
.wrapper-authors-book {
  padding: 145px 0 110px 0;
}

.wrapper-content {
  padding-top: 57px;
}

.wrapper-book {
  width: calc(50% - 33px);
}

.img-book {
  background: #FFFFFF;
  border: 12px solid #DBE1E9;
  box-shadow: 0px 20px 25px rgba(4, 11, 20, 0.08);

  img {
    width: 292px;
    height: 396px;
    object-fit: cover;
  }
}

.description-book {
  padding-top: 33px;
  padding-left: 39px;
}

.title-book {
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;

}

.content {
  color: #969AA0;
  margin-top: 14px;
  margin-bottom: 30px;
  height: 95px;
  overflow: hidden;
  text-overflow: ellipsis; //??????????????????????????????????????????????????????????????????????????/ why?
}

//_________________________________________________________details
.wrapper-detail-welcome {
  margin-bottom: 30px;
}

.item-detail {
  align-items: baseline;
}

.item-description {
  padding-left: 13px;
}

.item-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--main-color-beer);
}

.item-title {
  text-transform: capitalize;
  color: var(--main-color-dark)
}
</style>