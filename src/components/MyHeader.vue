<template>
  <div class="container">
    <div>
      <p class="subTitle" v-if="!subTitleIsNull">{{header.subTitle}}</p>
      <p class=" titleText" :style="titleStyle">{{header.title}}</p>
    </div>
    <span class="rightText" v-if="!rightTextIsNull">{{header.rightText}}</span>
  </div>
</template>

<script>
import _ from 'lodash'
import { Header } from '../data/model'

export default {
  name: 'MyHeader',
  props: {
    header: Header
  },
  computed: {
    subTitleIsNull () {
      return _.isEmpty(this.header.subTitle)
    },
    rightTextIsNull () {
      return _.isEmpty(this.header.rightText)
    },
    titleStyle () {
      return {
        fontWeight: this.header.font === 'bold' ? 'bold' : 'normal'
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    padding-bottom: 0.5rem;

    .subTitle {
      color: #808080;
      font-size: 0.6rem;
    }

    .titleText {
      color: #2b2b2b;
      font-size: 1.1rem;
    }

    .rightText {
      text-align: right;
      font-size: 0.8rem;
      color: @color-action;
    }
  }

</style>
