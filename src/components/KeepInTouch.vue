<template>
  <section class="wrapper-section container d-flex justify-content-between">
    <div class="content-wrapper">
      <TitleSection title='Keep in Touch' type='start' />
      <div class="subtitle-content fz-inter-19px">There are many variations of passages of Lorem Ipsum available, but the
        majority
        have suffered
        alteration in some form, by injected humour, or random used words which don`t look even slightly believable.</div>

      <div class="about-us-items d-flex align-items-center" v-for='(el,ind) in getKeepTouchInfo' :key='ind'>
        <div class="items-image d-flex justify-content-center align-items-center"><img
            :src="require(`@/assets/images/icons/${el.image}.svg`)" alt="icon"></div>
        <div class="item-wrapper">
          <div class="item-title fz-cardo-24px" style="color:var(--main-color-dark)">{{ el.title }}</div>
          <div class="item-address"> <a class="disabled no-link" :href="`${el.link}`"> {{ el.address }}</a> </div>
        </div>
      </div>
    </div>
    <div class="form-wrapper fz-inter-19px">
      <div class='input-grid '>
        <div class="input-wrapper">
          <img class="image-input" src="@/assets/images/icons/user-input-beer.svg" alt="">
          <input class="input-item " type="text" placeholder="Name" v-model="form.name">
        </div>
        <div class="input-wrapper">
          <img class="image-input" src="@/assets/images/icons/user-input-beer.svg" alt="">
          <input class="input-item " type="email" placeholder="Email" v-model="form.email">
        </div>
      </div>
      <div class="input-wrapper">
        <img class="image-input" src="@/assets/images/icons/user-input-beer.svg" alt="">
        <input class="input-item " type="phone" placeholder="Phone" v-model="form.phone">
      </div>
      <div>
        <div class="textarea-wrapper">
          <img class="image-textarea" src="@/assets/images/icons/user-input-beer.svg" alt="">
          <textarea class="textarea-item" placeholder="Message" v-model="form.text"></textarea>
        </div>
      </div>

      <div class="checkbox-wrapper d-flex align-items-center" @click='onCheckbox'>
        <div class="border-checkbox" :class='{ "test": form.checkbox }'>

        </div>

        <span class="text-checkbox fz-inter-18px">Keep me up to date with news and offers from time to time by
          email</span>
      </div>

      <MainButton size='full' title='Send Message' />
    </div>
  </section>
</template>

<script>

import TitleSection from '@/components/TitleSection';
import MainButton from '@/components/MainButton';


import { mapGetters } from 'vuex';
export default {
  name: 'KeepInTouch',
  components: {
    TitleSection,
    MainButton,
  },
  data() {
    return {
      form: {
        checkbox: false,
        name: '',
        email: '',
        phone: '',
        text: '',
      },
    }
  },
  computed: {
    ...mapGetters(['getKeepTouchInfo']),
  },
  methods: {
    onCheckbox() {
      console.log('onCheckbox');
      if (!this.form.checkbox) {
        this.form.checkbox = true
      }
      else if (this.form.checkbox) {
        this.form.checkbox = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  padding: 111px 0 130px;
}

.content-wrapper {
  max-width: calc(50% - 50px);
}

.form-wrapper {
  min-width: calc(50% - 50px);
}

.subtitle-content {
  margin-top: 27px;
  margin-bottom: 15px;
  color: #969AA0;
}

.about-us-items {
  margin: 30px 0;
}

.items-image {
  margin-right: 27px;
  width: 65px;
  height: 65px;
  background-color: var(--main-color-dark);
}

.item-address {
  color: #969AA0;

  a {
    color: #969AA0;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: var(--main-color-beer);
    }
  }
}

.disabled {
  color: red;
  cursor: default !important;
}

//_________________________FORM_INPUT
.input-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 15px;
}

.image-input {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
}

.input-item {
  width: 100%;
  height: 65px;

  padding-left: 60px;
  border: 1px solid #DCE1E9;
  color: #969AA0;

  &::placeholder {
    color: #969AA0;
  }

  &:focus-visible {
    outline: none;
  }

}

.textarea-item {
  min-height: 220px;
  width: 100%;
  padding-left: 60px;
  padding-top: 17px;
  border: 1px solid #DCE1E9;

  &::placeholder {
    color: #969AA0;
  }

  &:focus-visible {
    outline: none;
  }
}

.textarea-wrapper {
  position: relative;
}

.image-textarea {
  position: absolute;
  top: 21px;
  left: 25px;
}

.checkbox-wrapper {
  margin: 28px 0 40px 0;
}

.border-checkbox {
  width: 25px;
  height: 25px;
  border: 1px solid #DCE1E9;
  border-radius: 50%;
  margin-right: 14px;
  background-color: #fff;

}

.test {

  background-image: url('@/assets/images/icons/check-symbol-checkbox.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.text-checkbox {
  color: #969AA0;
  cursor: pointer;
}
</style>
