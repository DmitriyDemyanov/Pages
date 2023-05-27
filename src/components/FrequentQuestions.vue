<template>
  <section class='wrapper-section container'>
    <TitleSection title='Frequent Questions?' />
    <div class="wrapper-questions">
      <div class="wrapper-item" v-for="(el,ind) in getOfterQuestions" :key='ind'>
        <div class="wrapper-title d-flex align-items-baseline">
          <div class="circle-full">
            <div class="circle-pointer"></div>
          </div>

          <h4 class="title-question fz-cardo-24px">{{ el.title }}
          </h4>
        </div>
        <div class="text-question fz-inter-19px">{{ el.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection'
import { mapGetters } from 'vuex'
export default {
  name: 'FrequentQuestions',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getOfterQuestions'])
  },
}
</script>

<style lang='scss' scoped>
h4 {
  margin: 0;
}

.wrapper-section {
  padding: 146px 0;
}

.wrapper-questions {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 85px;
}

.wrapper-item {
  margin-top: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(27, 55, 100, 0.2);

}

.circle-full {
  position: relative;
  margin-right: 16px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--main-color-beer);
}

.circle-pointer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #F5F8FC;
}

.title-question {
  color: var(--main-color-dark);
}

.text-question {
  padding-left: 30px;
  color: #969AA0;
}
</style>