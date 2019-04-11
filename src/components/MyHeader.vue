<template>
  <div class="container">
    <div>
      <p class="subTitle" v-if="!subTitleIsNull">{{header.subTitle}}</p>
      <p class="titleText" :style="titleStyle">{{header.title}}</p>
    </div>
    <span class="rightText" :class="{to_right:!rightTextIsNull}" v-if="!rightTextIsNull">{{header.rightText}}</span>
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
      let ts = {
        fontSize: '1rem'
      }

      switch (this.header.font) {
        case 'bigBold':
          ts.fontSize = '1.2rem'
          ts.fontWeight = 'bold'
          break
        case 'bold':
          ts.fontWeight = 'bold'
          break
      }
      return ts
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
    align-items: flex-end;
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

    .to_right:after {
      content: url("../assets/image/to_right.png");
      display: inline-block;
      height: 50%;
    }
  }

</style>
