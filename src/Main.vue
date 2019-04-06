<template>
  <div id="app">
    <div class="nav">
      <router-link tag="a" to="/" class="tab-item">
        <span class="tab-item-text">发现</span>
      </router-link>
      <router-link tag="a" to="/recommend" class="tab-item">
        <span class="tab-item-text">推荐</span>
      </router-link>
      <router-link tag="a" to="/daily" class="tab-item">
        <span class="tab-item-text">日报</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="less">
  @import "assets/css/config.less";

  .nav {
    text-align: center;
    padding: 0.5rem 0;

    .tab-item {
      padding: 0 0.5rem;
      text-decoration: none;
      font-size: 1rem;

      .tab-item-text {
        color: @color-text-light;
        font-size: 0.8rem;
      }
    }

    .router-link-exact-active {

      border-bottom: 0.1rem solid @color-text;

      .tab-item-text {
        color: @color-text;
      }
    }
  }

</style>
