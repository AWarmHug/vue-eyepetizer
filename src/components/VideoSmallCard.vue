<template>
  <div class="container" @click="goVideo()">
    <div class="cover" :style="{backgroundImage: `url('${item.data.cover.feed}')`}">
      <span class="time">{{_s2t(item.data.duration)}}</span>
    </div>
    <p class="title">{{item.data.title}}</p>
    <p class="category">{{`#${item.data.category}`}}</p>

  </div>
</template>

<script>
import { s2t } from '../data/data'

export default {
  name: 'VideoSmallCard',
  props: {
    item: Object
  },
  methods: {
    _s2t (duration) {
      return s2t(duration)
    },
    goVideo () {
      console.log('dianj le ')
      this.$router.push({ name: 'video', params: { item: this.item } })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/common-widget.less";

  .container {
    width: 100%;
    margin: 0 auto;
    display: grid;
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 2.5rem 2.5rem;

    .cover {
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 0.25rem;
      position: relative;
      grid-row-start: 1;
      grid-row-end: 3;
      margin-right: 1rem;

      .time {
        position: absolute;
        right: 0.5rem;
        bottom: 0.25rem;
        padding: 0.2rem 0.4rem;
        background-color: rgba(0, 0, 0, 0.77);
        color: white;
        font-size: 0.6rem;
        border-radius: 0.15rem;
      }
    }

    .title {
      font-size: 0.8rem;
      font-weight: bold;
      .textClamp(3);
    }

    .category {
      font-size: 0.7rem;
      font-weight: 200;
      line-height: 3rem;
      .textClamp;
    }

  }

</style>
