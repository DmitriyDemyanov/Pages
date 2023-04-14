<template>
  <section class="wrapper-nav d-flex align-items-center">
    <div class="wrapper-logo-social">
      <a class="logo" href="#"
        ><img src="@/assets/images/icons/Logo.svg" alt="logo"
      /></a>
      <a class="social-icon" href="#"
        ><img src="@/assets/images/icons/Facebook-header.svg" alt="icon"
      /></a>
      <a class="social-icon" href="#"
        ><img src="@/assets/images/icons/Twitter-header.svg" alt="icon"
      /></a>
      <a class="social-icon" href="#"
        ><img src="@/assets/images/icons/LinkedIn-header.svg" alt="icon"
      /></a>
    </div>
    <div class="wrapper-link_page d-flex">
      <router-link class="fz-inter-17px" to="/">Home</router-link>
      <div class="fz-inter-17px">Pages</div>
      <router-link class="fz-inter-17px" to="/About">About</router-link>
      <router-link class="fz-inter-17px" to="/services"> Services</router-link>
      <router-link class="fz-inter-17px" to="/contact">Contact</router-link>
      <div class="wrapper-cart">
        <div class="cart-img">
          <img src="@/assets/images/icons/Cart.svg" alt="icon" />
        </div>
        <div class="cart-count"></div>
      </div>
    </div>
    <div class="wrapper-btn"><MainButton /></div>
  </section>
</template>

<script>
import MainButton from './MainButton';
export default {
  name: 'NavigationHeader',
  components: {
    MainButton,
  },
};
</script>

<style lang="scss" scoped>
.wrapper-nav {
  padding-top: 35px;
}
.logo {
  margin-right: 23px;
}
.social-icon {
  padding-left: 10px;
}
.wrapper-btn {
  margin-left: auto;
}
.fz-inter-17px {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 125%;
  color: #ffffff;
}
</style>
