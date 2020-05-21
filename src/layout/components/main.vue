<template>
  <!-- <section class="vh-80 app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
      <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>-->
  <div id="main-wrap">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../styles/index.less";
#main-wrap {
  position: fixed;
  left: @navMenu;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 20px solid #f5f5f5;
}
</style>