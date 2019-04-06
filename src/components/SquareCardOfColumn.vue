<template>
  <div class="container" :style="{backgroundImage: `url('${item.data.image}')`}">
    <div>
      <p class="title">
        {{item.data.title}}
      </p>
      <p class="description" v-if="!descriptionIsEmpty(item)">
        {{item.data.description}}
      </p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { SquareCard } from '../data/model'

export default {
  name: 'SquareCardOfColumn',
  props: {
    item: SquareCard
  },
  methods: {
    descriptionIsEmpty (item) {
      return _.isEmpty(item.data.description)
    }
  }
}
</script>

<style scoped lang="less">

  .container {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 0.25rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .title {
      font-size: 0.9rem;
      font-weight: bold;
    }

    .description {
      font-size: 0.6rem;
    }
  }

</style>
