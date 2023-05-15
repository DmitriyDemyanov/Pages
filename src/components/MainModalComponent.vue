<template>
  <section class="modal-wrapper-bg" @click='clickOnEmptySpace'>

    <div class="modal-window">
      <!-- HEADER -->
      <div class="header-modal d-flex align-items-center justify-content-between">

        <div class="title-modal">{{ title }}</div>
        <div v-show="showCloseIcon" class="cross" @click='closeModal'>
          <div class="bar-right"></div>
          <div class="bar-left"></div>
        </div>

      </div>

      <!-- BODY -->
      <div class="body-modal">
        <slot name="modal-body"></slot>
      </div>

      <!-- FOOTER -->
      <div class="footer-modal">

        <slot name='modal-footer'></slot>

      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MainModalComponent',

  props: {
    title: {
      type: String,
      default: '',
    },
    showCloseIcon: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    clickOnEmptySpace(event) {
      const target = event.target.closest(".modal-window");
      if (!target && !event.target.classList.contains("item-remove")) {
        this.closeModal();
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.modal-wrapper-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(27, 55, 100, 0.5);
}

.modal-window {
  width: 40%;
  max-height: 90%;
  position: absolute;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  background-color: #fff;
}

.header-modal {
  height: 130px;
  width: 100%;
  background-color: var(--main-color-beer);
  padding: 0 76px;
}

.title-modal {
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: var(--main-color-dark)
}

.cross {
  position: relative;
  cursor: pointer;
  padding: 0 20px 40px;
}

.bar-right {
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: #000;
  transform: rotate(-45deg);
}

.bar-left {
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: #000;
  transform: rotate(45deg);
}

///////////////////////////////////////////BODY

.body-modal {
  width: 100%;
  max-height: 50vh;
  padding: 30px 45px;
  overflow-y: auto;
}

.item-img {
  width: 130px;
  height: 176px;
  background: #F9FBFF;
  border: 4px solid #DBE1E9;

  img {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    object-fit: cover;
  }
}

.wrapper-content {
  padding-left: 40px;
}

.item-title {
  color: var(--main-color-dark);
  line-height: 52px;
}

.item-price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #969AA0;
}

.item-remove {
  margin-top: 44px;
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  color: #1B3764;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    color: var(--main-color-beer);
  }
}

.item-counter {
  width: 120px;
  height: 60px;
  background: #F9F9F9;
  border: 1px solid #E8E8E8;
  padding-left: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #969AA0;
}

///////////////////////////////////////////////////FOOTER
.footer-modal {
  width: 100%;
  min-height: 25vh;
  padding: 25px 76px 30px 76px;
  border-top: 2px solid rgba(27, 55, 100, 0.5);
  color: #000;
}

.wrapper-total {
  margin-bottom: 30px;
}

.total-title {
  color: var(--main-color-dark);
}

.total-price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #1B3764;
}
</style>