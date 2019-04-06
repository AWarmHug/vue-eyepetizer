<template>
  <div class="container">
    <img class="pic-cover" :src="item.image">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    item: Object
  }
}
</script>

<style scoped>
  .pic-cover {
    width: 100%;
  }

</style>
