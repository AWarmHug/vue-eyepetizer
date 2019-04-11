<template>
  <div class="container">
    <span class="titleText" :style="titleStyle">{{item.data.text}}</span>
    <span class="rightText" :class="{to_right:!rightTextIsNull}" v-if="!rightTextIsNull">{{item.data.rightText}}</span>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TextCard',
  props: {
    item: Object
  },
  data () {
    return {
      titleStyle: {
        color: '#2b2b2b',
        fontSize: '1.1rem'
      }
    }
  },
  computed: {
    rightTextIsNull () {
      return _.isEmpty(this.item.data.rightText)
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
    font-weight: bold;
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

</style>
