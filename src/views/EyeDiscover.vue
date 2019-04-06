<template>
  <div class="container">
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.data">
    </component>
  </div>
</template>

<script>
import { getDiscovery } from '../data/data'
import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'Discover',
  components: widgets,
  created () {
    this._getDiscover()
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    _getDiscover () {
      getDiscovery()
        .then(value => {
          console.log(value)
          this.values = itemList2Widgets(value.itemList)
          console.log(this.values)
        })
        .catch(reason => {
          console.log(reason)
        })
    },
    getHtml (item) {
      console.log(item)
      return item
    }
  }
}

</script>

<style scoped>

</style>
