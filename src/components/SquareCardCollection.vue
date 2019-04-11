<template>
  <div class="container">
    <my-header :header="item.data.header"></my-header>
    <my-banner v-slot="{it}" :itemList="item.data.itemList" :style="{height:`14rem`}">
      <component :is="getName(it)" :item="it"></component>
    </my-banner>
  </div>
</template>

<script>
import { item2WidgetName, widgets } from './data2widget'
import MyBanner from './MyBanner'
import MyHeader from './MyHeader'
import FollowCard from './FollowCard'

export default {
  name: 'SquareCardCollection',
  components: {
    MyBanner,
    MyHeader,
    FollowCard
  },
  props: {
    item: Object
  },
  methods: {
    getName (it) {
      return item2WidgetName(it)
    }
  }
}
</script>

<style scoped>

</style>
