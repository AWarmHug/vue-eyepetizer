<template>
  <div class="container">
    <component v-for="(item,index) in values" :key="index" :is="item.name" :item="item.json">
    </component>
  </div>
</template>

<script>
import { getAllRec } from '../data/data'
import { itemList2Widgets, widgets } from '../components/data2widget'

export default {
  name: 'EyeRecommend',
  components: widgets,
  created () {
    this._getAllRec()
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    _getAllRec () {
      getAllRec()
        .then(value => {
          console.log(value)
          this.values = itemList2Widgets(value.itemList)
          console.log(this.values)
        })
        .catch(reason => {
          console.log(this.reason)
        })
    }
  }

}
</script>

<style scoped>

</style>
