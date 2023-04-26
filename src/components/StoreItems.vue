<template>
  <section class="container wrapper-items">
    <ItemBookStore />
  </section>
</template>

<script>
import ItemBookStore from '@/components/ItemBookStore';
export default {
  name: 'StoreItems',
  components: {
    ItemBookStore,
  }
}
</script>

<style lang='scss' scoped>
.wrapper-items {
  padding: 115px 0;
}
</style>