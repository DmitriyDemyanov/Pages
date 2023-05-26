<template>
  <section>
    <HeaderTitleStandard title='Contact Us'
      subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      color='light' />
    <div class='bg-keep-in-touch'>
      <KeepInTouch />
    </div>
  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard';
import KeepInTouch from '@/components/KeepInTouch';
export default {
  name: 'ContactUsPage',
  components: {
    HeaderTitleStandard,
    KeepInTouch,
  }
}
</script>

<style lang='scss' scoped>
.bg-keep-in-touch {
  width: 100%;
  background-color: #f5f5f5;
}
</style>