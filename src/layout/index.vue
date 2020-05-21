<template>
  <div>
    <layout-header />
    <layout-main />
    <layout-nav />
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import layoutHeader from "./components/Header";
import layoutMain from "./components/Main";
import layoutNav from "./components/Nav";
export default {
  name: "layout",
  components: { layoutHeader, layoutMain, layoutNav },
  setup() {}
};
</script>

<style>
</style>