<template>
  <div>
    <div class="welcome-bg">
      <HomeWelcomePages />
    </div>
    <div class="authors-bg">
      <AuthorsBook />
    </div>
    <div class="about-author-bg">
      <AboutAuthor />
    </div>
    <div class="our-companions">
      <OurCompanions />
    </div>
    <div class="bg-test"></div>
    <div class="chapter-includes-bg">
      <ChapterIncludes/>
    </div>
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
import AuthorsBook from '@/components/AuthorsBook';
import AboutAuthor from '@/components/AboutAuthor';
import OurCompanions from '@/components/OurCompanions';
import ChapterIncludes from '@/components/ChapterIncludes';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
    AuthorsBook,
    AboutAuthor,
    OurCompanions,
    ChapterIncludes,
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
  background-color: #F5F5F5;
}

.about-author-bg {
  width: 100%;
  min-height: 990px;
  background-color: #F4F8FF;
}

.our-companions {
  min-height: 607px;
  background-color: #F5F5F5;
}

.bg-test {
  height: 200px;
  background-color: var(--main-color-dark);
}

.chapter-includes-bg {
  width: 100%;
  min-height: 1200px;
  background-color: #F4F8FF;
}</style>
