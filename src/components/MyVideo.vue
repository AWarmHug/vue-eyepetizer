<template>
  <div class="container">
    <div class="cover" :style="{backgroundImage: `url('${item.data.cover.feed}')`}">
      <span class="time">{{_s2t(item.data.duration)}}</span>
    </div>
  </div>
</template>

<script>
import { s2t } from '../data/data'

export default {
  name: 'MyVideo',
  props: { item: Object },
  methods: {
    _s2t (duration) {
      return s2t(duration)
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

    .cover {
      height: 10rem;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 0.25rem;
      margin-left: 1rem;
      margin-right: 1rem;
      position: relative;

      .time {
        position: absolute;
        right: 1rem;
        bottom: 0.5rem;
        padding: 0.2rem 0.4rem;
        background-color: rgba(0, 0, 0, 0.77);
        color: white;
        font-size: 0.6rem;
        border-radius: 0.15rem;
      }
    }
  }

</style>
