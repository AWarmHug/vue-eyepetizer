<template>
  <div class="container">
    <my-header :header="item.data.header"></my-header>
    <div class="list" :style="gridStyle">
      <square-card-of-column v-for="(it,index) in item.data.itemList" :key="index"
                             :item="it"></square-card-of-column>
    </div>
  </div>

</template>

<script>
import MyHeader from './MyHeader'
import SquareCardOfColumn from './SquareCardOfColumn'

export default {
  name: 'ColumnCardList',
  components: { SquareCardOfColumn, MyHeader },
  props: {
    item: Object
  },
  data () {
    return {
      gridStyle: {
        'grid-template-columns': `repeat(${Math.ceil(this.item.data.itemList.length / 2)}, ${(2 / this.item.data.itemList.length) * 100}%)`
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
