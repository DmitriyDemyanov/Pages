<template>
  <div>
    <div class="welcome-bg">
      <HomeWelcomePages />
    </div>
     <div class="authors-bg">
    <AuthorsBook />
      </div>
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
import AuthorsBook from '@/components/AuthorsBook';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
    AuthorsBook,
  },
};
</script>

<style scoped>
.welcome-bg {
  width: 100%;
  height: 1015px;
  background-color: var(--main-color-dark);
}
.authors-bg {
  width: 100%;
  min-height: 827px;
}
</style>
