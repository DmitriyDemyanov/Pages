<template>
  <section class="container wrapper-section">
    <div class="wrapper-content">
      <TitleSection title='Read a free chapter' bar_dark='bar-dark' />
      <div class="subtitle-chapter fz-inter-19px">Making this the first true value generator on the Internet. It of over
        200 Latin
        words, combined with a handful.</div>


      <div class="wrapper-form d-flex align-items-center justify-content-between">

        <input v-model="searchText" @keyup.enter='clickInput' @input='$v.$reset()' class="input-subscribe fz-inter-17px"
          type="text" placeholder="Your Email id...">
        <button @click='clickInput' class="btn-subscribe fz-cardo-19px">
          Subscribe
        </button>

      </div>
      <div class="error" v-if="!$v.searchText.email">It's not an email</div>
      <div class="error" v-if="!$v.searchText.required">It's required field</div>
      <div class="test-input"> <b> {{ getInputTestSubscribe }} </b> </div>
    </div>
  </section>
</template>

<script>
import TitleSection from '@/components/TitleSection';
import { mapActions,mapGetters } from 'vuex';
import { email,required } from 'vuelidate/lib/validators';

export default {
  name: 'ReadFreeChapter',
  components: {
    TitleSection,
  },
  computed: {
    ...mapGetters(['getInputTestSubscribe']),
  },
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    ...mapActions(['createSubscribe']),
    clickInput() {
      this.$v.searchText.$touch();
      if (!this.$v.$invalid) {
        this.createSubscribe(this.searchText);
        this.searchText = '';
      }

    },
  },
  validations: {
    searchText: {
      email,
      required
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  padding-top: 160px;
  padding-bottom: 150px;
}

.wrapper-content {
  padding: 121px 0;
  min-height: 505px;
  background-color: var(--main-color-beer);

}

.subtitle-chapter {
  width: 657px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 38px;
  color: var(--main-color-dark);
  text-align: center;
}

//_________________________________________________________input
.wrapper-form {
  width: 840px;
  height: 65px;
  margin: 0 auto;
}

.input-subscribe {
  width: calc(63% - 5px);
  height: 100%;
  padding: 17px 24px;
  border: none;
  color: #969AA0;
  font-weight: 400;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #969AA0;
  }
}

.btn-subscribe {
  width: calc(37% - 6px);
  height: 100%;
  background-color: var(--main-color-dark);

  &:hover {
    background-color: var(--main-color-beer);
    border: 2px solid var(--main-color-dark);
    color: var(--main-color-dark);
    transition: all 0.4s;
  }
}

.test-input {
  text-align: center;
  margin-top: 20px;
}
</style>