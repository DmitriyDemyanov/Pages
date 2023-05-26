<template>
  <div class="app" target='_blank'>

    <div class="bg-header">
      <div class="container">
        <NavigationHeader />
      </div>
    </div>
    <router-view v-if='getAuthorBooks.length'></router-view>
    <CartComponent v-show="showCart" />
    <ErrorComponent v-show="getErrorComponent" />
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
import CartComponent from '@/components/CartComponent';
import ErrorComponent from '@/components/ErrorComponent';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    NavigationHeader,
    FooterSection,
    CartComponent,
    ErrorComponent,
  },
  computed: {
    ...mapGetters(['showCart','getErrorComponent','getAuthorBooks']),
  },
  methods: {
    ...mapActions(['fetchAuthorBooks']),
  },
  mounted() {
    this.fetchAuthorBooks();
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

.bg-footer {
  height: 510px;
  background-color: var(--main-color-dark);
}
</style>
