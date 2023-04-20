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
    <div class="our-companions-bg">
      <OurCompanions />
    </div>
    <div class="test-body"></div>
    <div class="what-you-learn-bg">
      <WhatYouLearn />
    </div>
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
import AuthorsBook from '@/components/AuthorsBook';
import AboutAuthor from '@/components/AboutAuthor';
import OurCompanions from '@/components/OurCompanions';
import WhatYouLearn from '@/components/WhatYouLearn';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
    AuthorsBook,
    AboutAuthor,
    OurCompanions,
    WhatYouLearn,
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

.our-companions-bg {
  min-height: 607px;
  background-color: #F5F5F5;
}

.test-body {
  height: 200px;
  background-color: var(--main-color-dark);
}

.what-you-learn-bg {
  width: 100%;
  min-height: 1108px;
  background-color: #F5F5F5;
}</style>
