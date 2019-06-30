<template>
  <div class="container">
    <ul class="list" :style="gridStyle">
      <li class="tab" v-for="(it,index) in tabList" :key="index" @click="clickItem(index)">
        {{it.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    tabList: Array,
    click: Function
  },
  created () {
  },
  data () {
    return {
      gridStyle: {
        'grid-template-columns': `repeat(${this.tabList.length}, ${this.toPercent(1 / this.tabList.length)})`
      }
    }
  },
  methods: {
    toPercent (point) {
      var str = Number(point * 100).toFixed()
      str += '%'
      return str
    },
    clickItem (index) {
      this.click(index)
    }
  }
}
</script>

<style scoped lang="less">
  .list {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: grid;
  }

  .tab {
    font-size: 0.8rem;
    text-align: center;
    font-weight: bold;
    height: 2rem;
    line-height: 2rem;
  }
</style>
