<template>
  <div class="container">
    <img class="pic" :src="item.data.icon">
    <div class="content">
      <p class="title">{{item.data.title}}</p>
      <p class="desc">{{item.data.description}}</p>
    </div>
    <div>
      <button class="btn">+关注</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BriefCard',
  props: {
    item: Object
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/config.less";
  @import "../assets/css/padding-bottom.less";
  @import "../assets/css/common-widget.less";

  .container {
    display: grid;
    grid-template-columns: 2.5rem auto 2.5rem;
    grid-template-rows: 3rem;
    padding: 0 1rem;
    grid-column-gap: 0.6rem;
    align-items: center;

    .pic {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
    }

    .content {

      .title {
        font-size: 0.8rem;
        font-weight: bold;
      }

      .desc {
        font-size: 0.6rem;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

</style>
