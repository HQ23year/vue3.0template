<template>
  <div class="vh-100 bg-main p-10px transition" :class="state.isCollapse?'w-3':'w-10'">
    <el-menu
      default-active="2"
      text-color="#ccc"
      class="w-100 el-menu-vertical-demo"
      :collapse="state.isCollapse"
      unique-opened
      router
    >
      <template v-for="(item,index) in state.routes">
        <el-submenu v-if="!item.hidden" :index="`${index}`" :key="item.name">
          <template slot="title">
            <svg-icon
              :iconClass="`${item.meta.icon}`"
              :classIconName="`${item.meta.icon} font12px` "
            />
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item
            :index="item2.path"
            v-for="item2 in item.children"
            :key="item2.name"
          >{{item2.meta.title}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref, computed } from "@vue/composition-api";
export default {
  name: "sideBar",
  setup(props, { root }) {
    // root指代vue
    console.log(root.$router.options.routes);
    const state = reactive({
      isCollapse: computed(() => root.$store.state.app.isCollapse),
      routes: root.$router.options.routes
    });
    // console.log(root.$store.state.isCollapse);从store中取值
    // root.$store.commit('SET_ISCOLLAPSE',value); 向store传值
    return { state };
  }
};
</script>

<style>
.transition {
  -webkit-transition: all 0.3s ease 0s;
}
</style>