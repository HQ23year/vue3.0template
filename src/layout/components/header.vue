<template>
  <!-- <div class="w-100 vh-20 flex-between bg-ccc">
    <div class="p-10px" @click="methods.changeCollapse">
      <svg-icon class="cursor-p" iconClass="user" classIconName="user font50px"></svg-icon>
    </div>
    <div class="flex-around p-10px">
      <svg-icon class="cursor-p" iconClass="user" classIconName="user font12px"></svg-icon>
      <div class="ml-10px">黄庆</div>
    </div>
  </div>-->
  <div id="header-wrap"></div>
</template>

<script>
import { reactive, ref, computed } from "@vue/composition-api";
export default {
  name: "headerNav",
  setup(props, { root }) {
    const methods = {
      changeCollapse: () => {
        root.$store.commit("app/SET_ISCOLLAPSE");
        root.$store.dispatch("app/test");
      }
    };

    return { methods };
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/index.less";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: @navMenu;
  height: 75px;
  background-color: #fff;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1);
}
</style>