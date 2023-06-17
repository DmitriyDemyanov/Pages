<template>
  <div>
    <MainModalComponent title='ERROR' @close-modal='closeModal'>

      <template #modal-body>
        <div> {{ getErrorMessage }} </div>
      </template>

    </MainModalComponent>
  </div>
</template>

<script>
import MainModalComponent from '@/components/MainModalComponent';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'ErrorComponent',
  components: {
    MainModalComponent,
  },
  computed: {
    ...mapGetters(['getErrorMessage'])
  },
  methods: {
    ...mapActions(['errorModal']),
    closeModal() {
      this.errorModal(false)
    }
  }
}
</script>

<style></style>