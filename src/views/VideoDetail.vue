<template>
  <div class="container blurred" :style="`background-image:url('${item.data.cover.blurred}')`">

    <div>
      <video id="video" width="100%" controls="controls" preload="auto">您的浏览器不支持video标签>
        <source :src="item.data.playUrl" type="video/mp4">
      </video>
    </div>
    <div class="info">
      <p class="title">{{item.data.title}}</p>
      <p class="category">{{`#${item.data.category}`}}</p>
      <p class="description">{{item.data.description}}</p>
    </div>
    <author class="author" :author="item.data.author"></author>
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">
    </component>
  </div>
</template>

<script>
import { getRelated } from '../data/data'
import Author from '../components/Author'
import VideoSmallCard from '../components/VideoSmallCard'
import { itemList2Widgets, widgets } from '../components/data2widget'
import TextCard from '../components/TextCard'

export default {
  name: 'VideoDetail',
  components: { Author, VideoSmallCard, TextCard },
  props: {
    item: Object
  },
  created () {
    this._getRelated()
  },
  data () {
    return {
      bg: {
        backgroundImage: `url('${this.item.data.cover.blurred}')`
      },
      values: []
    }
  },
  methods: {
    _getRelated () {
      getRelated(this.item.data.id)
        .then(value => {
          console.log(value)
          this.values = itemList2Widgets(value.itemList)
          console.log(this.values)
        })
        .catch(reason => {
          console.log(this.reason)
        })
    }
  }

}
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 100%;
    color: white;
    overflow-y: auto;

    .info {
      padding: 0 0.5rem 0.5rem;

      .title {
        font-size: 1rem;
        font-weight: 500;
      }

      .category {
        font-size: 0.8rem;
      }

      .description {
        font-size: 0.6rem;
      }
    }

    .author {
      padding: 0 0.5rem 0.5rem;
    }
  }

  .blurred {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

</style>
