<template>
  <div class="container">
    <my-header v-if="!headerIsEmpty" :header="item.header"></my-header>
    <component v-for="(it,index) in item.itemList" :key="index" :is="it.data.dataType" :item="it.data">
    </component>

  </div>
</template>

<script>
import _ from 'lodash'
import MyHeader from './MyHeader'
import { widgets } from './data2widget'
import { ItemCollection } from '../data/model'

export default {
  name: 'ItemCollection',
  components: { MyHeader, widgets },
  props: {
    item: ItemCollection
  },
  computed: {
    headerIsEmpty () {
      return _.isEmpty(this.item.header)
    }
  }

}
</script>

<style scoped>

</style>
