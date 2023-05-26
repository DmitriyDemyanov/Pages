<template>
  <section class="wrapper-section container" >
    <div class="content">
      <TitleSection 
      title='Keep in Touch' 
      subtitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random used words which don`t look even slightly believable.'
      type='start'
      />
    </div>
    <div class="input"></div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
export default {
  name: 'KeepInTouch',
  components: {
  TitleSection,
}
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  padding: 111px 0 130px;
}
</style>