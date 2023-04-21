<template>
  <div :class='width'>
    <div :class='`${color} ${type}`' class="title">{{ title }}</div>
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
      default: 'center'
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

.bar {
  width: 55px;
  height: 3px;
  background-color: var(--main-color-beer);
  margin-top: 11px;
}

.bar-dark {
  background-color: var(--main-color-dark);
}

.center {
  text-align: center;
  margin: 0 auto;
}

.small {
  width: 326px;

}
</style>