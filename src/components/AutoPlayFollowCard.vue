<template>
  <div class="container">
    <div class="info">
      <div class="header">
        <img class="headerPic" :src="getItem().header.icon">
        <div class="author">
          <div class="name">{{getContent().data.author.name}}</div>
          <div class="title"><span class="left">发布: </span>{{getContent().data.title}}</div>
        </div>
      </div>
      <div class="desc">{{getContent().data.description}}</div>
      <div class="tags">
        <span class="tag" v-for="(item,index) in getContent().data.tags" :key="index" @click="clickTag(item)">
          {{item.name}}
        </span>
      </div>
    </div>
    <component :is="getName()" :item="getContent()"></component>
  </div>
</template>

<script>
import { item2WidgetName, widgets } from './data2widget'
import MyVideo from './MyVideo'

export default {
  name: 'AutoPlayFollowCard',
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
    },
    clickTag (item) {
      console.log(item.id)
      this.$router.push({ name: 'tag', params: { id: item.id.toString() } })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/common-widget.less";

  .info {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;

    .header {
      display: grid;
      grid-template-columns: 2.5rem auto;
      grid-template-rows: 3rem;
      grid-column-gap: 0.6rem;
      align-items: center;

      .headerPic {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 1.25rem;
      }

      .author {
        text-align: left;

        .name {
          font-size: 0.8rem;
          font-weight: bold;
          .textClamp(1);
        }

        .title {
          font-size: 0.8rem;
          margin-top: 0.2rem;
          .textClamp(1);

          .left {
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.8rem;
            margin-top: 0.2rem;
          }
        }
      }
    }

    .desc {
      font-size: 0.7rem;
      line-height: 1.2rem;
      font-weight: 200;
      .textClamp(3);
    }

    .tag {
      font-size: 0.7rem;
      color: #4b9fff;
      text-align: center;
      background-color: rgba(0, 139, 255, 0.22);
      border-radius: 0.1rem;
      margin: 0 0.2rem;
      padding: 0.1rem 0.2rem;
    }
  }

</style>
