<template>
  <div class="container wrapper-authors-book">

    <TitleSection title="Author’s Book Includes" />

    <div class="wrapper-content d-flex justify-content-between">

      <div class="wrapper-book d-flex justify-content-between" v-for="(el,ind) in getAuthorsBook" :key='ind'>
        <div class="img-book"> <a href="#"><img :src="require(`@/assets/images/photo/${el.img}.png`)" alt="photo"></a>
        </div>


        <div>

          <div class="description-book">
            <div class="title fz-cardo-32px">{{ el.title }}</div>
            <div class="content fz-inter-19px">{{ el.subtitle }}</div>

            <div class="wrapper-detail-welcome d-flex justify-content-between">

              <div class="item-detail d-flex" v-for="(el,ind) in getDetailsAuthorsBook" :key="ind">
                <div class="item-circle"></div>
                <div class="item-description">
                  <div class="item-title fz-cardo-24px">{{ el.title }}</div>
                  <div class="item-subtitle fz-inter-18px">{{ el.subtitle }}</div>
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
import { mapGetters } from 'vuex';
export default {
  name: 'AuthorsBook',
  components: {
    TitleSection,
    MainButton,
  },
  computed: {
    ...mapGetters(['getDetailsAuthorsBook','getAuthorsBook'])
  }
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

.description-book {
  padding-top: 33px;
}

.content {
  color: #969AA0;
  margin-top: 14px;
  margin-bottom: 30px;
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