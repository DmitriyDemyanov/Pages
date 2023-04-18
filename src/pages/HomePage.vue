<template>
  <div>
    <div class="welcome-bg">
      <HomeWelcomePages />
    </div>
    <div class="authors-bg">
      <AuthorsBook />
    </div>
    <div class="about-author-bg">
      <AboutAuthor/>
    </div>
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
import AuthorsBook from '@/components/AuthorsBook';
import AboutAuthor from '@/components/AboutAuthor';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
    AuthorsBook,
    AboutAuthor,
  },
};
</script>

<style scoped>
.welcome-bg {
  width: 100%;
  min-height: 1015px;
  background-color: var(--main-color-dark);
}

.authors-bg {
  width: 100%;
  min-height: 827px;
}
.about-author-bg {
  width: 100%;
  min-height: 990px;
  background-color: #F4F8FF;
}
</style>
