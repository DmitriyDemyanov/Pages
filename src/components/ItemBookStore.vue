<template>
  <section class="wrapper-section-item">
    <div class="img-item d-flex align-items-center justify-content-center"><img src="@/assets/images/photo/book-1.svg"
        alt="photo">
    </div>
    <div class="wrapper-price d-flex align-items-center justify-content-between">
      <div class="title-book fz-cardo-32px">Atomic One’s</div>
      <div class="price-book fz-inter-22px">$23.89</div>
    </div>
    <div class="description-book fz-inter-19px">Many variations of passages of Lorem Ipsum willing araise alteration in
      some form.
    </div>
    <div class="printed-book d-flex align-items-center fz-cardo-24px">
      <div class="circle"></div> Printed Books
    </div>
    <MainButton title='Order Today' size="big" reverse='reverse'/>
  </section>
</template>

<script>
import MainButton from '@/components/MainButton';
export default {
  name: 'ItemBookStore',
  components: {
    MainButton,
  },
}
</script>

<style lang='scss' scoped>
.wrapper-section-item {
  width: 401px;
}

.img-item {
  background-color: #F5F8FC;
  padding: 50px;
}

.wrapper-price {
  padding-top: 21px;
}


.description-book {
  color: #969AA0;
  padding-top: 10px;
  padding-bottom: 24px;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--main-color-beer);
  margin-right: 13px;
}

.printed-book {
  color: var(--main-color-dark);
  padding-bottom: 25px;
}
</style>