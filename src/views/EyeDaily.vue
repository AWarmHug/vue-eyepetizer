<template>
  <div class="container" ref="container">
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">
    </component>
  </div>
</template>

<script>
import { getFeed } from '../data/data'
import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'EyeDaily',
  components: widgets,
  created () {
    this._getFeed()
  },
  mounted () {
    this.window.addEventListener('scroll', this.scroll(), true)
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    _getFeed () {
      getFeed()
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
      console.log(11111)
    }
  }
}
</script>

<style scoped>

</style>
