<template>
  <div class="container" :scroll="scroll">
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">
    </component>
  </div>
</template>

<script>
import { getFeed } from '../data/data'
import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'EyeList',
  components: widgets,
  created () {
    this._getFeed()
  },
  props: {
    me: Function
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    _getFeed () {
      this.me()
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
