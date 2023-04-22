<template>
  <div :class='width'>
    <div :class='`${color} ${type} ${title_padding}`' class="title"> {{ title }} </div>
    <div :class='`${type} ${bar_dark} `' class="bar"></div>
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
    title_padding: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'dark'
    },
    type: {
      type: String,
      default: 'center',
    },
    bar_dark: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'default'
    },

  }
}
</script>

<style lang='scss' scoped>
.title {
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
}

.dark {
  color: var(--main-color-dark);
}

.light {
  color: #fff;
}



.bar-dark {
  background-color: var(--main-color-dark);
}

.title-padding {
  padding-bottom: 12px;
}

.center {
  text-align: center;
  margin: 0 auto;
}

.bar {
  width: 55px;
  height: 3px;
  background-color: var(--main-color-beer);
  margin-top: 22px;
}

.small {
  width: 326px;
}
</style>