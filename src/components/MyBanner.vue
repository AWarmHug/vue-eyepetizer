<template>
  <div class="container">
    <swipe class="my-swipe" :auto="0">
      <swipe-item class="my-swipe-item" :class=" `my-swipe-item${index}`" v-for="(it,index) in itemList" :key="index">
        <slot :it="it">{{it.data.title}}</slot>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>

export default {
  name: 'MyBanner',
  props: {
    itemList: Array
  },
  methods: {
    getName (it) {
      return 'Banner'
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    padding-bottom: 0.5rem;

    .my-swipe {
      width: 100%;
      height: 10rem;
      text-align: center;

    }
  }

</style>
