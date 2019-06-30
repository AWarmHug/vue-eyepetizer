<template>
  <div class="container" :style="{backgroundImage: `url('${item.data.image}')`} " @click="goTagIndex">
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

export default {
  name: 'SquareCardOfCategory',
  props: {
    item: Object
  },
  methods: {
    descriptionIsEmpty (item) {
      return _.isEmpty(item.data.description)
    },
    goTagIndex () {
      this.$router.push({ name: 'tag', params: { id: this.item.data.id.toString() } })
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
