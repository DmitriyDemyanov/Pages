<template>
  <section>
    <HeaderTitleStandard title='Contact Us'
      subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      color='light' />
    <div class='bg-keep-in-touch'>
      <KeepInTouch />
    </div>
    <div class="bg-questions">
      <FrequentQuestions />
    </div>
  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard';
import KeepInTouch from '@/components/KeepInTouch';
import FrequentQuestions from '@/components/FrequentQuestions';
export default {
  name: 'ContactUsPage',
  components: {
    HeaderTitleStandard,
    KeepInTouch,
    FrequentQuestions,
  }
}
</script>

<style lang='scss' scoped>
.bg-keep-in-touch {
  width: 100%;
  background-color: #f5f5f5;
}

.bg-questions {
  background-color: #F5F8FC;
  ;
}
</style>