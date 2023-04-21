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
    <div class="book-copy-bg">
      <BookCopy />
    </div>
    <div class="what-you-learn-bg">
      <WhatYouLearn />
    </div>
    <div class="chapter-includes-bg">
      <ChapterIncludes />
    </div>
    <div class="read-chapter">
      <ReadFreeChapter />
    </div>

    <div class="articles-resources-bg">
      <ArticlesResources />
    </div>
    <div class="readers-about-book-bg">
      <ReadersAboutBook />
    </div>
  </div>
</template>

<script>
import HomeWelcomePages from '@/components/HomeWelcomePages';
import AuthorsBook from '@/components/AuthorsBook';
import AboutAuthor from '@/components/AboutAuthor';
import OurCompanions from '@/components/OurCompanions';
import BookCopy from '@/components/BookCopy';
import WhatYouLearn from '@/components/WhatYouLearn';
import ChapterIncludes from '@/components/ChapterIncludes';
import ReadFreeChapter from '@/components/ReadFreeChapter';
import ReadersAboutBook from '@/components/ReadersAboutBook';
import ArticlesResources from '@/components/ArticlesREsources';
export default {
  name: 'HomePage',
  components: {
    HomeWelcomePages,
    AuthorsBook,
    AboutAuthor,
    OurCompanions,
    BookCopy,
    WhatYouLearn,
    ChapterIncludes,
    ReadFreeChapter,
    ReadersAboutBook,
    ArticlesResources,
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

.book-copy-bg {
  width: 100%;
  min-height: 500px;
  background-color: var(--main-color-dark);
}


.what-you-learn-bg {
  width: 100%;
  min-height: 1108px;
  background-color: #F5F5F5;
}

.chapter-includes-bg {
  width: 100%;
  min-height: 1200px;
  background-color: #F4F8FF;
}

.articles-resources-bg {
  width: 100%;
  min-height: 1016px;
  background-color: #F4F8FF;
}
.test-bg {
  height: 200px;
  background-color: var(--main-color-dark);
}

.readers-about-book-bg {
  width: 100%;
  min-height: 930px;
  background-color: #F5F5F5;
}
.read-chapter {
  min-height: 817px;
  width: 100%;
}</style>
