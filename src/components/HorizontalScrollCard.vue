<template>
  <div class="container">
    <my-banner v-slot="{it}" :itemList="item.data.itemList" :style="{height:`10rem`}">
      <component :is="getName(it)" :item="it.data"></component>
    </my-banner>
  </div>
</template>

<script>
import { item2widget, widgets } from './data2widget'
import MyBanner from './MyBanner'
import Banner from './Banner'

export default {
  name: 'HorizontalScrollCard',
  components: { MyBanner, Banner },
  props: {
    item: Object
  },
  methods: {
    getName: function (it) {
      return item2widget(it).name
    }
  }
}
</script>

<style scoped>

</style>
