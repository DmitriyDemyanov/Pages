<template>
  <div class="welcome-bg">
    <HomeWelcomePages />
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
  },
};
</script>

<style scoped>
.welcome-bg {
  width: 100%;
  height: 1015px;
}
</style>
