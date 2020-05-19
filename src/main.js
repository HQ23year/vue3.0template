import Vue from 'vue';
import App from './App.vue';
import compositionApi from '@vue/composition-api'; //开启vue3.0
import '../mock';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import './styles/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import './icons';
import './utils/permission';
Vue.use(ElementUI);
Vue.use(compositionApi);
Vue.config.productionTip = false;

// runtime 模式
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');