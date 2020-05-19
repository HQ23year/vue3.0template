//自定义全局组件
import Vue from 'vue';
import svgIcon from './svgIcon.vue';
Vue.component('svg-icon', svgIcon)

/**
 * 
 * require.context 一次性的引入指定目录的所有文件
 * @param string './svg' 需要引入文件的目录
 * @param boolean false 是否遍历子集目录
 * @param regExp  /\.svg$/ 定义遍历文件规则
*/
const req = require.context('../assets/icons', false, /\.svg$/)
const requireAll = c => c.keys().map(c)
requireAll(req)
