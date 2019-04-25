<template>
  <div class="container">
    <component :is="getName()" :item="getContent()"></component>
    <div class="info">
      <img class="header" :src="getItem().header.icon">
      <div class="content">
        <div class="title">{{getItem().header.title}}</div>
        <div class="desc">{{getItem().header.description}}</div>
      </div>
      <div class="share">
      </div>
    </div>
  </div>
</template>

<script>
import { item2WidgetName, widgets } from './data2widget'
import MyVideo from './MyVideo'

export default {
  name: 'FollowCard',
  components: { MyVideo },
  props: {
    item: Object
  },
  methods: {
    getItem () {
      return this.item.data
    },
    getName () {
      return item2WidgetName(this.getItem().content)
    },
    getContent () {
      return this.getItem().content
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/common-widget.less";

  .info {
    display: grid;
    grid-template-columns: 2.5rem auto 2.5rem;
    grid-template-rows: 3rem;
    grid-column-gap: 0.6rem;
    align-items: center;
    margin-top: 0.5rem;
    padding-left: 1rem;

    .header {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
    }

    .content {
      text-align: left;

      .title {
        font-size: 0.8rem;
        font-weight: bold;
        .textClamp(1);
      }

      .desc {
        font-size: 0.7rem;
        line-height: 1.2rem;
        font-weight: 200;
        margin-top: 0.2rem;
        color: rgba(0, 0, 0, 0.6);
        .textClamp;
      }
    }
  }
</style>
