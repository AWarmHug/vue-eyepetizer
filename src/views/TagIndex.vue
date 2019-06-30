<template>
  <div class="container">
    <tag-info v-if="tag.tagInfo" :tag-info="tag.tagInfo"></tag-info>
    <tab-list v-if="tag.tabInfo" :tab-list="tag.tabInfo.tabList"></tab-list>
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
          getLink(this.tag.tabInfo.tabList[0].apiUrl)
            .then(value1 => {
              this.values = itemList2Widgets(value1.itemList)
            })
        })
        .catch(reason => {
          console.log(reason.toString())
        })
    },
    fetchData () {
      this.id = this.$route.params.id
      this._getTagIndex()
    }
  }
}
</script>

<style scoped lang="less">

</style>
