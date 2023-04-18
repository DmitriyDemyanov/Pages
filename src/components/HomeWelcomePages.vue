<template>
  <section class="container wrapper-welcome d-flex justify-content-between">
    <div class="wrapper-description">
      <div class="wrapper-welcome-subtitle d-flex align-items-center">
        <div class="welcome-bar"></div>
        <div class="welcome-subtitle">Welcome to Pages</div>
      </div>
      <h1 class="fz-cardo-h1">Books are uniquely portable magic</h1>
      <div class="welcome-content fz-inter-19px">
        There are many variations of passages of Lorem Ipsum available,<br />
        but the majority have suffered alteration in some form.
      </div>
      <div class="wrapper-welcome-btn d-flex align-items-center">
        <MainButton title="Order Today" size="big" />
        <div class="welcome-link"><a href="#">Read Free Demo</a></div>
      </div>

      <div class="wrapper-detail-welcome d-flex justify-content-between">

        <div class="item-detail d-flex" v-for="(el,ind) in getDetailsHomeWelcome" :key="ind">
          <div class="item-circle"></div>
          <div class="item-description">
            <div class="item-title fz-cardo-24px">{{ el.title }}</div>
            <div class="item-subtitle fz-inter-18px">{{ el.subtitle }}</div>
          </div>
        </div>


      </div>

      
    </div>
    <div class="wrapper-image">
      <img src="@/assets/images/photo/Book-Dark&Light.png" alt="image" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import MainButton from './MainButton';
export default {
  name: 'HomeWelcomePages',
  components: {
    MainButton,
  },
  computed: {
    ...mapGetters(['getDetailsHomeWelcome']),
  },
};
</script>

<style lang="scss" scoped>
.wrapper-welcome {
  padding-top: 95px;
  padding-bottom: 115px;
}

.wrapper-description {
  padding-top: 140px;
  width: calc(50% - 67px);
}

.wrapper-welcome-subtitle {
  margin-bottom: 16px;
}

.welcome-bar {
  width: 34px;
  height: 2px;
  margin-right: 15px;
  background-color: var(--main-color-beer);
}

.welcome-subtitle {
  font-family: 'Cardo', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
}

.welcome-content {
  padding-top: 32px;
  padding-bottom: 49px;
}

.welcome-link {
  height: 28px;
  margin-left: 41px;
  border-bottom: 1px solid #fff;

  a {
    font-family: 'Cardo', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    transition: all 0.3s;
    border-bottom-color: var(--main-color-beer);

    a {
      transition: all 0.3s;
      color: var(--main-color-beer);
    }
  }
}

//______________________________________________________details
.wrapper-detail-welcome {
  padding-top: 49px;
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
  margin-bottom: 10px;
}
</style>
