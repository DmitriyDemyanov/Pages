<template>
  <div class="app">
    <div class="bg-header">
      <div class="container">
        <NavigationHeader />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader';
export default {
  name: 'App',
  components: {
    NavigationHeader,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Inter:wght@400;500&display=swap');
.app {
  font-family: 'Cardo', 'Inter', sans-serif;
  box-sizing: border-box;
}
.bg-header {
  min-height: 527px;
  background-color: var(--main-color-dark);
}
.container {
  margin: 0 auto;
  width: 1300px;
  box-sizing: border-box;
}
</style>
