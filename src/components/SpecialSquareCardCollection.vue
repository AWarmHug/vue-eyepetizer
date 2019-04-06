<template>
  <div class="container">
    <my-header :header="item.data.header"></my-header>
    <div class="list" :style="gridStyle">
      <square-card-of-category v-for="(it,index) in item.data.itemList" :key="index"
                               :item="it"></square-card-of-category>
    </div>
  </div>

</template>

<script>
import MyHeader from './MyHeader'
import SquareCardOfCategory from './SquareCardOfCategory'
import { ItemCollection } from '../data/model'

export default {
  name: 'SpecialSquareCardCollection',
  components: { SquareCardOfCategory, MyHeader },
  props: {
    item: ItemCollection
  },
  data () {
    return {
      gridStyle: {
        'grid-template-columns': `repeat(${Math.ceil(this.item.data.itemList.length / 2)}, 5rem)`
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/padding-bottom.less";

  @grid-template-length: 5rem;
  @grid-gap-length: 0.25rem;

  .container {
    .list {
      padding-left: 1rem;
      padding-right: 1rem;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      display: grid;
      grid-template-rows: repeat(2, @grid-template-length);
      grid-gap: @grid-gap-length @grid-gap-length;
    }
  }

</style>
