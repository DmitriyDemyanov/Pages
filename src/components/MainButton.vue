<template>
  <button :class="`btn-${type} btn-${size} btn-${reverse} main-btn`">{{ title
  }}</button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    size: {
      type: String,
      default: 'norm',
    },
    type: {
      type: String,
      default: 'default',
    },
    title: {
      type: String,
      default: 'Order Today'
    },
    reverse: {
      type: String,
      default: '',
    },

  },

};
</script>

<style lang="scss" scoped>
.main-btn {
  font-family: 'Cardo';
  font-weight: 700;
  border: 2px solid var(--main-color-beer);
  background-color: var(--main-color-beer);
  color: var(--main-color-dark);
  transition: all 0.5s;

  &:hover {
    background-color: var(--main-color-dark);
    color: var(--main-color-light);
    border: 2px solid var(--main-color-beer);
  }
}

.btn-reverse {
  background-color: transparent;
  color: var(--main-color-dark);
  border: 2px solid var(--main-color-beer);

  &:hover {
    border: 2px solid var(--main-color-beer);
    background-color: var(--main-color-beer);
    color: var(--main-color-dark);
  }
}

.reverse-dark {
  background-color: var(--main-color-dark);
  color: #fff;

  &:hover {
    border: 2px solid var(--main-color-beer);
    background-color: var(--main-color-beer);
    color: var(--main-color-dark);
  }
}

.btn-norm {
  width: 180px;
  height: 50px;
  font-size: 19px;
}

.btn-big {
  width: 220px;
  height: 65px;
  font-size: 19px;
}



.btn-full {
  width: 100%;
  height: 65px;
  font-size: 19px;

  &:hover {
    transition: all 0.4s;
    border: 2px solid var(--main-color-beer);
    background-color: transparent;
    color: var(--main-color-dark);
  }
}
</style>
