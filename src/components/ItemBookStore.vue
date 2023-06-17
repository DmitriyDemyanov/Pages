<template>
  <section class="wrapper-section">

    <BookComponent v-for="(el,ind) in getAuthorBooks" :key='ind' :book='el' />

  </section>
</template>

<script>
import BookComponent from '@/components/BookComponent';
import { mapGetters } from 'vuex';
export default {
  name: 'ItemBookStore',
  components: {
    BookComponent,
  },
  computed: {
    ...mapGetters(['getMyStoreBook','getAuthorBooks'])
  }
}
</script>

<style lang='scss' scoped>
.wrapper-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 70px 50px;
}
</style>