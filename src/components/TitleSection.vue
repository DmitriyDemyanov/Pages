<template>
  <div>
    <div :class='`${color} ${type}`' class="title">{{ title }}</div>
    <div :class='`${type}`' class="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'dark'
    },
    type: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang='scss' scoped>
.title {
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  text-transform: capitalize;
}

.dark {
  color: var(--main-color-dark);
}

.light {
  color: #fff;
}

.bar {
  width: 55px;
  height: 3px;
  background-color: var(--main-color-beer);
  margin-top: 11px;
}

.center {
  text-align: center;
  margin: 0 auto;
  margin-top: 11px;
}
</style>