<template>
  <div class="container">
    <img class="pic-cover" :src="item.image||item.data.image">
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
    height: 10rem;
  }

</style>
