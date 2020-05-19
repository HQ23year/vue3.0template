import Vue from "vue";
import Vuex from "vuex";
import app from './module/app';
import login from './module/login';
import permission from './module/permission';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app, login, permission
  }
});

// content.state content.commit content.getters content.rootGetters
