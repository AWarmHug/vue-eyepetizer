<template>
  <div class="container">
    <div class="titleText">{{item.data.text}}</div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'FooterTextCard',
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
  computed: {}
}
</script>

<style scoped lang="less">
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/config.less";

  .container {
    .titleText {
      text-align: right;
      font-size: 0.8rem;
      color: @color-action;
      padding: 0 1rem;
    }

    .titleText:after {
      content: url("../assets/image/to_right.png");
      display: inline-block;
      height:50%;
    }
  }

</style>
