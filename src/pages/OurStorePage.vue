<template>
  <section>
    <div class="my-store-bg">
      <HeaderTitleStandard title='My Store'
        subtitle='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
        color='light' padding='title-padding' />
      />
    </div>
    <div class="store-items-bg">
      <StoreItems />

    </div>
  </section>
</template>

<script>
import HeaderTitleStandard from '@/components/HeaderTitleStandard';
import StoreItems from '@/components/StoreItems';
export default {
  name: 'OurStorePage',
  components: {
    HeaderTitleStandard,
    StoreItems,

  }
}
</script>

<style lang='scss' scoped>
.my-store-bg {
  width: 100%;
  min-height: 442px;
  background-color: var(--main-color-dark);
}

.store-items-bg {
  width: 100%;
  background-color: #F5F5F5;
}
</style>