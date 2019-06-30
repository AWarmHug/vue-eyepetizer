<template>
  <div class="container bg" :style="`background-image:url('${tagInfo.bgPicture}')`">

    <h3 class="name">{{tagInfo.name}}</h3>

    <p class="description">{{tagInfo.description}}</p>

    <p class="follow">{{`${tagInfo.tagVideoCount}个视频&nbsp;|&nbsp;${tagInfo.tagFollowCount}人关注&nbsp;|&nbsp;${tagInfo.lookCount}人看过`}}</p>

    <button class="btn">+ 关注</button>

  </div>

</template>

<script>
export default {
  name: 'TagInfo',
  props: {
    tagInfo: Object
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/common-widget.less";

  .bg {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .container {
    color: white;
    padding: 1.2rem 0;
    text-align: center;
    font-weight: 300;

    .name {
      font-size: 1.4rem;
    }

    .description {
      font-size: 0.8rem;
      margin-top: 0.6rem;

    }

    .follow {
      font-size: 0.6rem;
      margin-top: 0.5rem;
    }

    .btn {
      margin-top: 0.5rem;
      color: white;
      border-color: white;
      padding: 0.1rem 0.6rem;
      font-weight: bold;
    }
  }

</style>
