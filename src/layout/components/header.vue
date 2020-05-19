<template>
  <div class="w-100 vh-20 flex-between bg-ccc">
    <div class="p-10px" @click="methods.changeCollapse">
      <svg-icon class="cursor-p" iconClass="user" classIconName="user font50px"></svg-icon>
    </div>
    <div class="flex-around p-10px">
      <svg-icon class="cursor-p" iconClass="user" classIconName="user font12px"></svg-icon>
      <div class="ml-10px">黄庆</div>
    </div>
  </div>
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

<style>
</style>