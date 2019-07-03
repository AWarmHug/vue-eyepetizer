<template>
  <div class="container" :style="{backgroundImage: `url('${item.data.image}')`}" @click="click">
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
  name: 'SquareCardOfColumn',
  props: {
    item: Object
  },
  methods: {
    descriptionIsEmpty (item) {
      return _.isEmpty(item.data.description)
    },
    click () {
      let actionUrl = this.item.data.actionUrl
      if (actionUrl.indexOf('url=', 0) !== -1) {
        let url = this.decodeUnicode(actionUrl.substring(actionUrl.indexOf('url=', 0) + 4, actionUrl.length))
        console.log(url)
        window.location.href = url
      } else {
        alert('原生功能')
      }
    },
    decodeUnicode (str) {
      str = str.replace(/\\/g, '%')
      return unescape(str)
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
