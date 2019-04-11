<template>
  <my-header></my-header>
</template>

<script>
import MyHeader from './MyHeader'
import { widgets } from './data2widget'
import { Item } from '../data/model'

export default {
  name: 'HeaderWidget',
  components: { widgets, MyHeader },
  props: Item

}
</script>

<style scoped>

</style>
