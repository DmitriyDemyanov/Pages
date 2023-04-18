<template>
  <div class="app">
    <div class="bg-header">
      <div class="container">
        <NavigationHeader />
      </div>
    </div>
    <router-view></router-view>
    <div class="body">body</div>
    <div class="bg-footer">
      <div class="container">
        <FooterSection />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader';
import FooterSection from './components/FooterSection';
export default {
  name: 'App',
  components: {
    NavigationHeader,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_fonts.scss';

* {
  box-sizing: border-box;
}
.bg-header {
  min-height: 85px;
  background-color: var(--main-color-dark);
}
.container {
  margin: 0 auto;
  width: 1300px;
  box-sizing: border-box;
}
.body {
  height: 500px;
}
.bg-footer {
  height: 510px;
  background-color: var(--main-color-dark);
}
</style>
