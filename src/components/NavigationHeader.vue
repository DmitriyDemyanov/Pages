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
    <div class="wrapper-btn"> <MainButton/></div>
  
  </section>
</template>

<script>
import MainButton from './MainButton';
export default {
  name: 'NavigationHeader',
  components: {
    MainButton,
  }
};
</script>

<style lang="scss" scoped>
.wrapper-nav {
  padding-top: 35px;
}
.logo {
  margin-right: 23px;
}
.social-icon{
  padding-left: 10px;
}
.wrapper-btn {
  margin-left: auto;
}
</style>
