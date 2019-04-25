<template>
  <div class="container">
    <img class="pic" :src="author.icon">
    <div class="content">
      <p class="title">{{author.name}}</p>
      <p class="desc">{{author.description}}</p>
    </div>
    <div>
      <button class="btn">+ 关注</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: Object
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/common-widget.less";

  .container {
    display: grid;
    grid-template-columns: 2.5rem auto 3rem;
    grid-template-rows: 3rem;
    grid-column-gap: 0.6rem;
    align-items: center;
    box-sizing: border-box;

    .pic {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
    }

    .content {

      .title {
        font-size: 0.8rem;
        font-weight: bold;
      }

      .desc {
        font-size: 0.6rem;
        .textClamp;
      }
    }

    .btn {
      color: white;
      border-color: white;
      font-weight: bold;
    }
  }
</style>
