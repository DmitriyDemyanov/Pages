<template>
  <button class="btn-norm">Order Today</button>
</template>

<script>
export default {
  name: 'MainButton',
};
</script>

<style lang="scss" scoped>
.btn-norm {
  width: 180px;
  height: 50px;
  border: 2px solid var(--main-color-beer);
  background-color: var(--main-color-beer);
  color: var(--main-color-dark);
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  &:hover {
    background-color: var(--main-color-dark);
    color: var(--main-color-light);
    border: 2px solid var(--main-color-beer);
    transition: all 0.5s;
  }
}
</style>
