<template>
  <div class="user-item">
    <div class="d-flex align-items-center">
      <div class="user-photo"><img :src="userItem.photo" alt="photo"></div>
      <div>
        <div class="user-full-name fz-cardo-24px">{{ userItem.name }}</div>
        <div class="user-rating d-flex">
          <div class="user-circle full" v-for="ind in Math.floor(userItem.rating)" :key='ind'></div>

          <div class="user-circle half small" v-show="userItem.rating - Math.floor(userItem.rating)"
            :style="`background: linear-gradient(to right, var(--main-color-beer) 0%, var(--main-color-beer) ${percentCircle}, var(--main-color-dark) ${percentCircle}, var(--main-color-dark) 100%);`">
          </div>
          <div class="user-circle circle-empty"></div>

        </div>
      </div>
    </div>
    <div class="user-title fz-cardo-22px">{{ userItem.title }}</div>
    <div class="user-text fz-inter-19px">{{ userItem.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'ReaderUser',
  props: {
    userItem: {
      type: Object,
      required: true,
    }
  },
  computed: {
    percentCircle() {
      return ((this.userItem.rating - (Math.floor(this.userItem.rating))) * 100) + '%';
    }
  },
}
</script>

<style lang='scss' scoped>
.wrapper-users {
  width: calc(66% - 111px);
}

.user-photo {
  width: 85px;
  height: 85px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.two-users {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.third-user {
  padding-top: 40px;
}


.user-item {
  width: 370px;
  height: 310px;
  background-color: var(--main-color-dark);
  padding: 34px 31px;

  // margin: auto 0;

}

.user-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 3px;
}

.circle-empty {
  border: 2px solid var(--main-color-beer);
}

.user-title {
  padding-top: 20px;
  padding-bottom: 10px;
  color: #fff;

}

//______________________________________________circle
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.full {
  background-color: var(--main-color-beer);
}

.half {
  border: 2px solid var(--main-color-beer);

}

.number-rating {
  margin-left: 5px;
}

.all-rating {
  color: var(--main-color-dark);
}
</style>