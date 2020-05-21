<template v-loading=" fullscreenLoading">
  <div class="vh-100 bg-main">
    <div class="w-330px m-auto">
      <ul class="flex-around">
        <li
          class="mt-10 cursor-p"
          :class="state.model==item.txt?'c-primary':'c-white'"
          @click="methods.toggleMenu(item)"
          v-for="item in state.menuTab"
          :key="item.id"
        >{{item.txt}}</li>
      </ul>
      <div class="c-ccc flex mt-10">
        <label class="w-30">邮箱</label>
        <el-input type="text" v-model="state.ruleForm.username" />
      </div>
      <div class="c-ccc flex mt-10">
        <label class="w-30">密码</label>
        <el-input type="password" v-model="state.ruleForm.pass" />
      </div>
      <div class="c-ccc flex mt-10" v-if="state.model=='注册'">
        <label class="w-30">重复密码</label>
        <el-input type="password" v-model="state.ruleForm.checkPass" />
      </div>
      <div class="c-ccc flex mt-10">
        <label class="w-30">验证码</label>
        <div class="flex">
          <el-input class="mr-10" type="password" v-model="state.ruleForm.code" />
          <el-button type="primary" @click="asyncMthods.getCode('ruleForm')">获取验证码</el-button>
        </div>
      </div>
      <div class="c-ccc w-100 mt-10">
        <el-button class="w-100" type="danger" @click="asyncMthods.submitForm('ruleForm')">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/*
  加密 base64 ,md5 ,sha1 

  1.前端注册时加密,传给后台
  2.后端再次加密,存入数据库
  3.登录时,用户名与加密后的密码进行比对
  import sha1 from 'js-sha1';
  sha1(number)

*/

import { reactive, ref } from "@vue/composition-api";
import request from "@/api";
import storage from "@/utils/storage";
export default {
  name: "login",
  setup(props, { refs, root }) {
    let state = reactive({
      menuTab: menu,
      model: "登录",
      ruleForm: form,
      fullscreenLoading: false
    });
    const methods = {
      toggleMenu: current => (state.model = current.id === 1 ? "登录" : "注册")
    };
    const asyncMthods = {
      // 登录
      async submitForm(formName) {
        const loading = root.$loading();
        try {
          /*
            登录成功后 
            1.将token存入localStorage
            2.路由跳转至首页
          */
          const res = await root.$store.dispatch("login/test");
          storage.setToken("111111");
          loading.close();
          root.$router.push("/home");
        } catch (error) {}
      },
      // 获取验证码
      async getCode(formName) {
        try {
          const res = await request.login.getSms({
            username: "1111111@qq.com",
            module: "login"
          });
          console.log(res);
        } catch (error) {}
      }
    };
    return { state, methods, asyncMthods };
  }
};
const form = {
  username: "",
  pass: "",
  checkPass: "",
  code: ""
};
const menu = [
  {
    id: 1,
    txt: "登录"
  },
  {
    id: 2,
    txt: "注册"
  }
];
</script>

<style>
</style>