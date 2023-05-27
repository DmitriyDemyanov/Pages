<template>
  <section class='wrapper-section container'>
    <TitleSection title='Frequent Questions?' />
    <div class="wrapper-questions">
      <div class="wrapper-item" v-for="(el,ind) in getOfterQuestions" :key='ind'>
        <div class="wrapper-title d-flex align-items-baseline" @click='showAnswerQuestion(el.id)'>
          <div class="circle-full">
            <div class="circle-pointer" :class='{ "show-pointer": circlePointer }'></div>
          </div>

          <h4 class="title-question fz-cardo-24px">{{ el.title }}
          </h4>
        </div>
        <div class="text-question fz-inter-19px" :class='{ "show-pointer": circlePointer }'>{{ textQuestion }}</div>
        <!-- <div class="test">{{ textQuestion }}</div> -->
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
  data() {
    return {
      circlePointer: true,
      textQuestion: '',
    }
  },
  computed: {
    ...mapGetters(['getOfterQuestions'])
  },
  methods: {
    showAnswerQuestion(id) {
      console.log('Answer#$#$#$#',id)
      this.circlePointer = false;
      this.textQuestion = this.getOfterQuestions.find(el => el.id === id).text;

      console.log('this.textQuestion',this.textQuestion)
    }
  }
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

.wrapper-title {
  cursor: pointer;
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

.show-pointer {
  display: none;
}

.title-question {
  color: var(--main-color-dark);
}

.text-question {
  padding-left: 30px;
  color: #969AA0;
}
</style>