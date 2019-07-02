<template>
  <div class="container">
    <TagInfo v-if="tag.tagInfo" :tag-info="tag.tagInfo"></TagInfo>
    <TabList v-if="tag.tabInfo" :tabList="tag.tabInfo.tabList" :click="click"></TabList>
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">
    </component>
  </div>
</template>

<script>
import { getTagIndex, getLink } from '../data/data'

import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'TagIndex',
  components: widgets,
  props: {
    id: String
  },
  created () {
    this.fetchData()
  },
  data () {
    return {
      tag: Object,
      values: Array
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    _getTagIndex () {
      getTagIndex(this.id)
        .then(value => {
          this.tag = value
          this.click(0)
        })
        .catch(reason => {
          console.log(reason.toString())
        })
    },
    fetchData () {
      this.id = this.$route.params.id
      this._getTagIndex()
    },
    click (index) {
      getLink(this.tag.tabInfo.tabList[index].apiUrl)
        .then(value1 => {
          this.values = itemList2Widgets(value1.itemList)
        })
    }
  }
}
</script>

<style scoped lang="less">

</style>
