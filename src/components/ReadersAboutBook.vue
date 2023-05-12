<template>
  <section class="container wrapper-section d-flex justify-content-between" v-if="getReadersBook.users">
    <div class="wrapper-rating">
      <TitleSection title="What Readers Say About the Book" type='start' width='small' />
      <div class="rating-text fz-inter-19px">If you are going to use a passage of Lorem Ipsum, you need to be sure there
        isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</div>
      <div class="wrapper-circle d-flex align-items-center">
        <div class="circle full"></div>
        <div class="circle full"></div>
        <div class="circle full"></div>
        <div class="circle full"></div>
        <div class="circle half"></div>
        <div class="number-rating fz-cardo-22px">({{ getReadersBook.overall }}/5)</div>
      </div>

      <div class="all-rating fz-inter-19px">Overall Customer Ratings</div>

    </div>
    <div class="wrapper-users d-flex justify-content-between">
      <div class="two-users">

        <div class="user-item">
          <div class="d-flex align-items-center">
            <div class="user-photo"><img :src="getReadersBook.users[0].photo" alt="photo"></div>
            <div>
              <div class="user-full-name fz-cardo-24px">{{ getReadersBook.users[0].name }}</div>
              <div class="user-rating d-flex">
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle half small"></div>
              </div>
            </div>
          </div>
          <div class="user-title fz-cardo-22px">{{ getReadersBook.users[0].title }}</div>
          <div class="user-text fz-inter-19px">{{ getReadersBook.users[0].text }}</div>
        </div>

        <div class="user-item">
          <div class="d-flex align-items-center">
            <div class="user-photo"><img :src="getReadersBook.users[1].photo" alt="photo"></div>
            <div>
              <div class="user-full-name fz-cardo-24px">{{ getReadersBook.users[1].name }}</div>
              <div class="user-rating d-flex">
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle half small"></div>
              </div>
            </div>
          </div>
          <div class="user-title fz-cardo-22px">{{ getReadersBook.users[1].title }}</div>
          <div class="user-text fz-inter-19px"> {{ getReadersBook.users[1].text }}</div>
        </div>
      </div>

      <div class="d-flex align-items-center third-user">
        <div class="user-item">
          <div class="d-flex align-items-center">
            <div class="user-photo"><img :src="getReadersBook.users[2].photo" alt="photo"></div>
            <div>
              <div class="user-full-name fz-cardo-24px">{{ getReadersBook.users[2].name }}</div>
              <div class="user-rating d-flex">
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle full"></div>
                <div class="user-circle half small"></div>
              </div>
            </div>
          </div>
          <div class="user-title fz-cardo-22px">{{ getReadersBook.users[2].title }}</div>
          <div class="user-text fz-inter-19px"> {{ getReadersBook.users[2].text }}</div>
        </div>
      </div>


    </div>

  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'ReadersAboutBook',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getReadersBook']),
  },
  methods: {
    ...mapActions(['fetchReadersBook'])
  },
  mounted() {
    this.fetchReadersBook();
  },


}
</script>

<style lang='scss' scoped>
.wrapper-section {
  height: 930px;
  padding: 140px 0;
}

.wrapper-rating {
  width: 33%;
  margin: auto 0;
}

.rating-text {
  margin-top: 29px;
  margin-bottom: 43px;
  color: #969AA0;
}

//______________________________________________circle
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.full {
  background-color: var(--main-color-beer);
}

.half {
  border: 2px solid var(--main-color-beer);
  background: linear-gradient(to right, var(--main-color-beer) 0%, var(--main-color-beer) 50%, #F5F5F5 50%, #F5F5F5 100%);

  &.small {
    background: linear-gradient(to right, var(--main-color-beer) 0%, var(--main-color-beer) 50%, var(--main-color-dark) 50%, var(--main-color-dark) 100%);
  }
}

.number-rating {
  margin-left: 5px;
}

.all-rating {
  color: var(--main-color-dark);
}

// ___________________________________________________________Users
.wrapper-users {
  width: calc(66% - 111px);
}

.two-users {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.third-user {
  padding-top: 40px;
}


.user-item {
  width: 370px;
  height: 310px;
  background-color: var(--main-color-dark);
  padding: 34px 31px;

  // margin: auto 0;

}

.user-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 3px;
}

.user-title {
  padding-top: 20px;
  padding-bottom: 10px;
  color: #fff;

}
</style>