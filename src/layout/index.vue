<template>
  <div class="flex">
    <side-bar />
    <div class="w-90">
      <header-nav />
      <main-layout />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import headerNav from "./components/header";
import mainLayout from "./components/main";
import sideBar from "./components/sideBar";
export default {
  name: "layout",
  components: { headerNav, mainLayout, sideBar }
};
</script>

<style>
</style>