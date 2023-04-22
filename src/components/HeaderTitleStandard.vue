<template>
  <section class="container wrapper-section-header ">
    <TitleSection :title='title' :color='color' :title_padding='padding' />
    <div class="header-subtitle fz-inter-19px">{{ subtitle }}</div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
export default {
  name: 'HeaderTitleStandard',
  components: {
    TitleSection,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section-header {
  padding-top: 138px;
  font-size: 50px;
}



.header-subtitle {
  width: 633px;
  text-align: center;
  padding-top: 28px;
  margin: 0 auto;
}
</style>