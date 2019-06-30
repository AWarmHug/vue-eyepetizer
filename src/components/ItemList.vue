<template>
  <div id="container">
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">

    </component>

  </div>
</template>

<script>
import { getLink } from '../data/data'
import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'ItemList',
  components: widgets,
  created () {
  },
  props: {
    apiUrl: String
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    _getLink () {
      getLink(this.apiUrl)
        .then(value => {
          console.log(value)
          this.values = itemList2Widgets(value.itemList)
          console.log(this.values)
        })
        .catch(reason => {
          console.log(reason)
        })
    },
    scroll () {
      console.log(111)
    }
  }
}
</script>

<style scoped>

</style>
